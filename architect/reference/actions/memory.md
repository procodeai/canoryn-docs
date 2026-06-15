# Memory Operations

Advanced tools for managing long-term memory and database states.

> [!TIP]
> For simple variable storage within a single workflow run, use the **Set Variable** and **Get Variable** nodes in the Core library. These actions are for persistent, cross-session storage.

## Database

### SQL Query

|                 |                                                               |
| :-------------- | :------------------------------------------------------------ |
| **Type**        | `memory.sql_query`                                            |
| **Description** | Executes a raw SQL query against the agent's SQLite database. |
| **Inputs**      | `Query` (String)                                              |
| **Outputs**     | `Results` (JSON String), `Error` (String)                     |
| **Permissions** | ⚠️ Direct database access. Use with caution.                  |

**Examples**

- `sql_query(query="SELECT * FROM memories WHERE type = 'episodic' LIMIT 5")`

### Vector Search

|                 |                                                         |
| :-------------- | :------------------------------------------------------ |
| **Type**        | `memory.vector_search`                                  |
| **Description** | Performs a semantic search against the vector database. |
| **Inputs**      | `Query` (String), `Limit` (Number, Optional)            |
| **Outputs**     | `Memories` (`Array<String>`)                            |

**Examples**

- `vector_search(query="What did we discuss about the project roadmap?", limit=3)`

### Delete Memory

|                 |                                     |
| :-------------- | :---------------------------------- |
| **Type**        | `memory.delete`                     |
| **Description** | Permanently removes a memory by ID. |
| **Inputs**      | `Memory ID` (String)                |
| **Outputs**     | `Success` (Boolean)                 |

**Examples**

- `delete_memory(id="mem_12345")`
