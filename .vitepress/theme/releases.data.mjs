import { createMarkdownRenderer } from 'vitepress'
import { branding } from '../branding'

export default {
  async load() {
    const response = await fetch(branding.releaseFeedUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch Canoryn release feed: ${response.status} ${response.statusText}`)
    }

    const feed = await response.json()
    const rawReleases = Array.isArray(feed.releases) ? feed.releases : []

    const md = await createMarkdownRenderer(process.cwd())

    return rawReleases.map((release) => ({
      tag: release.tag,
      name: release.title || release.tag,
      publishedAt: release.publishedAt,
      html: md.render(release.body || 'No release notes provided.'),
      url: `${branding.releasesUrl}/tag/${release.tag}`
    }))
  }
}
