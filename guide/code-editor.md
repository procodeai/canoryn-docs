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

## Where the editor stops

The editor is for the change in front of you. It does not build a project model, watch the whole tree, or run tasks. For real diagnostics, hover and definition, turn on a [language server](/guide/language-servers) for that language; for reviewing what an agent changed, use [Review](/guide/reviewing-a-diff).

Every shortcut on this page is collected in the [editor reference](/reference/editor-shortcuts).
