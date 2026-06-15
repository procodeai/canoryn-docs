# Local Processing

[[appName]] is designed with **privacy-first** architecture. All AI processing happens on your Mac.

## How It Works

```
┌─────────────────────────────────────────┐
│              YOUR MAC                   │
├─────────────────────────────────────────┤
│  Voice → Whisper (local) → Text         │
│  Text → Ollama (local) → Response       │
│  Response → TTS (local) → Audio         │
└─────────────────────────────────────────┘
        ↑
        │ Everything stays here
        │
   ─────┴───── No data leaves ─────────
```

## Local AI with Ollama

[[appName]] uses [Ollama](https://ollama.com) for local LLM inference:

- **Models**: Llama 3.2, Qwen 2.5, Mistral, etc.
- **Speed**: Fast inference on Apple Silicon
- **Privacy**: Zero network calls for AI

### Recommended Models

| Model         | Size | Best For       |
| ------------- | ---- | -------------- |
| `llama3.2:3b` | 2GB  | Fast responses |
| `qwen2.5:7b`  | 4GB  | Balanced       |
| `llama3.2:8b` | 5GB  | Complex tasks  |

## What Stays Local

| Data             | Storage              |
| ---------------- | -------------------- |
| Conversations    | SQLite (encrypted)   |
| Memory           | SQLite (encrypted)   |
| Blueprints       | JSON files           |
| Voice recordings | Never stored         |
| Screenshots      | Processed, not saved |

## Optional Cloud Providers

If you prefer, you can use cloud AI:

| Provider  | Benefit          | Trade-off          |
| --------- | ---------------- | ------------------ |
| OpenAI    | GPT-4 quality    | Data leaves device |
| Anthropic | Claude reasoning | Data leaves device |
| Groq      | Very fast        | Data leaves device |

::: tip
All cloud providers are optional. [[appName]] works fully offline with Ollama.
:::

## Verification

To verify local processing:

1. Disconnect from internet
2. Use [[appName]] normally
3. Everything should work (with Ollama)
