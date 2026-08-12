---
description: "Attach a project to Chat, open typed workbench tabs, review git changes beside the conversation, and keep terminal or browser sessions while the agent works."
---

# Chat workbench

From **0.3.0**, main **Chat** is a three-lane desk: **sessions** · **conversation** · **work panel**. Attach folders to a session, open typed tabs beside the feed, and review what the agent did without leaving the window.

This is **review-first**. The panel is a read-only viewer with an escape hatch to your real editor — not a replacement for Xcode, Cursor, or VS Code.

Docs companion: [Review workbench](/guide/review-workbench) for git diffs, stage/discard/commit, and large-repo behavior.

## Why it exists

Chat alone hides the work behind a transcript. Architect alone is for reusable workflows on a canvas. The workbench sits in between:

- You and the agent share the **same project folders** for that session.
- Files the agent touches can open as **preview tabs** next to the turn.
- You inspect diffs, stage or discard with confirmation, then keep talking.
- Terminal and browser tabs use the **same live surfaces** the canvas uses — not a second toy UI.

## Three lanes

| Lane | What you do there |
| :--- | :---------------- |
| **Session list** | Browse chats. Sessions group by project folder name when a project is attached. The list is a resizable, clamped column. |
| **Conversation** | The coding-agent-style loop — tool cards, consent, evidence. Select text across paragraphs without the selection breaking at every block. |
| **Work panel** | Typed tabs (File, Review, Terminal, Browser, Console, Artifacts). Show, hide, or expand the panel; width is clamped so chat never collapses to nothing. |

Window titles distinguish chat sessions (and project names) so multiple windows stay identifiable in Mission Control.

## Session projects

A **Project** here is not the Workflows library (`.cryn` files) and not the Knowledge indexer path. It is a **per-session multi-root code project**.

### Attach folders

1. Open **Chat**.
2. In the composer context bar, choose a project (or **Choose project**).
3. Add one or more folders. Pick a **primary** root — relative paths from the agent resolve against that primary.
4. Secondary roots can be added or removed later.

Bookmarks are security-scoped. A root that disappears stays listed (marked unavailable) with **Re-locate…** — it is never silently dropped.

### Rules that matter

- **No project is valid.** Chat still works for general tasks; file and Review tabs simply have nowhere to resolve.
- **Primary root locks** once the session has history (or once a project already exists). Changing primary means a **new or forked** session. Secondary roots remain flexible.
- **Forks inherit** the project.
- **Capability grants revoke** when roots change — the agent must re-earn write / shell / network consent for the new tree.

### What the agent is allowed to do

With a project attached:

| Kind of action | Typical behavior |
| :------------- | :--------------- |
| Read inside the project | Allowed for coding work |
| Write / shell / network | Needs your consent |
| Paths outside the project | Needs approval (outside-project flag) |
| Unclassified coding/system actions | **Fail closed** — not treated as “no effects” |

Approved commands can run in a **project sandbox**. Opaque shell compositions are escalated rather than waved through.

## Right-pane tabs

Open tabs from **+** (File, Review, Terminal, Browser, Console) or from the agent feed (file cards).

| Kind | Label / role |
| :--- | :----------- |
| **File** | One project file (path relative to a root). Empty File tab prompts you to open something. |
| **Review** | Whole-root git review, or a file-scoped diff when opened from a path. |
| **Terminal** | Live shell; working directory defaults to the primary project root. |
| **Browser** | Live WebKit page in the pane (profile cookies can match canvas; the page view does not share a WKWebView with a canvas node). |
| **Console** | Place for turn command / tool output streaming (thin today — expect growth). |
| **Artifact** | Durable turn artifacts by id. |

### Preview, pin, and eviction

- **Single-click** a tree file → italic **preview** tab. The next preview **replaces** it.
- **Double-click** (or pin) → keep the tab.
- **Running terminals auto-pin** so eviction does not kill an active shell.
- Cap of **8 non-pinned** tabs; least-recently-used non-pinned tabs close when you open more. Pinned tabs are immune.
- Tab strip state (and panel width / tree visibility / review scope) **persists per session**.

### Lifecycle — switch vs close

| Action | Terminal / browser | File / Review |
| :----- | :----------------- | :------------ |
| **Switch away** | Session stays; remounts when you return | Stay mounted (hidden) so scroll and hydrate survive |
| **Close the tab** | Disposes the live surface (shell / browser session released) | Drops the tab and file interest |

Closing the **last** tab hides the work panel.

## File desk

### Tree

- Optional column beside the code (toggle).
- Lazy expand across all available roots; filter; optional “show ignored.”
- **Git badges** on rows: modified / added / deleted / untracked (`M` / `A` / `D` / `?`).
- Material-style file icons.

### Code view

- Line-based source with a gutter for git marks on the open file.
- Syntax highlighting via Canoryn’s own highlighter (large or binary files stay plain).
- Markdown: Preview / Source.
- **Breadcrumbs** over the editor — jump siblings, open folders, toggle the tree.
- Dual-axis scrolling for long lines without losing the gutter.

### Ask about a selection

Select lines → floating **Ask about line(s)…** drafts a root-qualified `path:start-end` citation and a fenced snippet into the composer. It does **not** auto-send — you review and submit.

### External editor (the escape hatch)

The workbench is **read-only** on purpose. Use **Open** / Open Externally / Reveal in Finder / copy path when you want to edit in VS Code, Xcode, or another app. Disk remains the source of truth: after you save elsewhere, the tab refreshes through the project file watcher (including atomic save/rename).

Deleted-on-disk files keep last content with a stale banner instead of vanishing mid-review.

## Agent loop beside the panel

- **File activity cards** in the feed: click a path → opens (or focuses) a **preview** tab in the work panel. Relative paths resolve through the session project — not the GUI process cwd.
- **Diff / consent cards** can show patch review inline in the feed. Approving applies reviewed patches **atomically** where that path is used; rejecting leaves the tree alone.
- Feed diffs and long terminal dumps **collapse** with magnitude summaries so the transcript stays scannable.
- Conversation context is the authority for the turn; checkpoints compact without inventing a second chat history.

## Same live surfaces as the canvas

Terminal and browser tabs mount through the existing **NodeSurface** hosts — the same controllers Architect uses — so behavior stays one product, not a chat-only fork.

**Code and diff on the canvas** as first-class reusable surfaces are still finishing (renderer kinds exist; full shared surface hosting is not the acceptance bar for 0.3.0). Day-to-day review lives in the Chat work panel.

## Related main-window changes (same wave)

Not the right pane itself, but shipped alongside it:

- Shorter **navigation rail**
- **Workflows Library** as a second column with filtering
- **Capabilities** area for skills, tools, connections, and MCP
- **Workflows separated from agents** in navigation
- More consistent **graph run recording** so automation and agent-driven runs show up in history

## What this is not

- Not an in-pane code editor or LSP IDE
- Not a promise that closing a terminal tab can reopen the same PTY five minutes later (close disposes today)
- Not titlebar-hoisted tabs by default (that band exists but stays off unless enabled)
- Not a second browser that shares a live page with a canvas Browser Node (cookies/profile can align; views must not)

## Related guides

- [Review workbench](/guide/review-workbench) — scopes, SCM actions, lazy diffs, large repos
- [Build with chat](/guide/build-with-chat) — chat docked beside a live Architect canvas
- [Browser Nodes](/guide/browser-nodes) — live WebKit on the canvas
- [Permissions](/guide/permissions) — consent and what the agent may touch
- [CLI & MCP](/guide/cli-and-mcp) — drive workflows from other tools
