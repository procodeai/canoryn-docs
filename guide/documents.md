---
description: "Markdown files as documents: Preview, Edit and Source; properties; blocks and the / menu; toggles, columns and highlights; editing tables, properties and pictures as forms; comments shared with the agent; and the Page panel."
---

# Documents

Open any `.md` file and it reads like a page. The file stays plain Markdown — what you write here opens the same on GitHub, in Obsidian or in any editor. Since **0.6.0**.

## Three ways to look at a file

The switch at the top of a Markdown tab:

- **Preview** reads the document. Nothing you do here changes the file (except ticking a checkbox).
- **Edit** writes it as it reads. The Markdown under the caret shows while you type and renders again when the caret leaves — the way Obsidian's Live Preview or Typora works.
- **Source** is the raw file in the code editor.

All three edit the same buffer, so unsaved changes, ⌘S and conflicts behave as in any other tab. Right-click a block in Preview → **Edit Here** to jump to it in Edit.

## What renders

- **Properties** — the `---` block at the top of a file shows as a card. `icon:`, `cover:` and `title:` draw the page header instead.
- **Callouts** — `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`.
- **Diagrams and math** — ```` ```mermaid ```` and ```` ```math ```` fences render as pictures; click a diagram to zoom, pan and edit its source.
- **Links** — a bare GitHub issue or PR link becomes a card; a link to another file opens it in a tab.
- **Highlights** — `==text==`.
- **Toggles** — `<details><summary>Title</summary> … </details>` opens and closes in Preview.
- **Columns** — blocks side by side:

```markdown
::::columns
:::column
Left side
:::
:::column
Right side
:::
::::
```

## Blocks

Hover a paragraph, heading, list or table in Edit and a `⋮⋮` handle appears beside it.

- **Drag** it to move the block; hold ⌥ to copy.
- **Click** it for the block menu: Turn into, Duplicate (⌘D), Move up/down (⌘⇧↑/↓), Comment, Copy as Markdown, Delete — and for a callout, **Callout Type**.
- **Esc** selects the block under the caret; ↑/↓ move the selection, ⇧↑/↓ extend it, ⌫ deletes it.

## The `/` menu

Type `/` at the start of a line (or after a space) and keep typing to filter: headings, lists and to-dos, quotes and callouts, code, diagrams, math, images, links and link cards, a table of contents made from your headings, today's date, toggles, columns, and templates. ↑/↓ choose, Return inserts, Esc closes.

Templates include design doc, PRD, RFC, meeting notes, runbook, postmortem and weekly update. Put your own in `.canoryn/templates/` in the project — see [AI in documents](/guide/document-ai#templates).

## Editing as a form

Double-click in Edit:

- **A table** — a grid: edit cells, add and remove rows and columns, set alignment. It is written back as an aligned table.
- **The properties card** — each value edited as its type: text, number, checkbox, date, list.
- **A picture** — its caption (drawn under it) and its width.

Each save is one change you can undo.

## Comments

Select text in Preview or Edit and choose **Comment** (⌥⌘M). The thread sits in a margin beside the passage — or as a badge when the pane is narrow — and follows the passage as the text changes. Reply, edit, resolve or delete from the thread.

**Add to Chat** hands a thread to the agent: it edits the document where it should change, then replies in the thread with what it did. It never resolves the thread; that stays yours.

Every discussion in the project is listed in the **Comments** section of the sidebar.

## The Page panel

The page icon at the top of a Markdown tab opens the Page panel:

- **Outline** — the document's headings; click one to go there. The same headings run down the right edge of the pane as a rail of ticks; hover it for the outline.
- **Words, characters and reading time** — prose only, not code or properties.
- **Full width** — let the text run the width of the pane.
- **History** — the file's commits. Open any version to read it rendered, and **Restore This Version** to bring it back as an unsaved change.
- **Share** — see [Sharing & publishing](/guide/sharing-documents).
