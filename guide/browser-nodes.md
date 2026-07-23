---
description: "Live Browser Nodes on the Canoryn canvas — real webpages you can scroll and click, multiple profiles, and workflows that remember your session."
---

# Browser Nodes

A **Browser Node** is a real webpage on the Architect canvas — not a screenshot, not a search snippet. Each node hosts a live WebKit page you can scroll, click, and resize. Put several on one board, wire their results into the rest of the workflow, and reopen the whole desk later from Finder.

[[appName]] is not trying to replace Safari as your everyday browser. It makes the web a **live surface inside a workflow** so you and the agent work on the same pages.

## What you can do on the node

| You | The workflow / agent |
| :-- | :------------------- |
| Open several Browser Nodes side by side | Load URLs into specific nodes |
| **Resize** nodes to match how you read | Extract text / HTML from the **rendered** page |
| **Hover the page** to scroll and click (like a normal browser) | Read the page map, then click / fill fields |
| Switch **browser profile** (Default, Work, Personal, Incognito) | Act in that profile’s session (cookies stay on this Mac) |
| Use canvas **Pan** tool to move around the board without fighting the page | Pass live outputs into AI, documents, email, and other steps |
| **Open in Safari** from the node chrome when you want a full browser | Snapshot the page when you need a still |

### Pan vs page control

- **Hover the webpage** — scroll and click go to the site; drag the **chrome** (title / address bar) to move the node.
- **Canvas Pan tool** — move the whole board; page hit-testing pauses so gestures don’t fight.
- Address bar, back / forward, reload — normal navigation on that node’s page.

## Why this beats “generic search”

Search APIs and raw HTTP fetches miss what you actually use:

- JS-rendered docs and dashboards
- Pages you’re **logged into** (with a named profile)
- Several sources open at once in a layout *you* chose

A research or reading board can keep GitHub + an RFC + a design site (or whatever *you* live in) open together. The agent works on **those** sessions — not a disposable crawl of the open web.

## Profiles (sessions stay on your Mac)

Each Browser Node can use a profile:

- **Default**
- **Work**
- **Personal**
- **Incognito**

Cookies and login state live in that profile on your Mac. They are **not** written into the `.cryn` workflow file, so sharing a workflow does not leak your session.

## Multiple live browsers on one board

Typical patterns:

- **Dev reading** — API docs, GitHub, issue tracker, local dashboard
- **Design research** — competitor sites, galleries, your Figma-adjacent tabs as live pages
- **Ongoing research** — official product pages side by side with a markdown report node

Wire browser outputs (title, URL, extracted text) into AI or document nodes so the board isn’t just tiles — it’s a runnable pipeline. See [Research boards](/guide/research-boards).

## Reopen the whole session from Finder

Workflows save as **`.cryn`** files. Double-click one from Finder (or open it in [[appName]]) to bring back the canvas layout — including Browser Nodes and their URLs — so your desk returns without rebuilding from chat history.

Expand collapsed groups if a page looks blank after restore; the live surface reattaches when the node is visible again.

## What the agent can do (short)

Against a Browser Node (or a shared agent session), workflows and chat can:

| Action | Purpose |
| :----- | :------ |
| `browser.load` | Navigate and wait for the page |
| `browser.read_page` | Map headings / interactive elements (refs) |
| `browser.click` / `browser.fill` | Act on refs or selectors |
| `browser.extract_text` / `extract_html` / `extract_structured` | Pull from the **rendered** DOM |
| `browser.snapshot` | Capture a PNG |
| `browser.navigate` | Back / forward / reload |
| `browser.list_sessions` | See open sessions |
| `browser.run_js` | Advanced scripting (consent-gated) |

Prefer **refs from `browser.read_page`** over guessed CSS. Consent still applies for sensitive steps (fill, run JS, etc.).

Full catalog: [Web & Information](/architect/reference/actions/web).

## Tips

- Start from [Architect Copilot](/guide/architect-copilot) or Chat: ask for a board with N browser nodes for the sites you care about.
- Keep official / logged-in sources on the board so synthesis stays grounded.
- Use **Work** vs **Personal** profiles so agents don’t mix contexts.
- [[appName]] may snapshot or pause off-screen pages to keep the canvas smooth — hover or activate a node to bring the live view back.

## Related

- [Research boards](/guide/research-boards)
- [Architect Copilot](/guide/architect-copilot)
- [Architect Overview](/architect/overview)
- [Web actions reference](/architect/reference/actions/web)
