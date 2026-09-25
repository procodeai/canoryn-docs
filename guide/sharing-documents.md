---
description: "Sharing a document: export a web page, PDF or bundle; keep its discussion in the repository; and publish it to canoryn.app as a reading page with contents, reading options and its discussion."
---

# Sharing & publishing

Open the Page panel (the page icon at the top of a Markdown tab) and choose **Share**. Since **0.6.0**.

## Export

- **Web Page (HTML)** — one self-contained file: pictures embedded, diagrams and math drawn in the browser, light and dark.
- **PDF** — that page printed, split into pages, with real selectable text.
- **Bundle** — a folder with the Markdown file, `index.html`, its pictures, and `discussion.json` if it has comments.

A picture that is missing, or lives outside the document's folder, is left out rather than linked to a path on your Mac.

## The discussion, in the repository

Comments live in Canoryn's database on your Mac. To share them with your team through Git:

- **Share with Repository** writes `.canoryn/discussions/<path-to-file>.json`. Commit it like any file; it is sorted and stable, so it diffs cleanly.
- **Import from Repository** reads that file on another Mac: new threads are added, a newer version of a thread wins, and a deleted thread stays deleted.

## Publish to canoryn.app

**Publish to canoryn.app** (sign in to your Canoryn account first) puts the page online and copies its link:

- **Who can see it** — *Anyone with the link* (the default; the page is not listed anywhere), *Public*, or *Only me*.
- **Include the discussion** — readers see the comments beside the page, read-only.
- **Update** — publish the current version to the same link.
- **Unpublish** — the link stops working for everyone.

Readers get a calm reading page: the title and description, author, date and reading time, an **On this page** list that follows along, and an **Aa** menu for theme (Paper, Sepia, Dusk, Night or automatic), typeface (serif, sans, mono), text size and width.

Links in a published page go only to web addresses, email, headings on the page, and files beside the document.
