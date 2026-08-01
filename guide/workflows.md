---
description: "Build and run Canoryn workflows — graphs you design in Architect, test with Play, and enable for schedules or other tools."
---

# Workflows

A **workflow** is an automation you build in [[appName]]: triggers, AI steps, and actions wired together on the Architect canvas (or described in chat). It lives as a `.cryn` file in your workspace.

You talk to [[appName]] in Chat or by voice for one-off help. When you want something reusable — every weekday brief, a research board, a CLI-triggered job — you save it as a workflow.

## Build one

1. Open the **Architect**.
2. Create or open a workflow in the Projects sidebar.
3. Wire nodes by hand, or describe what you want in [Build with chat](/guide/build-with-chat) / main **Chat**.
4. Use **Play** to try a run while drafting.
5. **Enable** when schedules, the CLI, or other AI tools should be allowed to run it.

Prefer design phrasing when you want a graph (“build a workflow that…”) rather than a one-off action right now.

## Draft, Play, Enable

| Control | Meaning |
| --- | --- |
| **Draft** | Work in progress. Outside triggers do not fire. |
| **Play** | Run now on the canvas so you can test. |
| **Enable** | Make the workflow available for schedules, CLI, and connected tools (with consent when required). |

You can Play without Enabling. Enable is what turns the workflow on for the rest of the system.

## Tips

1. Keep each workflow focused on one job.
2. Test with Play before Enable.
3. `.cryn` files are plain files — easy to back up or put in git.
4. See [Quick Start](/guide/quickstart) for a first walkthrough, or [Architect Overview](/architect/overview) for canvas details.

## Related

- [Build with chat](/guide/build-with-chat) — build beside the live canvas
- [CLI & MCP](/guide/cli-and-mcp) — run the same workflows from the terminal or other tools
- [Research boards](/guide/research-boards) — comparison desks that run as real workflows
