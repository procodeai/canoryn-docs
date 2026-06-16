# Canoryn Docs

Public documentation for Canoryn, a macOS app for building local-first AI agents and visual workflows that automate personal Mac tasks.

Canoryn combines a native macOS assistant, voice input, a visual workflow builder, `.cryn` workflow files, and user-controlled AI providers. It is designed for Mac users who want practical automation without relying only on browser chatbots or cloud-only automation tools.

## Links

- [Website](https://canoryn.app)
- [Documentation](https://canoryn.app/docs)
- [Download](https://canoryn.app/download)
- [Support](https://canoryn.app/support)
- [Releases](https://github.com/procodeai/canoryn-releases/releases)

## What Is Canoryn?

Canoryn is a native macOS AI assistant and automation builder. You can use it to create agents that respond to commands, run workflow graphs, interact with supported apps, and perform Mac automation tasks.

It is local-first: workflows and app configuration live on your Mac. If you use local AI models, prompts can stay on your device. If you connect cloud AI providers such as OpenAI, Anthropic, or Groq, prompts sent to those providers are processed by them.

## What You Can Build

- Voice-triggered workflows for repeated Mac tasks.
- Visual agent graphs using the Architect canvas.
- Native app and system actions where permissions allow.
- Reusable `.cryn` workflow files.
- Local AI automation with Ollama or cloud AI workflows with your own provider keys.
- Custom action experiments for developer workflows.

## Documentation Sections

- **Guide**: installation, quick start, permissions, local processing, beta limitations, and troubleshooting.
- **Architect**: visual editor concepts, canvas behavior, wiring, grouping, and debugging.
- **API / Actions**: public action references for system, AI, Spotify, and custom actions.
- **Changelog**: documentation and release notes.

## Contributing to Docs

Public improvements are welcome.

1. Open a docs page on [canoryn.app/docs](https://canoryn.app/docs).
2. Click **Edit this page on GitHub**.
3. Submit a pull request against `main`.

For larger edits, clone this repo and run:

```bash
npm run docs:dev
npm run docs:build
```

## Brand

Canoryn is built by Procode AI Labs.

## License

License information will be added before stable release.
