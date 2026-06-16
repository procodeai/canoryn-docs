---
name: Canoryn Docs Developer
description: Expert guide on contributing to the public Canoryn documentation site.
---

# Canoryn Docs - Agent Skill

> IMPORTANT: Always ask the user before running `git commit`, `git push`, or creating/merging pull requests. Never auto-commit or auto-push without explicit user approval.

This skill helps coding agents work safely in the public `canoryn-docs` repository.

## Project Overview

- **Product**: Canoryn for macOS
- **Framework**: VitePress 1.x
- **Theme**: Custom VitePress theme overrides in `.vitepress/theme/custom.css`
- **Repo**: `procodeai/canoryn-docs`
- **Public Docs URL**: `https://canoryn.app/docs`
- **Product Site**: `https://canoryn.app`
- **Public contribution model**: users can click the page edit link, edit on GitHub, and submit a pull request.

## Public vs Internal Rule

This repository is public. Keep it user-facing.

Allowed here:
- Installation guides
- Quick starts
- User workflows
- Permissions/privacy explanations
- Architect UI usage docs
- Public action/API references
- Public changelog entries

Do not add here:
- Internal strategy docs
- Future roadmap planning
- Architecture decision records intended only for the app team
- Agent handoff notes
- Private launch/pricing/support planning
- Secrets, credentials, tokens, private URLs, or screenshots containing private data

Internal product, architecture, and strategy notes belong in the private Aura repo under `docs/internal-design/` or another private docs folder.

## Directory Structure

```text
canoryn-docs/
├── .agent/skills/docs_developer/SKILL.md
├── .github/workflows/deploy.yml
├── .vitepress/
│   ├── branding.ts
│   ├── config.mts
│   ├── public/
│   └── theme/custom.css
├── guide/                 # Getting started and user concepts
├── architect/             # Visual editor docs
├── api/                   # Public actions/API reference
├── changelog.md
└── index.md               # Docs home page
```

## Commands

```bash
npm run docs:dev      # Start dev server at localhost:5173/docs/
npm run docs:build    # Build production docs
npm run docs:preview  # Preview production build
```

Run `npm run docs:build` before committing documentation structure, nav, or link changes.

## Branding Contract

Use values from `.vitepress/branding.ts` when possible.

Current canonical values:
- `appName`: `Canoryn`
- `companyName`: `Procode AI Labs`
- `websiteUrl`: `https://canoryn.app`
- `docsUrl`: `https://canoryn.app/docs`
- `supportEmail`: `support@canoryn.app`

Copy rule:
- Product/user docs should say `Canoryn`.
- Footer/company/legal references can say `Canoryn by Procode AI Labs`.
- Do not present `Aura`, `Canoryn`, and `Procode AI` as competing product names.

## Adding New Pages

1. Create the Markdown file in the relevant public section.

```bash
touch guide/new-feature.md
```

2. Add frontmatter when useful.

```markdown
---
title: New Feature
description: How to use the new feature in Canoryn
---

# New Feature
```

3. Add the page to `.vitepress/config.mts` sidebar/nav if it should be discoverable.

4. Build before handoff.

```bash
npm run docs:build
```

## Link Rules

- Internal links should use docs-root paths, e.g. `/guide/installation`.
- Product-site links should use `https://canoryn.app/...`.
- Download links should point to `https://canoryn.app/download`.
- Support links should point to `https://canoryn.app/support` or `support@canoryn.app`.
- Page edit links are configured in `.vitepress/config.mts` with GitHub's edit URL pattern.

## Edit Link Behavior

The public docs site should expose a GitHub edit link for every docs page.

Expected behavior:
- Users with repo access edit directly.
- Users without access are prompted by GitHub to fork and submit a pull request.
- The target branch should be `main`, because `main` is the deployed documentation branch.

Current pattern:

```ts
editLink: {
  pattern: "https://github.com/procodeai/canoryn-docs/edit/main/:path",
  text: "Edit this page on GitHub",
}
```

## Style Guidelines

- Keep docs practical and product-grounded.
- Prefer concrete user actions over internal architecture language.
- Avoid unsupported claims such as signed/notarized/private/offline unless they are accurate for the current public release.
- Avoid generated filler articles.
- Keep examples realistic and testable.

Use VitePress containers when helpful:

```markdown
::: tip
Helpful context.
:::

::: warning
Important limitation.
:::
```

## Deployment

- `main` deploys public docs.
- Use `dev` or feature branches for changes.
- PR into `main` for deployable docs updates.
- GitHub/Cloudflare Pages checks should pass before merge.

## Common Tasks

- Update sidebar: `.vitepress/config.mts` -> `sidebar`
- Update top nav: `.vitepress/config.mts` -> `nav`
- Update social links/brand values: `.vitepress/branding.ts`
- Update theme styling: `.vitepress/theme/custom.css`
- Fix dead links: create the missing page or correct the link; do not disable dead-link checks casually.
