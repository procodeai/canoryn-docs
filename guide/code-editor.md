---
description: "Edit code without leaving the work panel — syntax colouring across 71 languages, folding, multiple carets, find and replace, snippets, line editing, formatting and save modes."
---

# Code editor

The **File** tab in the [Chat workbench](/guide/chat-workbench) is a code editor. From **0.5.0** it edits: you can open any file in the session project, change it, and save — with colouring, folding, multiple carets, find and replace, and the editing commands you already know from VS Code and Xcode.

It exists so a small change does not mean switching to another app. An agent has written most of the code in front of you; when you want to fix a name, adjust a condition, or add a line, you do it here and keep the conversation in view.

## What runs where

Everything on this page is computed inside Canoryn, on the file you have open. Nothing indexes your project, nothing runs in the background, and nothing here depends on a [language server](/guide/language-servers). Turning a server on adds semantics — real compiler diagnostics, hover types, go-to-definition — on top of what is already here; it does not enable the editor.

That split is deliberate. A general-purpose IDE assumes you will spend the day in it and can afford a workspace index. Canoryn assumes you came in for one change, and keeps its idle cost at the size of the file you are looking at.

## Languages

Syntax colouring, comment toggling, bracket pairs and indentation rules are per language. Canoryn recognises **71** languages by file extension, including:

| Family | Languages |
| :----- | :-------- |
| Systems | Swift, Objective-C, C, C++, Rust, Go, Zig, Nim, Crystal |
| JVM | Java, Kotlin, Scala, Groovy, Clojure |
| Web | JavaScript, TypeScript, HTML, CSS, JSON, XML |
| Scripting | Python, Ruby, PHP, Perl, Lua, R, Shell |
| Functional | Haskell, OCaml, F#, Elixir, Erlang, Elm, Lisp |
| Data & config | YAML, TOML, SQL, Markdown |

Colouring is rebuilt for what an edit could have changed, not for the whole file, and files up to **2 MB** highlight without a stall.

## Moving around

| Do | Press |
| :- | :---- |
| Find in file | ⌘F |
| Next / previous match | ⌘G / ⇧⌘G |
| Go to line | ⌘L |
| Go to symbol | ⇧⌘O |
| Find in project | ⌥⌘F |
| Jump to matching bracket | ⌃M |
| Select the enclosing block | ⇧⌃M |
| Go to definition | ⌘-click a symbol *(with a [language server](/guide/language-servers))* |

Find, go-to-line and go-to-symbol work in any file, including read-only ones — a diff, an annotation view, a file you may read but not write. Reading a file is not editing it, and the editor no longer beeps at you for trying.

::: tip Why ⌥⌘F and not ⇧⌘F?
⇧⌘F is Focus Mode in Canoryn. ⇧⌘B is the project check because plain ⌘B is the left panel. The editor claims the shortcut that is actually free rather than the one VS Code uses, and says so in the code.
:::

## Changes in the gutter

In a Git repository the gutter rail marks what changed against `HEAD` as you edit — added, modified, and a wedge where lines were deleted — in your theme's change colours. The marks follow your typing a moment later, off the main thread.

### Moving between changes

| Do | Press |
| :- | :---- |
| Next change | ⌃⌥↓ or ⌃⌥] |
| Previous change | ⌃⌥↑ or ⌃⌥[ |

Past the last change it wraps to the first, with a brief flash along the rail. Both are also in the editor's context menu.

### Overview ruler

A 14 pt ruler down the right edge shows every change in the file at once, with the visible part of the file as a band and the caret as a hairline. Click or drag on it to go there.

### Opening a change

Click a change mark or a deletion wedge — or press **⌥⏎** with the caret in a change — and the change opens in place: the lines that were there at `HEAD` appear directly above the current ones, on the editor's own grid and colouring, so old and new read as one piece of code. A glass card beside the rail carries what you can do with it:

- **Revert** — put the old lines back, as one undoable edit.
- **Stage** / **Unstage** — this change alone. While the file has unsaved edits it reads **Save to stage**: Git stages the file on disk, so save first.
- **Commit** — this change alone, with your message or one the model writes; **Amend** folds it into the last commit. After a commit the card says what it did, with **Undo**. See [Git & commits](/guide/git-and-commits).
- **Copy** the old lines.

↑ and ↓ on the card step to the neighbouring change. **Esc**, **✕** or a click elsewhere closes it.

## Folding

Chevrons in the gutter fold and unfold blocks. **⌥⌘←** folds the block around the caret, as in Xcode. A fold inside a fold works; a folded block shows a badge with its line count, and clicking the badge unfolds it.

Folding is presentation: line numbers stay correct, the caret cannot land inside a folded region, and nothing about the file changes.

## Multiple carets

| Do | Press |
| :- | :---- |
| Add a caret | ⌘-click |
| Select the next occurrence of the selection | ⌘D |
| Select every occurrence | ⇧⌘L |
| Edit all in scope | ⌃⌘E |

Every caret types, deletes, moves and selects together. A click that does not add a caret retires the extra ones, so a stray click never leaves invisible carets armed.

**Edit all in scope** (⌃⌘E) is local and occurrence-based: it selects the identifier under the caret everywhere it appears in the file. For a rename that follows real symbol references across files, see [cross-file rename](/guide/language-servers#cross-file-rename).

## Editing lines

| Do | Press |
| :- | :---- |
| Toggle line comment | ⌘/ |
| Duplicate line or selection | ⇧⌥↓ |
| Delete line | ⇧⌘K |
| Join lines | ⌃J |
| Format document | ⇧⌥F |

Comment toggling knows each language's comment syntax. Duplicate and delete act on every line the selection touches, and on every caret.

## Snippets

Type a snippet's prefix and press **Tab** to expand it. Tab stops move the caret through the snippet's fields in order; type into one, Tab to the next. The session ends when the caret leaves the snippet — you are never trapped in one.

Completion while a snippet is active is word-based from the file, or semantic when a [language server](/guide/language-servers) is on.

## Guides and invisibles

**Indent guides** draw the block structure down the left of each nesting level. **Invisibles** show spaces, tabs and line endings. Both are in **Settings → Appearance**, and both are off in a diff — a diff shows what changed, and structure lines across a hunk boundary say nothing true.

Bracket pairs colour by depth and the pair around the caret is outlined, so you can see which `)` closes which `(` without counting.

## Saving

**Settings → Editor** offers two save modes:

| Mode | Behaviour |
| :--- | :-------- |
| **Manual (⌘S)** | Save when you say so. The default. |
| **After delay** | Save automatically once you stop typing (configurable delay, 2s by default). |

**Format on save** runs the language's formatter before writing, when one is installed. Formatting is delegated to the tool the language's own community uses:

| Language | Formatter |
| :------- | :-------- |
| Swift | `swift-format` |
| C / C++ / Objective-C | `clang-format` |
| JavaScript / TypeScript / CSS / HTML / JSON / Markdown / YAML | `prettier` |
| Python | `black` |
| Rust | `rustfmt` |
| Go | `gofmt` |
| Shell | `shfmt` |
| Dart | `dart format` |
| Zig | `zig fmt` |
| Elixir | `mix format` |
| Haskell | `ormolu` |

If the formatter is not installed, the editor says which one it wanted and how to get it. It never installs anything itself.

A file you are editing stays where you left it across tab switches: caret, selection and scroll position are kept per file.

## Editing safely alongside agents

An agent may write to the same file you have open. So may your external editor. The editor is built for that, and the contract is simple: **your unsaved edits are never lost, and nothing is overwritten without you saying so.**

### What you can edit

Only files in the **working tree**. A diff in Review, a file at `HEAD`, the index, a commit, an agent turn — those are projections, and they stay read-only. Find, folding and go-to-symbol all work in them; typing does not. Editing inside Review, with edits rebased onto patch coordinates, is a later release.

### Preview tabs

Opening a file from the tree gives you a **preview** tab — its title in italics, replaced by the next file you open. Your first edit promotes it to a real tab. A tab with unsaved changes shows a dot instead of a close button, so you cannot close it by reflex.

### When the file changes under you

Every save is atomic and checks that the file on disk is the one you started from. If something else — an agent, another editor, a `git checkout` — wrote to the file while you had unsaved edits, the tab shows a banner:

> **This file changed outside Canoryn. Your unsaved edits are preserved.**

Your buffer stays exactly as you left it; the external bytes are kept in a conflict record. Then you decide:

| Choose | Result |
| :----- | :----- |
| **Reload** | Discard your edits and take the external version |
| **Overwrite** | Write your buffer over the external change |
| **Save a Copy…** | Keep both: save yours somewhere else, leave the file as the other writer left it |

If the file was **deleted** outside Canoryn, the banner says so and **Overwrite** becomes **Recreate** — your buffer is written back as a new file. Reload and Overwrite each confirm first, since both are one-way.

Without unsaved edits, an external change simply refreshes the tab — disk is the source of truth until you start typing.

### Recovery

Unsaved and conflicted buffers are stored in the project database as you type. Close the tab, quit Canoryn, or lose the session — reopen the file and your edits are there, with the banner if a conflict was pending.

### History

The workbench keeps **Back** and **Forward** history across the files you open, like a browser — the chevrons in the tab bar. Jumping to a definition or a search result and coming back is one click.

### Find in project, and Replace All

**Find in project** (⌥⌘F) searches the tree and **sees your unsaved buffers** — a match in a file you have edited but not saved is a match in your version, not the disk's.

**Replace All** asks before it writes. Files with unsaved or conflicted buffers are **skipped** rather than silently rewritten, and the whole replacement is one Undo.

## Where the editor stops

The editor is for the change in front of you. It does not build a project model, watch the whole tree, or run tasks. For real diagnostics, hover and definition, turn on a [language server](/guide/language-servers) for that language; for reviewing what an agent changed, use [Review](/guide/reviewing-a-diff).

Every shortcut on this page is collected in the [editor reference](/reference/editor-shortcuts).
