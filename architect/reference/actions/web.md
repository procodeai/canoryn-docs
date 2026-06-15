# Web & Information

Access the internet, retrieve live data, and perform general utility calculations.

## Web Access

### HTTP Request

|                 |                                                                                                              |
| :-------------- | :----------------------------------------------------------------------------------------------------------- |
| **Type**        | `network.http_request`                                                                                       |
| **Description** | Makes a network request (GET, POST, PUT, DELETE) to an external URL.                                         |
| **Inputs**      | `URL` (String), `Method` (GET/POST/PUT/DELETE), `Headers` (JSON String, Optional), `Body` (String, Optional) |
| **Outputs**     | `Response Body` (String), `Status Code` (Number)                                                             |

**Examples**

- `http_request(url="https://api.github.com/users/octocat", method="GET")`
- `http_request(url="https://api.example.com/data", method="POST", body="{\"key\": \"value\"}")`

### Web Search

|                 |                                                             |
| :-------------- | :---------------------------------------------------------- |
| **Type**        | `web.search`                                                |
| **Description** | Performs a Google or DuckDuckGo search and returns results. |
| **Inputs**      | `Query` (String)                                            |
| **Outputs**     | `Results` (`Array<String>`), `Snippets` (`Array<String>`)   |

**Examples**

- `web_search(query="latest swiftui changes")`

### Get Web Page

|                 |                                             |
| :-------------- | :------------------------------------------ |
| **Type**        | `web.get_page`                              |
| **Description** | Fetches the full HTML content of a webpage. |
| **Inputs**      | `URL` (String)                              |
| **Outputs**     | `HTML` (String), `Text Content` (String)    |

**Examples**

- `get_web_page(url="https://apple.com")`

---

## General Info

### Get Weather

|                 |                                                     |
| :-------------- | :-------------------------------------------------- |
| **Type**        | `general.weather`                                   |
| **Description** | Gets current weather for a location.                |
| **Inputs**      | `Location` (String, Optional - defaults to current) |
| **Outputs**     | `Temperature` (String), `Condition` (String)        |

**Examples**

- `get_weather(location="San Francisco")`

### Get Date & Time

|                 |                                                       |
| :-------------- | :---------------------------------------------------- |
| **Type**        | `general.time`                                        |
| **Description** | Returns the current date and time in various formats. |
| **Inputs**      | `Format` (String, Optional)                           |
| **Outputs**     | `Date String` (String), `Timestamp` (Number)          |

**Examples**

- `get_time(format="yyyy-MM-dd HH:mm:ss")`

### Calculate

|                 |                                             |
| :-------------- | :------------------------------------------ |
| **Type**        | `general.calculate`                         |
| **Description** | Evaluates a mathematical expression string. |
| **Inputs**      | `Expression` (String)                       |
| **Outputs**     | `Result` (Number)                           |

**Examples**

- `calculate(expression="5 * (10 + 2)")`
