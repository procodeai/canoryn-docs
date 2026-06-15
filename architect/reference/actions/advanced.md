# Advanced & Agent Operations

Meta-cognitive tools for controlling the agent itself and performing developer-level operations.

## Architect & Beta Tools

### Generate Workflow (Beta)

> [!WARNING] Beta Feature
> This action is experimental and may not always generate perfect graphs. It is intended for advanced users to prototype workflows via text description.

|                 |                                                                                       |
| :-------------- | :------------------------------------------------------------------------------------ |
| **Type**        | `architect.generate_workflow`                                                         |
| **Description** | Creates a new agent workflow graph from a text description.                           |
| **Inputs**      | `Name` (String), `Description` (String), `Nodes JSON` (String), `Wires JSON` (String) |
| **Outputs**     | `Success Message` (String)                                                            |

**Examples**

- `generate_workflow(name="HelloAgent", description="Says hello", nodes_json="[...]", wires_json="[...]")`

---

## Coding & Developer Tools

### Run Python Script

|                 |                                                        |
| :-------------- | :----------------------------------------------------- |
| **Type**        | `coding.run_python`                                    |
| **Description** | Executes a Python script in a constrained environment. |
| **Inputs**      | `Script` (String), `Args` (`Array<String>`)            |
| **Outputs**     | `Output` (String), `Error` (String)                    |

**Examples**

- `run_python(script="print('Hello World')", args=[])`
