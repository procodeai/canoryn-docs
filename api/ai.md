---
description: "Canoryn's AI APIs — use local or cloud models inside your agent workflows."
---

# AI Actions

LLM-powered intelligence nodes for reasoning and generation.

## Provider Configuration

AI actions use your configured LLM provider:

- **Ollama** (local, private)
- **OpenAI** (GPT-4, GPT-3.5)
- **Anthropic** (Claude)
- **Groq** (fast inference)

Configure in Settings → AI Provider.

## Available Actions

### `ai.generate`

Free-form text generation.

| Input     | Type              | Description              |
| --------- | ----------------- | ------------------------ |
| `prompt`  | String            | The instruction/question |
| `context` | String (optional) | Additional context       |
| `system`  | String (optional) | System prompt            |

| Output     | Type   | Description    |
| ---------- | ------ | -------------- |
| `response` | String | Generated text |

### `ai.summarize`

Condense long text.

| Input    | Type   | Description               |
| -------- | ------ | ------------------------- |
| `text`   | String | Text to summarize         |
| `length` | String | "short", "medium", "long" |

### `ai.classify`

Categorize input into predefined classes.

| Input        | Type   | Description                 |
| ------------ | ------ | --------------------------- |
| `text`       | String | Text to classify            |
| `categories` | Array  | List of possible categories |

| Output       | Type   | Description          |
| ------------ | ------ | -------------------- |
| `category`   | String | Matched category     |
| `confidence` | Number | 0-1 confidence score |

### `ai.extract`

Pull structured data from text.

| Input    | Type   | Description            |
| -------- | ------ | ---------------------- |
| `text`   | String | Source text            |
| `schema` | Object | JSON schema to extract |

| Output | Type   | Description               |
| ------ | ------ | ------------------------- |
| `data` | Object | Extracted structured data |

### `ai.sentiment`

Analyze emotional tone.

| Input  | Type   | Description     |
| ------ | ------ | --------------- |
| `text` | String | Text to analyze |

| Output      | Type   | Description                       |
| ----------- | ------ | --------------------------------- |
| `sentiment` | String | "positive", "negative", "neutral" |
| `score`     | Number | -1 to 1                           |

## Blueprint Examples

### Smart Email Triage

```
[Email Received]
        │
        ▼
[AI Classify: categories = ["urgent", "fyi", "spam"]]
        │
        ├── urgent → [Notification]
        ├── fyi → [Archive]
        └── spam → [Delete]
```

### Meeting Notes

```
[Voice Recording]
        │
        ▼
[AI Summarize: length = "short"]
        │
        ▼
[Save to Notes]
```

## Best Practices

1. **Be specific**: Clear prompts get better results
2. **Use context**: Pass relevant memory/data for better understanding
3. **Validate output**: AI can make mistakes—verify critical actions
