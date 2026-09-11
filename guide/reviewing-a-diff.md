---
description: "Reading what an agent changed — the native Review list, opening unmodified lines with the fold band, revealed context, comment threads that hold their shape, and why nothing moves under you."
---

# Reviewing a diff

[Review](/guide/review-workbench) shows you what changed. This page is about *reading* it well: moving between files, opening the lines Git folded away, leaving a comment, and trusting that the code you are looking at stays where it is while you do.

From **0.5.0** the Review list is native — a real AppKit table, the kind Xcode's source list is built on. That is not an implementation detail you need to care about, except for what it makes possible: the list knows where every file is before it draws it.

## The file list

Each file is a card: a header with its path and `+/−` counts, and the diff below. Click the header to collapse or expand a card. The header of the file you are currently inside stays pinned at the top as you scroll.

**Navigating to a file lands on it.** Click a file in the tree and the list scrolls exactly to that file's header — including a file far down the list, and one whose diff has not loaded yet. Earlier versions could only estimate where an unseen file was; now the list computes it.

**The last file lifts clear of the bottom.** There is room to scroll past it, so its final lines are readable rather than pinned to the window edge.

**Scrolling a long line sideways stays sideways.** A trackpad swipe commits to one axis for the whole gesture, so a sideways swipe scrolls the line and a downward one scrolls the list — never a stutter between the two.

## Nothing moves under you

This is the property the rest of the page depends on, so it is worth stating plainly.

While you read, the list is still working: a file's diff arrives, a header measures itself, a comment thread loads. Each of those changes a card's height. In a file **above** the one you are reading, that used to move the code under your eyes — down when the estimate had been short, up when it had been long. It was not caused by anything you did, so it could not be predicted.

Now the row at the top of your viewport is anchored through every such change. Files below you still move — that is the list responding — but what you are reading holds still. The same rule covers everything else on this page: opening a comment box, revealing context, folding a run. The **header** of a file never moves when its body changes; only the body does.

## Unmodified lines

Git shows three lines of context around each change and folds the rest into a band: **`119 unmodified lines`**. Every way of opening that band keeps the band's control under your pointer, so you can keep going without chasing it.

### Click

- **`↓`** — reveal 20 more lines from the top of the run
- **`↑`** — reveal 20 more lines from the bottom
- **The count** — reveal 20 each way

The arrows point at where the changes are. A run at the very start of a file has no change above it, so it shows only `↑`.

### Drag

Take hold of the band's **top or bottom edge** — a hairline lights as you hover it — and pull. This is Xcode's fold band, and it behaves the same way:

| Take hold of | Pull | Result |
| :----------- | :--- | :----- |
| Top edge | down | opens from the top of the run |
| Top edge | up | closes it again |
| Bottom edge | up | opens from the bottom of the run |
| Bottom edge | down | closes it again |

The pointer over an edge says which way it can go: **⇣** when it can only open, **⇕** once you have pulled it out and it can go either way. Both edges of a run open, including a run at the start or end of the file — those hidden lines are the file's own, and whether a change sits beyond them is a fact about the patch, not about whether you may read them.

Closing stops at Git's three lines of context. They are part of the patch, not something you revealed, and closing past them would show a diff Git never produced. The drag is exactly reversible: pull out twelve lines and push back twelve, and you are where you started.

The middle of the band is not a handle. A drag that begins there — one you meant as a scroll — moves nothing.

### Revealed context

Lines you open are shaded a shade quieter than the three Git always shows, so you can still see where the change's own neighbourhood ends and what you went looking for begins. VS Code does the same.

### Folding back

Open a run fully and the band changes its job: it now says **`Collapse 29 unmodified lines`** — the count of lines that would actually disappear, which is the run minus Git's context on each side — and sits at the head of the block it collapses. Click it, or drag an edge closed, and you are back to three lines each side.

## Comment threads

Select lines and choose **Add comment**, or click the **`+`** in the gutter beside a line. The composer opens beneath the anchor, your selection stays highlighted in the editor's own selection colour, and the code below moves down — once — to make room.

The composer is one card that keeps its shape:

- **It reserves exactly the rows it draws.** A long thread with several paragraphs measures each paragraph's wrapping, so a card never paints over the code beneath it or over the next comment.
- **The one you are writing in draws on top.** Comment cards are siblings; when two are close, the one you are in comes forward.
- **Read and edit are the same size.** Opening a thread to reply does not grow it and push the code around.
- **A draft survives a refresh.** If the repository changes under you while you are typing, your draft stays where it is; if its anchor line vanishes, the draft moves to the tail of the file rather than disappearing.

Threads are durable — see [Annotations](/guide/annotations) for how they live with the project and reach the agent. **Save & Add to Chat** does both at once.

## The pointer

What the pointer shows is where you are:

| Over | Pointer |
| :--- | :------ |
| Code | I-beam |
| A file header, the band itself | arrow |
| The band's arrows, its count, a comment button | hand |
| The band's top or bottom edge | ⇣ ⇡ or ⇕ — whichever that edge can do |
| The lane divider between Chat and Review | ⇔ |

The I-beam appears over code and nowhere else.

## Split view

Split review — old on the left, new on the right — receives the fold band, the drag, and comment threads. Revealed-context shading in split view follows in a later release.

## Large reviews

At **300 or more** changed files, Review switches to single-file mode: the tree stays, one file's diff shows at a time, and collapse-all is disabled on that surface. Everything on this page still applies to the file you have open.
