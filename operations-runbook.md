# Canoryn Docs Operations Runbook

## Deploy target
- Source repo: `canoryn-docs`
- Production host: `https://docs.canoryn.app`
- Platform: GitHub Pages via `.github/workflows/deploy.yml`

## Branch policy
- Push to `main` deploys docs to production.
- Use feature branches + PR review for docs changes that affect installation, permissions, or API references.

## Domain and canonical policy
- Canonical docs host: `docs.canoryn.app`
- Redirect `docs.procodeai.com/*` to `docs.canoryn.app/*` at DNS/edge level.
- Keep `.vitepress/public/CNAME` committed with `docs.canoryn.app`.

## Secrets and permissions
- Workflow uses GitHub Pages OIDC permissions (`pages: write`, `id-token: write`).
- No external cloud secrets required for docs deploy.

## Rollback
1. Revert or cherry-pick to previous good docs commit on `main`.
2. Re-run the Pages workflow.
3. Verify broken links and canonical tags on key docs pages.

## Release linking
- Product site: `https://canoryn.app`
- App releases: `https://github.com/procodeai/canoryn-releases/releases`
- Support contact: `support@canoryn.app`
