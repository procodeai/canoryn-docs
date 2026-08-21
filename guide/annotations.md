---
description: "Durable code review threads on File and Review — project-owned annotations that survive chat sessions, staging, and restarts."
---

# Annotations

From **0.4.0**, Canoryn stores **code annotations** as durable project threads. They are not chat messages and not temporary Git cards. Start one on a **File** tab or on **Review** (unified or side-by-side); the same thread appears wherever that project file is open.

## What an annotation is

An annotation is:

- a **line-range anchor** on a file inside a [session project](/guide/chat-workbench#session-projects),
- an ordered thread of **user / agent / system** entries,
- an explicit **open** or **resolved** state,
- optionally linked to one or more chat sessions that participated.

```text
Project root (on disk)
  └── canoryn.sqlite
        └── annotation + durable anchor
              ├── your note
              ├── agent replies (append-only)
              └── open / resolved
```

Review and File tabs are **projections** of that store. Staged, unstaged, combined, and ordinary-file views may draw the anchor differently; they do not copy separate threads.

## Why it exists

Chat transcripts evaporate when you start a new session. Diff cards go away when you stage or refresh. Annotations keep review decisions with the **repository** so the next session — or another chat on the same root — still sees open threads.

## Create a thread

1. Attach a [session project](/guide/chat-workbench#session-projects).
2. Open a **File** preview or a **Review** tab for that root.
3. Select a line range in the native editor / diff surface.
4. Open the annotation composer (gutter / selection affordance).
5. Write the note, then:
   - **Save** — commits the thread only, or
   - **Save & Add to Chat** — saves first, links the current session, then drops a compact reference into the composer (it does **not** auto-send a turn).

On an existing thread, **Add to Chat** links/attaches without duplicating the annotation.

## Where it appears

| Surface | Behavior |
| :------ | :------- |
| **File tab** | Inline cards on current source; fingerprint re-checked against disk bytes. |
| **Review (unified / split)** | Same durable projection on the diff geometry. |
| **Another chat on the same root** | Sees saved threads, replies, and resolution — not the other session’s private drafts. |

Expanded / collapsed disclosure is **session-local**: switching chats resets to collapsed; File and Review in the *same* session share which IDs are expanded.

## Anchors and “moved” code

Lines are **hints**, not identity. Canoryn stores a content fingerprint and surrounding context, then resolves conservatively:

| Health | Meaning |
| :----- | :------ |
| **Current** | Exact source still at the expected range |
| **Moved** | Exactly one match elsewhere in the file |
| **Needs review** | Multiple matches — never auto-guess |
| **Outdated** | No match |
| **Missing** | File unavailable or deleted |

Renames may update the current path when Git rename evidence exists — not from filename similarity invented in the UI.

## Agent participation

Agents may list, read, and **reply** to annotations through the coding-agent tool surface (authorization comes from the session project — knowing a UUID alone grants nothing).

Agents **cannot**:

- delete a thread,
- edit your original note,
- resolve or reopen a thread.

Only you resolve. A reply never closes the thread by itself. Resolved threads can be reopened.

Agent replies may include an outcome such as fixed / explained / needs input, plus paths and verification hints when the loop provides them.

## Drafts vs saved threads

- **Saved** annotations survive app restart, Git refresh, staging, and card retirement.
- **Unsaved drafts** and composer references stay private to the hosting chat session.
- Concurrent edits use optimistic versions so a stale UI cannot overwrite a newer save from another session.

## Limits (beta)

- Anchor-health warnings in the UI are still maturing.
- Project-wide annotation index / filter is not the primary surface yet — open threads from the file you are looking at.
- Full in-pane editing (LSP) is still separate; annotations sit on the **review-first** File / Review viewers.

## Related

- [Review workbench](/guide/review-workbench) — SCM scopes, stage/discard, diffs
- [Chat workbench](/guide/chat-workbench) — session projects and tabs
- [Appearance](/guide/appearance) — syntax themes shared by File, Review, and chat code blocks
- [Permissions](/guide/permissions) — project-scoped consent for agent writes
