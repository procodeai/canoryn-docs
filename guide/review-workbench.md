---
description: "Git Review beside Chat — staged and unstaged changes, lazy diffs, hunk stage/revert, commit drafts, and behavior that stays usable on large trees."
---

# Review workbench

The **Review** tab in the [Chat workbench](/guide/chat-workbench) is a Source Control desk for the session project. Open it from **+ → Review** (whole root) or from a file path (file-scoped).

Review is for **inspecting and committing** what changed. From **0.4.0**, you can also leave **durable review threads** (annotations) on a diff or a normal file — they live with the project, not inside a single chat session. Editing file contents still happens in your external editor; the File tab stays read-only.

## Open Review

1. Attach a [session project](/guide/chat-workbench#session-projects).
2. Open **+ → Review**, or open a file and jump into its diff from the tree / badges.
3. Pick a **compare scope** in the toolbar (remembered per tab).

### Compare scopes

| Scope | Use it when |
| :---- | :---------- |
| **Uncommitted** | Everything not on `HEAD` yet (default working view) |
| **Staged** | Only the index |
| **Unstaged** | Working tree vs index |
| **Last commit** | Inspect the tip commit (read-only SCM) |
| **Specific commit** | Inspect that commit (read-only) |
| **Agent Turn** | Changes associated with an agent turn when available |

Read-only scopes show diffs without Stage / Discard / Commit writes.

## Change lists

The SCM tree splits into:

- **Staged**
- **Changes** (unstaged + **untracked**)

Untracked-only trees are real changes — Review does **not** claim “clean working tree” just because `git diff HEAD` is empty. Binary and oversized untracked files stay visible as metadata rather than vanishing.

Files that are both staged and unstaged (`MM`) appear as **one card** with a **Staged | Changes** toggle (defaults to Changes so remaining work stays in view).

### Large repositories

When the change set has **≥ 300 files**, Review switches to **single-file mode**: keep the tree, show one selected file’s diff, and disable collapse-all on that surface so the UI stays responsive.

## Diff presentation

- **Metadata first** — file list and stats load before heavy patches.
- **Lazy hydration** — hunks load when a card enters the viewport / you expand it (bounded concurrency).
- **Compact context** by default (`-U3`); optional **Load full files** for huge unified context with fold/expand of unmodified regions.
- **Unified** (default) or **side-by-side**.
- Optional **word diffs**.
- Syntax enrichment after the plain patch publishes; very large `+/-` counts skip heavy highlighting.
- Dual-axis scrolling for long lines; gutter chrome for added/removed lines.

Collapsed cards may drop resident hunks under memory pressure and rehydrate when you open them again.

## SCM actions

### File-level

From the tree or file header (working-tree scopes):

- **Stage** / **Unstage** / **Stage all**
- **Discard** — confirmation required for destructive cases; on partially staged (`MM`) paths, discard restores the **worktree only** so the staged side is preserved
- **Commit** / **Amend** / **Push** from the commit composer
- Optional “stage all if nothing is staged” before commit
- Commit message drafts can be stored and synced while you work the review

Failures surface visibly — silent no-ops are treated as bugs.

### Hunk / change-block

On hover over a change block (working-tree Changes / unstaged):

- **Stage Change** — builds a unidiff for the selected lines and applies it to the index
- **Revert Change** — restores those lines in the working tree from the reverse patch

Not offered on Staged cards or read-only scopes.

## Annotations (0.4.0+)

Leave a **thread on a line range** from unified or split Review (or from a normal File tab). Threads are stored with the project:

- shared across chat sessions on the same repo root,
- anchored by content fingerprint (lines are hints — moved code can reattach or ask for review),
- open / resolved with agent and user replies in order.

Annotations are not owned by a single chat session or a one-off diff card.

Full walkthrough: [Annotations](/guide/annotations).

## Freshness

Review listens to project file / repository events (debounced). After your own git mutations it soft-refreshes metadata and rehydrates only paths that actually moved — so staging one hunk should not flash the whole tree or overwrite a newer selection with a stale async load.

## Working with Chat

- Open a changed file from Review into a **File** preview tab when you want breadcrumbs, Ask-about-selection, or Open Externally.
- Agent consent cards may embed diff review in the **feed**; that is parallel to the Review tab, not a replacement for whole-root SCM.
- Keep talking in the conversation lane while Review stays open — the work panel is meant to stay beside the turn.

## Related

- [Chat workbench](/guide/chat-workbench) — projects, tabs, file desk, agent loop
- [Annotations](/guide/annotations) — durable review threads on File and Review
- [Appearance](/guide/appearance) — syntax themes and typography
- [Permissions](/guide/permissions) — consent for writes and shell
- [Build with chat](/guide/build-with-chat) — Architect canvas chat
