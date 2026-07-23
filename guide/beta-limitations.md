---
description: "Known limitations of the current Canoryn beta and what's planned next."
---

# Beta Limitations

[[appName]] is in active beta. The goal is to make local-first Mac automation useful and trustworthy before expanding the product surface.

## What Works Best Today

[[appName]] is best suited for:

- building workflows with the [Architect Copilot](/guide/architect-copilot) or by wiring nodes by hand,
- [research boards](/guide/research-boards) that compare sources and produce a report you can re-run,
- voice / chat / schedule / app-event triggers for personal Mac automation,
- running simple app and system actions with explicit permissions,
- using the [CLI & MCP](/guide/cli-and-mcp) so other AI tools can author or run **enabled** workflows,
- sharing workflow ideas through `.cryn` files.

## What May Still Change

During beta, these areas may change between releases:

- node names and action schemas,
- workflow file format details,
- AI provider settings,
- memory behavior,
- app permissions and onboarding flow,
- store/discovery publishing flow,
- Copilot phrasing and clarification UX,
- which coding agents appear as dispatch targets.

## Known Practical Limits

- Some actions require macOS permissions before they work.
- Cloud AI providers require your own API key (stored in the macOS Keychain).
- Local AI requires Ollama or another supported local model setup.
- Complex UI automation can fail if the target app changes its interface.
- Not every action listed in older examples may be available in every beta build.
- Builds are still beta and may not be notarized — see [Installation](/guide/installation) for first-open steps.
- Multi-agent supervision (Mission Control) remains experimental.

## Trust and Safety Expectations

- Keep important workflows simple and test them before relying on them.
- Review actions that can modify files or control apps.
- Avoid giving broad file permissions unless your workflow needs them.
- If a workflow uses a cloud AI provider, assume prompt/context data is sent to that provider.

## How to Help

If something breaks or feels unclear:

- use [Support](https://canoryn.app/support), or
- open a docs correction using **Edit this page on GitHub**.
