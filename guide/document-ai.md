---
description: "AI in documents: improve, summarise, continue or translate a passage, ask for anything with /ai, and write a whole document from a template — every result a proposal you accept or discard."
---

# AI in documents

AI can rewrite a passage or write a whole document — but it never changes your file on its own. Every result comes back as a **proposal**: the words it would remove struck through, the words it would add marked, and **Accept**, **Discard** or **Try Again**. Since **0.6.0**.

## On a passage

Select text in Edit — or just put the caret in a paragraph — and open the wand menu in the format bar:

- **Improve Writing** — clearer and tighter, same meaning.
- **Summarise** — a short summary added after the passage.
- **Continue Writing** — the next paragraph or two, in the same voice.
- **Translate** — into one of eight languages; code, links and names stay as they are.
- **Ask AI…** — any instruction: "make this a table", "shorter".

Type `/ai` on an empty line for the same prompt without a selection.

Accept applies the proposal as one change you can undo — and only if the passage still reads as it did when you asked, so nothing you typed meanwhile is overwritten.

## From a template

Type `/` and choose **Write from Template with AI**. Pick a template, say what the document is about (names, facts, decisions), and the model fills every placeholder. In an empty file you get the whole document, properties included; in a page that already has text, just the body, where the caret is.

## Templates

A template is an ordinary Markdown file with a `template:` block in its properties and `{{placeholders}}` in its text:

```markdown
---
template:
  name: PRD
  description: Problem, users, requirements, success metrics
  fields:
    product: The product or feature
status: draft
---

# {{product}}
```

Put yours in `.canoryn/templates/` in the project. A project template with the same name as a built-in replaces it. Inserted from the `/` menu without AI, a placeholder shows its name ("Product") so you can see what to write.

## Which model

The document actions use the model you have selected for chat. See [Local processing](/guide/local-processing) for running them on a local model.
