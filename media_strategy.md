# Media Strategy for Professional Docs

Since we are hosting on **GitHub** (likely via GitHub Pages or Netlify/Vercel linked to the repo), here is the professional approach:

## 1. Screenshots (Static)

- **Hosting**: Commit directly to the repo.
- **Location**: `docs/public/images/` (or similar, depending on VitePress config).
- **Format**: `WEBP` or `PNG` (Optimized).
- **Syntax**: `![Alt Text](./images/my-screenshot.png)`

## 2. Short Interactions (The "Pro" Feel)

- **Goal**: Show simple actions like "Dragging a Node" or "Connecting a Wire".
- **Avoid**: YouTube (ads, chrome, loading times).
- **Avoid**: GIF (Huge file size, low quality).
- **Best Practice**: **Autoplaying MP4/WebM**.
  - Commit small (<2MB) video files to `docs/public/videos/`.
  - VitePress/HTML can render them as looping, silent "figures":
  ```html
  <video autoplay loop muted playsinline width="100%">
    <source src="/videos/drag-node.mp4" type="video/mp4" />
  </video>
  ```

## 3. Long Walkthroughs

- **Goal**: A 5-minute "How to build an agent" tutorial.
- **Best Practice**: **YouTube Embed**.
  - Host on YouTube.
  - Embed in the docs using a custom component or iframe.
