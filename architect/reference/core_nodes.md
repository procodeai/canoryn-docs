# Node Reference

A complete catalog of every built-in node available in the Architect. Nodes are organized by **category**.

> [!TIP]
> Press `Shift + A` or right-click the canvas to open the **Node Palette** and search for any node by name or keyword.

---

## Triggers

Trigger nodes **start** your agent's execution. Every agent needs at least one trigger. They have no flow input — only flow and data outputs.

**Color**: 🟡 Yellow (`#FFD60A`)

### On Start

|                 |                                                             |
| :-------------- | :---------------------------------------------------------- |
| **Type**        | `trigger.start`                                             |
| **Description** | Triggers immediately when the agent graph begins execution. |
| **Inputs**      | None                                                        |
| **Outputs**     | `Flow`                                                      |

### Voice Command

|                 |                                                                           |
| :-------------- | :------------------------------------------------------------------------ |
| **Type**        | `trigger.voice`                                                           |
| **Description** | Triggers when a user speaks a voice command. Outputs the recognized text. |
| **Inputs**      | None                                                                      |
| **Outputs**     | `Flow`, `Command Text` (String)                                           |

### Schedule

|                 |                                                                                  |
| :-------------- | :------------------------------------------------------------------------------- |
| **Type**        | `trigger.schedule`                                                               |
| **Description** | Triggers periodically based on a schedule (e.g. "Every day at 9am").             |
| **Inputs**      | `Frequency` (Daily, Hourly, Weekdays, Weekends, Weekly, Monthly), `Time (HH:mm)` |
| **Outputs**     | `Flow`, `Time` (String), `Frequency` (String)                                    |
| **Advanced**    | `Weekday`, `Day of Month`, `Legacy CRON`                                         |

### Webhook

|                 |                                                                         |
| :-------------- | :---------------------------------------------------------------------- |
| **Type**        | `trigger.webhook`                                                       |
| **Description** | Triggers when an external HTTP request hits the configured webhook URL. |
| **Inputs**      | `Path` (String)                                                         |
| **Outputs**     | `Flow`, `Payload` (Any), `Headers` (Any), `Path` (String)               |
| **Advanced**    | `Method` (Any, GET, POST, PUT, PATCH, DELETE)                           |

### App Event

|                 |                                                                                  |
| :-------------- | :------------------------------------------------------------------------------- |
| **Type**        | `trigger.app_event`                                                              |
| **Description** | Triggers when a specific application is launched or closed.                      |
| **Inputs**      | `App Name` (String), `Event` (Launched, Terminated, Activated, Hidden)           |
| **Outputs**     | `Flow`, `App Name` (String), `Bundle ID` (String), `PID` (Any), `Event` (String) |
| **Advanced**    | `Bundle ID`                                                                      |

### AI Decision

|                 |                                                                               |
| :-------------- | :---------------------------------------------------------------------------- |
| **Type**        | `trigger.ai_decision`                                                         |
| **Description** | Periodically checks context and uses AI to decide if the workflow should run. |
| **Inputs**      | `Context` (String), `Check Interval` (String)                                 |
| **Outputs**     | `Flow`, `Reasoning` (String)                                                  |

---

## Logic & AI

These nodes provide intelligence and control flow. This includes LLM calls, branching, loops, and delays.

### AI Nodes

AI nodes call a language model and return a text response. Most support **Tool Access** and **Image Input** for multimodal tasks.

#### Simple AI

|                 |                                                                               |
| :-------------- | :---------------------------------------------------------------------------- |
| **Type**        | `logic.ai.simple`                                                             |
| **Color**       | 🟣 Purple (`#8E44AD`)                                                         |
| **Description** | Pure LLM call with no tool access. Fast and lightweight for simple reasoning. |
| **Inputs**      | `In` (Flow), `Prompt` (String), `Provider` (Selector)                         |
| **Outputs**     | `Done` (Flow), `Response` (String)                                            |
| **Advanced**    | `System Instructions`                                                         |

#### Gemini AI

|                 |                                                                       |
| :-------------- | :-------------------------------------------------------------------- |
| **Type**        | `logic.ai.gemini`                                                     |
| **Color**       | 🔵 Blue (`#4285F4`)                                                   |
| **Description** | Google's Gemini LLM. Supports complex reasoning and multimodal tasks. |
| **Inputs**      | `In` (Flow), `Prompt` (String), `Image Content` (Image)               |
| **Outputs**     | `Done` (Flow), `Response` (String)                                    |
| **Advanced**    | `System Instructions`, `Tools (IDs)`                                  |

#### OpenAI

|                 |                                                         |
| :-------------- | :------------------------------------------------------ |
| **Type**        | `logic.ai.openai`                                       |
| **Color**       | 🟢 Green (`#10A37F`)                                    |
| **Description** | OpenAI GPT models. Strong general purpose reasoning.    |
| **Inputs**      | `In` (Flow), `Prompt` (String), `Image Content` (Image) |
| **Outputs**     | `Done` (Flow), `Response` (String)                      |
| **Advanced**    | `System Instructions`, `Tools (IDs)`                    |

#### Groq AI

|                 |                                                                        |
| :-------------- | :--------------------------------------------------------------------- |
| **Type**        | `logic.ai.groq`                                                        |
| **Color**       | 🔴 Red (`#F55036`)                                                     |
| **Description** | High-speed inference using Groq LPUs. Excellent for low-latency tasks. |
| **Inputs**      | `In` (Flow), `Prompt` (String), `Image Content` (Image)                |
| **Outputs**     | `Done` (Flow), `Response` (String)                                     |
| **Advanced**    | `System Instructions`, `Tools (IDs)`                                   |

#### Ollama (Local)

|                 |                                                         |
| :-------------- | :------------------------------------------------------ |
| **Type**        | `logic.ai.ollama`                                       |
| **Color**       | 🔵 Dark (`#2C3E50`)                                     |
| **Description** | Run local LLMs privately on your device via Ollama.     |
| **Inputs**      | `In` (Flow), `Prompt` (String), `Image Content` (Image) |
| **Outputs**     | `Done` (Flow), `Response` (String)                      |
| **Advanced**    | `System Instructions`, `Tools (IDs)`                    |

#### Claude (Anthropic)

|                 |                                                                        |
| :-------------- | :--------------------------------------------------------------------- |
| **Type**        | `logic.ai.anthropic`                                                   |
| **Color**       | 🟠 Terracotta (`#D97757`)                                              |
| **Description** | Anthropic's Claude models. Excellent for nuanced reasoning and safety. |
| **Inputs**      | `In` (Flow), `Prompt` (String), `Image Content` (Image)                |
| **Outputs**     | `Done` (Flow), `Response` (String)                                     |
| **Advanced**    | `System Instructions`, `Tools (IDs)`                                   |

#### Summarize Results

|                 |                                                                              |
| :-------------- | :--------------------------------------------------------------------------- |
| **Type**        | `logic.ai.summarizer`                                                        |
| **Color**       | 🟣 Purple (`#AF52DE`)                                                        |
| **Description** | Summarizes the results of previous actions into a natural language response. |
| **Inputs**      | `In` (Flow), `Input Data` (String), `Provider` (Selector)                    |
| **Outputs**     | `Done` (Flow), `Summary` (String)                                            |
| **Advanced**    | `System Instructions`                                                        |

#### Autonomous Agent

|                 |                                                                                                                                                                       |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Type**        | `logic.agent.reason`                                                                                                                                                  |
| **Color**       | 🟣 Purple (`#AF52DE`)                                                                                                                                                 |
| **Description** | A self-contained agent that plans and executes tools internally to achieve the objective. Uses the OS Reasoning Pipeline.                                             |
| **Inputs**      | `In` (Flow), `Objective` (String)                                                                                                                                     |
| **Outputs**     | `Done` (Flow), `Result` (String), `Step Pulse` (Flow), `Thought` (String)                                                                                             |
| **Advanced**    | `Context`, `Visual Input` (Image), `Tools (IDs)`, `System Instructions`, `Persona` (Generalist, Coding Specialist, Music DJ, System Admin, Researcher), `AI Provider` |

> [!NOTE]
> The **Autonomous Agent** is the most powerful node. It can call tools on its own in a planning loop, similar to a ReAct agent. Use `Step Pulse` to observe its intermediate reasoning steps.

### Control Flow Nodes

#### If / Else

|                 |                                                                                                                                                                               |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Type**        | `control.if_else`                                                                                                                                                             |
| **Color**       | 🟣 Indigo (`#5856D6`)                                                                                                                                                         |
| **Description** | Branches the workflow based on a condition.                                                                                                                                   |
| **Inputs**      | `In` (Flow), `Condition` (Boolean), `Value A` (Any), `Operator` (equals, not equals, contains, starts with, greater than, less than, is empty, is not empty), `Value B` (Any) |
| **Outputs**     | `✓ True` (Flow), `✗ False` (Flow)                                                                                                                                             |

#### Switch

|                 |                                                                                     |
| :-------------- | :---------------------------------------------------------------------------------- |
| **Type**        | `control.switch`                                                                    |
| **Color**       | 🟣 Indigo (`#5856D6`)                                                               |
| **Description** | Routes to different paths based on matching value.                                  |
| **Inputs**      | `In` (Flow), `Value` (Any), `Case 1` (String), `Case 2` (String), `Case 3` (String) |
| **Outputs**     | `→ Case 1` (Flow), `→ Case 2` (Flow), `→ Case 3` (Flow), `→ Default` (Flow)         |

#### For Each

|                 |                                                                                 |
| :-------------- | :------------------------------------------------------------------------------ |
| **Type**        | `control.for_each`                                                              |
| **Color**       | 🟣 Indigo (`#5856D6`)                                                           |
| **Description** | Repeats actions for each item in a list.                                        |
| **Inputs**      | `Start` (Flow), `Items` (Any)                                                   |
| **Outputs**     | `→ Loop Body` (Flow), `Current Item` (Any), `Index` (Any), `→ Completed` (Flow) |

#### Wait / Delay

|                 |                                             |
| :-------------- | :------------------------------------------ |
| **Type**        | `control.wait`                              |
| **Color**       | 🟠 Orange (`#FF9500`)                       |
| **Description** | Pauses workflow for the specified duration. |
| **Inputs**      | `In` (Flow), `Seconds` (Any)                |
| **Outputs**     | `After` (Flow)                              |

#### Stop

|                 |                                       |
| :-------------- | :------------------------------------ |
| **Type**        | `control.stop`                        |
| **Color**       | 🔴 Red (`#FF3B30`)                    |
| **Description** | Immediately halts workflow execution. |
| **Inputs**      | `Stop` (Flow)                         |
| **Outputs**     | None                                  |

#### Native JS

|                 |                                                                             |
| :-------------- | :-------------------------------------------------------------------------- |
| **Type**        | `logic.script.jsc`                                                          |
| **Color**       | 🟡 JS Yellow (`#F7DF1E`)                                                    |
| **Description** | Executes JavaScript natively using JavaScriptCore. Fast and safe for logic. |
| **Inputs**      | `Run` (Flow), `JavaScript` (String), `Inputs (JSON)` (Any)                  |
| **Outputs**     | `Done` (Flow), `Result` (Any)                                               |

---

## Memory

Memory nodes allow your agent to store, recall, and manipulate data across executions.

**Color**: 🟢 Green (`#34C759`) / 🩵 Teal (`#00C7BE`)

### Recall Memories

|                 |                                                                    |
| :-------------- | :----------------------------------------------------------------- |
| **Type**        | `memory.recall`                                                    |
| **Description** | Semantic search over long-term agent memory using vector database. |
| **Inputs**      | `Query` (String)                                                   |
| **Outputs**     | `Facts` (String)                                                   |

### Consolidate (Dream)

|                 |                                                                     |
| :-------------- | :------------------------------------------------------------------ |
| **Type**        | `memory.dream`                                                      |
| **Description** | Triggers memory consolidation to summarize and store recent events. |
| **Inputs**      | `Start` (Flow), `Session History` (String)                          |
| **Outputs**     | `Done` (Flow)                                                       |

### Set Variable

|                 |                                                                    |
| :-------------- | :----------------------------------------------------------------- |
| **Type**        | `context.set`                                                      |
| **Color**       | 🩵 Teal (`#00C7BE`)                                                |
| **Description** | Stores a value in the transient graph context (Short-term memory). |
| **Inputs**      | `In` (Flow), `Key` (String), `Value` (Any)                         |
| **Outputs**     | `Out` (Flow)                                                       |

### Get Variable

|                 |                                                  |
| :-------------- | :----------------------------------------------- |
| **Type**        | `context.get`                                    |
| **Color**       | 🩵 Teal (`#00C7BE`)                              |
| **Description** | Retrieves a stored value from the graph context. |
| **Inputs**      | `In` (Flow), `Key` (String)                      |
| **Outputs**     | `Value` (Any), `Out` (Flow)                      |

---

## Utility

Utility nodes transform data, build prompts, and help with debugging.

### Reroute

|                 |                                                                     |
| :-------------- | :------------------------------------------------------------------ |
| **Type**        | `utility.reroute`                                                   |
| **Color**       | ⚪ Gray (`#BDC3C7`)                                                 |
| **Description** | Pass-through node to organize wires. Works with both flow and data. |
| **Inputs**      | `In` (Any)                                                          |
| **Outputs**     | `Out` (Any)                                                         |

### Sync (Wait)

|                 |                                                                      |
| :-------------- | :------------------------------------------------------------------- |
| **Type**        | `logic.flow.sync`                                                    |
| **Color**       | 🟡 Gold (`#F1C40F`)                                                  |
| **Description** | A barrier node. Waits for BOTH inputs to complete before continuing. |
| **Inputs**      | `Wait 1` (Flow), `Wait 2` (Flow)                                     |
| **Outputs**     | `Flow`                                                               |

### Text Area

|                 |                                                                          |
| :-------------- | :----------------------------------------------------------------------- |
| **Type**        | `utility.text_block`                                                     |
| **Description** | A large editable text block. Useful for prompts, instructions, or notes. |
| **Inputs**      | `Content` (String)                                                       |
| **Outputs**     | `Text` (String)                                                          |

### Prompt Builder

|                 |                                                                                |
| :-------------- | :----------------------------------------------------------------------------- |
| **Type**        | `utility.prompt_builder`                                                       |
| **Color**       | 🟠 Orange (`#E67E22`)                                                          |
| **Description** | Constructs a string by replacing `{{var1}}`, `{{var2}}`, etc. in the Template. |
| **Inputs**      | `Template` (String), `{{var1}}` (Any), `{{var2}}` (Any), `{{var3}}` (Any)      |
| **Outputs**     | `Result` (String)                                                              |

### Math Op

|                 |                                                                         |
| :-------------- | :---------------------------------------------------------------------- |
| **Type**        | `utility.math`                                                          |
| **Description** | Performs basic arithmetic operations (Add, Subtract, Multiply, Divide). |
| **Inputs**      | `A` (Any), `B` (Any)                                                    |
| **Outputs**     | `Result` (Any)                                                          |

### Variable

|                 |                                                                      |
| :-------------- | :------------------------------------------------------------------- |
| **Type**        | `utility.variable`                                                   |
| **Color**       | 🩵 Teal (`#00C7BE`)                                                  |
| **Description** | A constant value node. Supports String, Number, Boolean, or Options. |
| **Inputs**      | None                                                                 |
| **Outputs**     | `Value` (Any)                                                        |

### Result Viewer

|                 |                                                                         |
| :-------------- | :---------------------------------------------------------------------- |
| **Type**        | `utility.result_viewer`                                                 |
| **Description** | Displays the value of the input on the node card. Useful for debugging. |
| **Inputs**      | `In` (Flow), `Input` (Any)                                              |
| **Outputs**     | `Out` (Flow), `Output` (Any)                                            |

### Text Parser

|                 |                                                                                                                                              |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| **Type**        | `utility.text.extract`                                                                                                                       |
| **Description** | Extracts or transforms text using presets or regex. Useful for parsing AI responses.                                                         |
| **Inputs**      | `Source Text` (String), `Mode` (Extract Code Best Match, Extract Code First Block, Strip think Tags, Custom Regex), `Regex Pattern` (String) |
| **Outputs**     | `Result` (String), `Matches Array` (Any)                                                                                                     |

### JSON Parser

|                 |                                                |
| :-------------- | :--------------------------------------------- |
| **Type**        | `utility.json.parse`                           |
| **Color**       | 🔵 Blue (`#3498DB`)                            |
| **Description** | Parses a JSON string into an object.           |
| **Inputs**      | `JSON String` (String)                         |
| **Outputs**     | `Object` (Any), `Keys` (Any), `Error` (String) |

### JSON Builder

|                 |                                                                                                         |
| :-------------- | :------------------------------------------------------------------------------------------------------ |
| **Type**        | `utility.json.build`                                                                                    |
| **Color**       | 🟢 Green (`#2ECC71`)                                                                                    |
| **Description** | Builds a JSON object from key-value pairs. Outputs as a JSON string.                                    |
| **Inputs**      | `Key 1` (String), `Value 1` (Any), `Key 2` (String), `Value 2` (Any), `Key 3` (String), `Value 3` (Any) |
| **Outputs**     | `JSON String` (String)                                                                                  |

### Get JSON Field

|                 |                                                                     |
| :-------------- | :------------------------------------------------------------------ |
| **Type**        | `utility.json.get`                                                  |
| **Color**       | 🟣 Purple (`#9B59B6`)                                               |
| **Description** | Extracts a value from a parsed JSON object using dot notation path. |
| **Inputs**      | `Object` (Any), `Path (e.g. user.name)` (String)                    |
| **Outputs**     | `Value` (Any), `Found` (Boolean)                                    |

---

## Actions

Action nodes interact with the real world — controlling apps, sending notifications, making high-level API calls, and more.

> [!TIP]
> **Looking for Actions?**
>
> Actions have been moved to their own reference section to provide more detail.
>
> - [**System & Files**](/architect/reference/actions/system)
> - [**Productivity & Communication**](/architect/reference/actions/productivity)
> - [**Media & Entertainment**](/architect/reference/actions/media)
> - [**Web & Information**](/architect/reference/actions/web)
> - [**Memory Operations**](/architect/reference/actions/memory)
> - [**Advanced & Agent**](/architect/reference/actions/advanced)
