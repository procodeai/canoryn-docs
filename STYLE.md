# Writing style — one name per thing

Not published. This is for whoever writes docs or site copy, human or agent.

## Why this file exists

A visitor should not have to learn a glossary before they understand what they
can build. Zapier sells one noun — a Zap. n8n sells one — a workflow. Neither
names its editor in marketing copy.

At one point the homepage used **seven nouns for two surfaces**: canvas, graph,
board, Architect, desk, workspace, visual editor. Each was defensible alone.
Together they read as jargon, and they made the docs and the site drift apart.

## The list

| Term | Means | Never use for it |
|---|---|---|
| **Canoryn** | the product | Aura (the old internal name) |
| **Workflow** | what you build, saved as a `.cryn` file | agent, graph, blueprint, automation script |
| **Architect** | the visual builder surface | visual editor, desk, workbench |
| **Canvas** | the surface inside Architect where nodes live | board, desk |
| **Board** | a saved arrangement of live nodes, usually browsers — a *kind of* workflow | canvas, desk |
| **Node** | one step on a canvas | block, cell, widget |
| **Run** | one execution of a workflow | job, task, invocation |
| **Action** | a single capability a node can call | tool, command, function |
| **Workspace** | your library of workflows | project, folder |
| **Agent** | an autonomous actor — an AgentOps worker, a `logic.agent.reason` node — and the market category we sell into | a `.cryn` |

## The two that keep coming back

**`graph`** is the internal data model. Users do not build graphs; they build
workflows. A graph is how one is stored. If a sentence says "graph" and the
reader is not writing code against the file format, it should say "workflow".

The one exception is the CLI and API reference, where `graph_id` and payload
shapes are the actual interface being documented.

**`agent`** survives in exactly two places: the *category* (an "agent
workspace" is what the market calls this product) and *real autonomous actors*
(AgentOps workers, `logic.agent.reason` nodes). It is never a name for a
`.cryn` file. That distinction is the whole point of the rename in
[canoryn#270](https://github.com/procodeai/canoryn/pull/270) — 272 files — so it
is worth keeping.

## Two habits worth more than the table

**Lead with what the reader can do, not with what we call things.** "Describe a
workflow and watch it appear" beats "Use Build with chat in the Architect to
author a graph on the canvas."

**Introduce a word once, then use it.** If a page needs a term the reader has
not met, define it in the sentence where it first appears — not in a glossary
they have to go find. If it needs more than a clause to explain, it is probably
the wrong word.

## File extension

Write `.cryn` when the file format is genuinely the subject — the Finder
double-click behaviour, the CLI, publishing. In body copy prefer "saved
workflow": the claim lands for someone who has not installed the app yet.
