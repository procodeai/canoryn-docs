<script setup lang="ts">
import { data as releases } from '../releases.data.mjs'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="releases-container">
    <div v-if="!releases || releases.length === 0" class="no-releases">
      <p>No release notes available at the moment. Please check back later.</p>
    </div>

    <article
      v-for="release in releases"
      :key="release.tag"
      class="release-item"
    >
      <!-- One heading: product title + date. Tag is in the anchor id only (no badge repeat). -->
      <header class="release-header">
        <h2 :id="release.tag">{{ release.name }}</h2>
        <time class="date" :datetime="release.publishedAt">
          {{ formatDate(release.publishedAt) }}
        </time>
      </header>

      <div class="release-body custom-markdown" v-html="release.html"></div>

      <div class="release-actions">
        <a
          :href="release.url"
          target="_blank"
          rel="noopener noreferrer"
          class="github-link"
        >
          View on GitHub
        </a>
      </div>

      <hr class="release-divider" />
    </article>
  </div>
</template>

<style scoped>
.releases-container {
  margin-top: 2rem;
}
.release-item {
  margin-bottom: 4rem;
}
.release-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.75rem 1.25rem;
  margin-bottom: 1.25rem;
}
.release-header h2 {
  margin: 0;
  border-top: none;
  padding-top: 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.date {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
.release-body {
  margin-bottom: 1.5rem;
  line-height: 1.7;
}
.github-link {
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  transition: background-color 0.2s;
}
.github-link:hover {
  background-color: var(--vp-c-bg-soft-up);
}
.release-divider {
  margin-top: 3rem;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
}

/* Hide leftover duplicate title if a feed body still starts with # Canoryn … */
.custom-markdown :deep(> h1:first-child) {
  display: none;
}

.custom-markdown :deep(h3) {
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}
.custom-markdown :deep(ul) {
  margin-left: 1.5rem;
  list-style-type: disc;
  margin-bottom: 1rem;
}
.custom-markdown :deep(li) {
  margin-bottom: 0.5rem;
}
</style>
