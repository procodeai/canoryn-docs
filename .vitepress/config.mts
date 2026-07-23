import { defineConfig } from "vitepress";
import { branding } from "./branding";

const docsOrigin = "https://canoryn.app/docs/";

function docsCanonicalPath(relativePath: string): string {
  const cleaned = relativePath
    .replace(/(^|\/)index\.md$/, "$1")
    .replace(/\.md$/, "")
    .replace(/\/+$/, "");
  return cleaned ? `${docsOrigin}${cleaned}` : docsOrigin;
}

export default defineConfig({
  base: "/docs/",
  // Static assets: ./public (VitePress default). themeConfig.logo → /docs/logo.svg
  title: branding.appName,
  description: "Build local-first AI agents that automate your Mac",
  ignoreDeadLinks: false,
  // Keep README out of the public site / sitemap (repo readme ≠ docs page).
  srcExclude: ["**/README.md", "**/readme.md"],
  // Trailing slash required: without it, sitemap URLs resolve to canoryn.app/guide/...
  // (dropping /docs) and Google gets 404s. See VitePress sitemap + `base` docs.
  sitemap: {
    hostname: docsOrigin,
    transformItems: (items) =>
      items
        .filter((item) => {
          const path = item.url.replace(/^\//, "").toLowerCase();
          return path !== "readme" && !path.endsWith("/readme");
        })
        .map((item) => ({
          ...item,
          // Relative to hostname so /docs/ is preserved (leading "/" would wipe it).
          url: item.url.replace(/^\//, ""),
        })),
  },

  head: [
    ["link", { rel: "icon", href: "/docs/favicon.svg", type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#f97316" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: `${branding.appName} Docs` }],
    [
      "meta",
      {
        property: "og:description",
        content: "Build local-first AI agents that automate your Mac",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary" }],
  ],

  // Per-page canonical + og:url (global canonical was collapsing every page to /docs/).
  transformPageData(pageData) {
    const canonical = docsCanonicalPath(pageData.relativePath);
    const title = pageData.title
      ? `${pageData.title} | ${branding.appName}`
      : `${branding.appName} Docs`;
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(
      ["link", { rel: "canonical", href: canonical }],
      ["meta", { property: "og:url", content: canonical }],
      ["meta", { property: "og:title", content: title }],
    );
  },

  // Clean URLs (no .html extension)
  cleanUrls: true,

  // Markdown configuration for variable replacement
  markdown: {
    config: (md) => {
      const replacePlaceholders = (source: string): string => {
        let output = source;
        Object.entries(branding).forEach(([key, value]) => {
          output = output.split(`[[${key}]]`).join(String(value));
        });
        return output;
      };

      const replaceInObject = (value: unknown): unknown => {
        if (typeof value === "string") return replacePlaceholders(value);
        if (Array.isArray(value)) return value.map(replaceInObject);
        if (value && typeof value === "object") {
          Object.entries(value as Record<string, unknown>).forEach(([k, v]) => {
            (value as Record<string, unknown>)[k] = replaceInObject(v);
          });
        }
        return value;
      };

      // Recurse into children: paragraph/heading text lives in each block token's
      // `children` (inline tokens), and that's what actually renders — replacing only
      // the top-level `content` misses all body text, leaving [[appName]] raw.
      const applyToTokens = (tokens: any[]) => {
        tokens.forEach((token) => {
          if (token.content) {
            token.content = replacePlaceholders(token.content);
          }
          if (token.children && token.children.length) {
            applyToTokens(token.children);
          }
        });
      };

      md.core.ruler.after("block", "branding_replace", (state) => {
        applyToTokens(state.tokens);

        // Also replace placeholders in page frontmatter (hero/actions/etc).
        if (state.env.frontmatter) {
          replaceInObject(state.env.frontmatter);
        }
      });
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: branding.appName,

    // Navigation
    nav: [
      { text: "Guide", link: "/guide/introduction" },
      { text: "Architect", link: "/architect/overview" },
      { text: "API", link: "/api/actions" },
      { text: "Changelog", link: "/changelog" },
      { text: "Website", link: branding.websiteUrl },
      { text: "Download", link: `${branding.websiteUrl}/download` },
      {
        text: "Resources",
        items: [
          {
            text: "Support",
            link: `${branding.websiteUrl}/support`,
          },
          {
            text: "Website",
            link: branding.websiteUrl,
          },
          {
            text: "Download",
            link: `${branding.websiteUrl}/download`,
          },
          {
            text: "Product Changelog",
            link: `${branding.websiteUrl}/changelog`,
          },
          {
            text: "GitHub",
            link: branding.githubUrl,
          },
          {
            text: "X",
            link: branding.twitterUrl,
          },
          {
            text: "Instagram",
            link: branding.instagramUrl,
          },
          {
            text: "YouTube",
            link: branding.youtubeUrl,
          },
          {
            text: "Releases",
            link: branding.releasesUrl,
          },
        ],
      },
    ],

    // Sidebar
    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/guide/introduction" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Quick Start", link: "/guide/quickstart" },
            { text: "Architect Copilot", link: "/guide/architect-copilot" },
            { text: "Research Boards", link: "/guide/research-boards" },
            { text: "CLI & MCP", link: "/guide/cli-and-mcp" },
            { text: "Beta Limitations", link: "/guide/beta-limitations" },
            { text: "Troubleshooting", link: "/guide/troubleshooting" },
          ],
        },
        {
          text: "Core Concepts",
          items: [
            {
              text: `How ${branding.appName} Works`,
              link: "/guide/how-it-works",
            },
            { text: "Agents & Blueprints", link: "/guide/agents" },
            { text: "Memory System", link: "/guide/memory" },
          ],
        },
        {
          text: "Privacy & Security",
          items: [
            { text: "Permissions", link: "/guide/permissions" },
            { text: "Local Processing", link: "/guide/local-processing" },
          ],
        },
      ],
      "/architect/": [
        {
          text: "Visual Editor",
          items: [
            { text: "Overview", link: "/architect/overview" },
            {
              text: "Canvas & Interactions",
              link: "/architect/canvas_details",
            },
            {
              text: "Browser & Inspector",
              link: "/architect/sidebar_inspector",
            },
            { text: "Workflow & Management", link: "/architect/workflow" },
            { text: "Debugging & Console", link: "/architect/debugging" },
          ],
        },
        {
          text: "App Reference",
          items: [
            { text: "Controls & Shortcuts", link: "/architect/controls" },
            { text: "Wiring System", link: "/architect/wiring" },
            { text: "Grouping", link: "/architect/grouping" },
          ],
        },
        {
          text: "Node Library",
          items: [
            { text: "Logic & Flow", link: "/architect/reference/core_nodes" },
          ],
        },
        {
          text: "Action Library",
          items: [
            {
              text: "System & Files",

              items: [
                {
                  text: "System Control",
                  link: "/architect/reference/actions/system#system-control",
                },
                {
                  text: "File System",
                  link: "/architect/reference/actions/system#file-system",
                },
                {
                  text: "Visuals & UI",
                  link: "/architect/reference/actions/system#visuals-ui",
                },
              ],
            },
            {
              text: "Productivity",

              items: [
                {
                  text: "Notes & Reminders",
                  link: "/architect/reference/actions/productivity#notes-reminders",
                },
                {
                  text: "Calendar",
                  link: "/architect/reference/actions/productivity#calendar",
                },
                {
                  text: "Mail",
                  link: "/architect/reference/actions/productivity#mail",
                },
              ],
            },
            {
              text: "Media & Entertainment",

              items: [
                {
                  text: "Apple Music",
                  link: "/architect/reference/actions/media#music-apple-music",
                },
                {
                  text: "Spotify",
                  link: "/architect/reference/actions/media#music-spotify",
                },
                {
                  text: "Streaming & Entertainment",
                  link: "/architect/reference/actions/media#streaming-entertainment",
                },
              ],
            },
            {
              text: "Web & Info",

              items: [
                {
                  text: "Web Access",
                  link: "/architect/reference/actions/web#web-access",
                },
                {
                  text: "General Info",
                  link: "/architect/reference/actions/web#general-info",
                },
              ],
            },
            {
              text: "Memory & Storage",

              items: [
                {
                  text: "Core Memory",
                  link: "/architect/reference/actions/memory#core-memory",
                },
                {
                  text: "Vector Database",
                  link: "/architect/reference/actions/memory#vector-database",
                },
              ],
            },
            {
              text: "Advanced & Coding",

              items: [
                {
                  text: "Agent Management",
                  link: "/architect/reference/actions/advanced#agent-management",
                },
                {
                  text: "Coding & Terminal",
                  link: "/architect/reference/actions/advanced#coding-terminal",
                },
              ],
            },
          ],
        },
      ],
      "/api/": [
        {
          text: "Actions Reference",
          items: [
            { text: "Overview", link: "/api/actions" },
            { text: "Spotify Actions", link: "/api/spotify" },
            { text: "System Actions", link: "/api/system" },
            { text: "AI Actions", link: "/api/ai" },
          ],
        },
      ],
    },

    // Search
    search: {
      provider: "local",
    },

    // Social Links
    socialLinks: [
      { icon: "github", link: branding.githubUrl },
      { icon: "x", link: branding.twitterUrl },
      { icon: "instagram", link: branding.instagramUrl },
      { icon: "youtube", link: branding.youtubeUrl },
    ],

    // Footer
    footer: {
      message: `${branding.appName} by ${branding.companyName} · <a href="${branding.websiteUrl}">Website</a> · <a href="${branding.websiteUrl}/download">Download</a> · <a href="${branding.websiteUrl}/support">Support</a>`,
      copyright: `© 2026 ${branding.companyName}. All rights reserved.`,
    },

    // Edit Link
    editLink: {
      pattern: "https://github.com/procodeai/canoryn-docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    // Last Updated
    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "medium",
      },
    },
  },
});
