---
description: "Build live Canoryn research boards — compare sites in parallel on real Browser Nodes, synthesize a report, and reopen the session from Finder."
---

# Research Boards

A **research board** is a live workspace on the Architect canvas: multiple **[Browser Nodes](/guide/browser-nodes)** (real scrollable webpages), extraction steps, and a written report — wired as a **real workflow**, not a static diagram.

Use it when you want [[appName]] to gather sources in parallel and produce something you can re-run — or when you simply want your reading desk (dev docs, design sites, dashboards) laid out and saved.

## Try one from chat

With [[appName]] running and a model configured, open **Chat** (or the Architect Copilot) and ask for a board, for example:

```text
Build me a live research board comparing Arc, Dia, and Chrome using official sources
```

You should see:

1. **Browser nodes** open for each source — real pages you can scroll and click.
2. Content extracted from those pages (rendered DOM, not a blind search API).
3. A **document / report** node that synthesizes the comparison.
4. Optional follow-on steps (for example, email the report) if you asked for them.

Then press **Play** on the canvas to run the board end-to-end. Double-click the `.cryn` later from Finder to reopen the whole session.

## What makes it a workflow

Research boards use the same building blocks as any other agent:

- Triggers (often **On Start** or voice when you want to re-run).
- [Browser Nodes](/guide/browser-nodes) for live pages (profiles, resize, pan vs page control).
- AI steps to compare and write.
- A markdown or document surface for the result.

That means you can:

- **Play** to test.
- **Enable** so CLI or an external agent can run the same board later.
- Edit one browser URL or prompt without rebuilding the whole board (Chat or [Architect Copilot](/guide/architect-copilot)).

## Tips

- Prefer **official sources** in the prompt so the board stays grounded.
- After the first build, use Chat or Copilot for small changes (“add Safari to the comparison”, “email me the report”).
- Arrange and resize browser nodes like a desk — your layout is part of the saved workflow.
- Collapse groups carefully — browser pages should survive group collapse; if a page looks blank, expand the group and Play again.
- Markdown reports keep their content after Play; if something looks empty, check you’re looking at the document node output after a successful run.

## Related

- [Browser Nodes](/guide/browser-nodes) — live pages, profiles, Finder restore
- [Architect Copilot](/guide/architect-copilot)
- [Architect Overview](/architect/overview)
- [CLI & MCP](/guide/cli-and-mcp)
