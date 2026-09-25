---
description: "Git in the editor: changes in the gutter by kind, staging hunks and lines in Review, the change card that stages, commits and discards one change, and undoing a commit."
---

# Git & commits

Canoryn shows what changed where you read code, and lets you stage and commit without leaving it. Since **0.6.0**.

## The git rail

The gutter beside the line numbers shows each change by kind — added, modified, deleted — against what is committed; ⌃⌥↓ and ⌃⌥↑ move between them. Click a mark (or press ⌥⏎ in a change) to open it: the lines that were there at `HEAD` appear above the current ones, and a **change card** sits beside the rail. See [Code editor → Changes in the gutter](/guide/code-editor#changes-in-the-gutter).

## The change card

The card acts on just that change:

- **Revert** — puts the lines back as they were, as one undoable edit.
- **Stage** / **Unstage** — reads **Save to stage** while the file has unsaved edits.
- **Commit** — with a message you write, or **Generate & Commit** to have the model write it from the change; **Amend** folds it into the last commit.

After a commit the card says what it did — which files, and the commit's hash — with **Undo**, which takes the commit back and leaves your changes as they were before it.

## Staging in Review

In the [Review workbench](/guide/review-workbench), each hunk and line has a box that shows where it is in Git's three trees: unstaged, staged, or partly staged. Tick to stage, untick to unstage. The split view lays staged and unstaged side by side, the way JetBrains IDEs do.

Badges on files, tab indicators and the change card follow a stage or a commit straight away, wherever you made it.
