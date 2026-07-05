<script setup lang="ts">
// Import the data exported from our data loader
import { data as releases } from '../releases.data.mjs'
</script>

<template>
  <div class="releases-container">
    <div v-if="!releases || releases.length === 0" class="no-releases">
      <p>No release notes available at the moment. Please check back later.</p>
    </div>
    
    <div v-for="release in releases" :key="release.tag" class="release-item">
      <h2 :id="release.tag">{{ release.name }}</h2>
      
      <div class="release-meta">
        <span class="tag">{{ release.tag }}</span>
        <span class="date">{{ new Date(release.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
      </div>
      
      <!-- Render the HTML generated at build time by VitePress -->
      <div class="release-body custom-markdown" v-html="release.html"></div>
      
      <div class="release-actions">
        <a :href="release.url" target="_blank" rel="noopener noreferrer" class="github-link">
          View Raw Release on GitHub
        </a>
      </div>
      
      <hr class="release-divider" />
    </div>
  </div>
</template>

<style scoped>
.releases-container {
  margin-top: 2rem;
}
.release-item {
  margin-bottom: 4rem;
}
.release-item h2 {
  margin-top: 0;
  border-top: none;
  padding-top: 0;
}
.release-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
.tag {
  background-color: var(--vp-c-bg-soft);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-family: var(--vp-font-family-mono);
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
.release-body {
  margin-bottom: 2rem;
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

/* Fix injected HTML spacing to match VitePress */
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
