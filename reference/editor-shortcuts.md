---
description: "Every keyboard shortcut in the Canoryn code editor and Review, in one table, with the reason each one is what it is."
---

# Editor shortcuts

The editor claims the shortcut that is actually free in Canoryn rather than the one another editor uses, and says why. Where a shortcut differs from VS Code or Xcode, the reason is in the last column.

## Navigation

| Action | Shortcut | Note |
| :----- | :------- | :--- |
| Find in file | ⌘F | Works in read-only files too |
| Find next | ⌘G | |
| Find previous | ⇧⌘G | |
| Go to line | ⌘L | |
| Go to symbol | ⇧⌘O | As VS Code |
| Find in project | ⌥⌘F | ⇧⌘F is Focus Mode |
| Jump to matching bracket | ⌃M | |
| Select enclosing block | ⇧⌃M | |
| Go to definition | ⌘-click | Needs a [language server](/guide/language-servers) |

## Folding

| Action | Shortcut | Note |
| :----- | :------- | :--- |
| Fold block at caret | ⌥⌘← | As Xcode |
| Fold / unfold | gutter chevron | |
| Unfold | click the folded badge | |

## Selection and carets

| Action | Shortcut | Note |
| :----- | :------- | :--- |
| Add caret | ⌘-click | |
| Select next occurrence | ⌘D | As VS Code |
| Select all occurrences | ⇧⌘L | As VS Code |
| Edit all in scope | ⌃⌘E | As Xcode; local, text-based |
| Rename symbol across project | ⌃⌘R | Needs a server; shows a plan first |

## Editing

| Action | Shortcut | Note |
| :----- | :------- | :--- |
| Toggle line comment | ⌘/ | |
| Duplicate line / selection | ⇧⌥↓ | ⇧⌘D is Show Debug |
| Delete line | ⇧⌘K | As VS Code |
| Join lines | ⌃J | As VS Code |
| Format document | ⇧⌥F | As VS Code |
| Expand snippet | Tab | After its prefix |
| Next snippet field | Tab | |
| Save | ⌘S | |

## Project

| Action | Shortcut | Note |
| :----- | :------- | :--- |
| Run project check | ⇧⌘B | As VS Code's build task; ⌘B is the left panel |

## Review

| Action | Input | Note |
| :----- | :---- | :--- |
| Reveal 20 lines from the top of a run | click `↓` | |
| Reveal 20 lines from the bottom | click `↑` | |
| Reveal 20 each way | click the count | |
| Open / close from the top | drag the band's top edge | ⇣ opens, up closes |
| Open / close from the bottom | drag the band's bottom edge | ⇡ opens, down closes |
| Fold a fully opened run | click `Collapse …` | |
| Comment on a line | click `+` in the gutter | |
| Comment on a selection | select, then **Add comment** | |
| Collapse / expand a file | click its header | |

See the [code editor](/guide/code-editor), [language servers](/guide/language-servers) and [reviewing a diff](/guide/reviewing-a-diff) guides for what each of these does.
