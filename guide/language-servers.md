---
description: "Opt-in language servers bring compiler diagnostics, hover, go-to-definition, semantic completion and cross-file rename into the code editor — per language, using the tools you already have installed."
---

# Language servers

The [code editor](/guide/code-editor) colours, folds, finds and completes on its own. A **language server** adds what only a compiler knows: real diagnostics as you type, the type of the thing under the pointer, where a symbol is defined, and completions that understand your project rather than your file.

Canoryn speaks the Language Server Protocol — the same protocol VS Code, Zed and Neovim use — and runs the server the language's own community ships. It does not bundle servers; it uses the ones on your machine.

## Off by default, on purpose

**Settings → Editor → Use language servers** is off when you install Canoryn. That is the opposite of what a general-purpose editor would choose, and it is deliberate.

The editor exists so a small change does not mean switching to Xcode or VS Code. For a small change, a workspace-indexing server is a cost with no return: `sourcekit-lsp` idles at about 19 MB on a single file in its cheapest mode, and given a compile database it spawns `sourcekitd` and indexes the whole project — which is where the hundreds of megabytes go. If you open Canoryn to fix one line, you should not pay for that.

Turn it on when you are doing real editing in a language you have a server for. Everything on the [code editor](/guide/code-editor) page keeps working either way.

## Supported servers

| Language | Server | Install |
| :------- | :----- | :------ |
| Swift, Objective-C | `sourcekit-lsp` | ships with Xcode — `xcode-select --install` |
| C, C++ | `clangd` | ships with Xcode |
| Rust | `rust-analyzer` | `rustup component add rust-analyzer` |
| Go | `gopls` | `go install golang.org/x/tools/gopls@latest` |
| Python | `pylsp` | `pip install python-lsp-server` |
| JavaScript, TypeScript | `typescript-language-server` | `npm install -g typescript-language-server typescript` |

When a server for the file's language is not on your `PATH`, the editor tells you which tool it wanted and the command that installs it. It never installs anything on its own — that is your call, made in your terminal.

## What a server gives you

### Diagnostics

Errors and warnings from the compiler appear as markers in the gutter and as underlines in the text, updated as you type. They land in the same gutter band as everything else the editor knows about a line — a folded region, a lint finding, a review annotation — so one glance at the gutter tells you the state of that line.

### Hover

Rest the pointer on a symbol and, after a short pause, its type and documentation appear. The pause is what makes it a question you asked rather than one the pointer asked by passing over.

### Go to definition

**⌘-click** a symbol to jump to where it is defined — in this file or another. The target opens in a File tab.

### Semantic completion

With a server on, completion offers members, functions and types that are actually valid at the caret, with their signatures. Without one, completion is word-based: every word already in the file. Both are useful; they answer different questions.

### Cross-file rename

**⌃⌘R** renames the symbol under the caret across the project, using the server's knowledge of where it is referenced.

Canoryn shows you the **plan first** — every file and every occurrence the rename would touch — and applies it only when you confirm. A rename that silently rewrote twelve files is not something you can review after the fact, so it is not something the editor does without asking.

For a rename that stays within one file and follows text rather than references, **Edit all in scope** (⌃⌘E) is the local version and needs no server.

## Lint and build output

Two more sources feed the same gutter, and neither needs a server:

**Lint** — when a linter for the language is installed, its findings appear as markers alongside compiler diagnostics.

**Project check** — **⇧⌘B** runs the project's own check and shows what it says. Canoryn picks the check from what is in the project root:

| Found | Runs |
| :---- | :--- |
| `Package.swift` | `swift build` |
| `Cargo.toml` | `cargo check` |
| `go.mod` | `go build` |
| `tsconfig.json` | `tsc` |
| Python sources | `python -m compileall` |

Output lands as diagnostics on the lines it names. If the tool is missing, you are told which one and how to get it.

## What a server does not do

It does not change what the editor is for. Canoryn is not trying to be your IDE for the day; it is trying to make the change an agent just proposed easy to finish. A server makes that change safer — you see the compiler's opinion before you save — without turning the work panel into a second Xcode.

If a server misbehaves — high CPU on a large project, a stale index — turn the setting off. Nothing else in the editor changes.
