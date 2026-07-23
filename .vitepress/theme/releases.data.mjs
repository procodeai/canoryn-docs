import { createMarkdownRenderer } from 'vitepress'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { branding } from '../branding'

const __dirname = dirname(fileURLToPath(import.meta.url))
const localFallbackPath = join(__dirname, 'releases.fallback.json')

/**
 * GitHub release bodies usually start with `# Canoryn x.y.z`, but
 * ReleaseNotes.vue already renders `release.name` as an <h2>. Strip that
 * leading title so every version does not show a double heading.
 */
function stripLeadingTitleHeading(body, title, tag) {
  if (!body) return ''

  const candidates = [title, tag, tag?.replace(/^v/i, '')]
    .filter(Boolean)
    .map((value) => String(value).trim().toLowerCase())

  const lines = body.replace(/^\uFEFF/, '').split(/\r?\n/)
  let i = 0
  while (i < lines.length && lines[i].trim() === '') i++
  if (i >= lines.length) return ''

  const match = lines[i].match(/^(#{1,2})\s+(.+?)\s*$/)
  if (!match) return body.replace(/^\s+/, '')

  const normalized = match[2].trim().toLowerCase()
  const core = normalized.split(/\s+[—–-]\s+/)[0].trim()
  const isDuplicate =
    candidates.includes(normalized) ||
    candidates.includes(core) ||
    core.startsWith('canoryn ') ||
    candidates.some(
      (c) =>
        normalized === `canoryn ${c}` ||
        normalized === `canoryn ${c.replace(/^v/i, '')}` ||
        normalized.endsWith(` ${c}`),
    )

  if (!isDuplicate) return body.replace(/^\s+/, '')

  lines.splice(i, 1)
  if (lines[i]?.trim() === '') lines.splice(i, 1)
  return lines.join('\n').replace(/^\s+/, '')
}

async function loadFeedJson() {
  try {
    const response = await fetch(branding.releaseFeedUrl)
    if (response.ok) {
      return await response.json()
    }
    console.warn(
      `[releases.data] feed HTTP ${response.status} ${response.statusText}; trying local fallback`,
    )
  } catch (error) {
    console.warn(
      `[releases.data] feed fetch failed (${error?.message || error}); trying local fallback`,
    )
  }

  if (existsSync(localFallbackPath)) {
    return JSON.parse(readFileSync(localFallbackPath, 'utf8'))
  }

  return { schemaVersion: 1, latest: null, releases: [] }
}

export default {
  async load() {
    const feed = await loadFeedJson()
    const rawReleases = Array.isArray(feed.releases) ? feed.releases : []

    const md = await createMarkdownRenderer(process.cwd())

    return rawReleases.map((release) => {
      const title = release.title || release.tag
      const body = stripLeadingTitleHeading(release.body || '', title, release.tag)

      return {
        tag: release.tag,
        name: title,
        publishedAt: release.publishedAt,
        html: md.render(body || 'No release notes provided.'),
        url: `${branding.releasesUrl}/tag/${release.tag}`,
      }
    })
  },
}
