---
description: "Web action nodes in Canoryn Architect — live Browser Nodes, fetch, browse, and automate online tasks."
---

# Web & Information

Access the internet, retrieve live data, and put **real webpages** on the Architect canvas.

## Browser Nodes (live web on the canvas)

For the full product guide — multiple live pages, scroll/click, profiles, Finder restore — see **[Browser Nodes](/guide/browser-nodes)**.

A Browser Node is a real WebKit page on the canvas (not a screenshot). Workflows and chat can drive those sessions with the actions below. Prefer these over raw HTTP when the site needs JavaScript, login, or a layout you’re watching.

### browser.load

|                 |                                                                 |
| :-------------- | :-------------------------------------------------------------- |
| **Type**        | `browser.load`                                                  |
| **Description** | Navigates a Browser Node (or shared agent session) to a URL and waits for readiness. |
| **Inputs**      | `url`, optional `node_id`, `wait_for` (load / domready / selector), `selector`, `timeout_s` |
| **Outputs**     | Final URL, title                                                |

### browser.read_page

|                 |                                                                 |
| :-------------- | :-------------------------------------------------------------- |
| **Type**        | `browser.read_page`                                             |
| **Description** | Maps visible headings and interactive elements as `ref_N` ids the agent can act on. |
| **Inputs**      | optional `node_id`, `max_chars`                                 |
| **Outputs**     | Page map, ref count                                             |

### browser.click / browser.fill

|                 |                                                                 |
| :-------------- | :-------------------------------------------------------------- |
| **Types**       | `browser.click`, `browser.fill`                                 |
| **Description** | Click or type into the live page. Prefer a `ref` from `browser.read_page`; CSS `selector` also works. |
| **Notes**       | `browser.fill` is consent-gated; field text is not logged.      |

### browser.extract_text / extract_html / extract_structured

|                 |                                                                 |
| :-------------- | :-------------------------------------------------------------- |
| **Types**       | `browser.extract_text`, `browser.extract_html`, `browser.extract_structured` |
| **Description** | Pull content from the **rendered** DOM (works on JS-heavy pages that raw HTTP cannot). |

### browser.snapshot / navigate / wait_for / list_sessions / run_js

| **Type** | **Purpose** |
| :------- | :---------- |
| `browser.snapshot` | PNG capture of the page |
| `browser.navigate` | Back / forward / reload |
| `browser.wait_for` | Wait for a selector |
| `browser.list_sessions` | List open browser sessions |
| `browser.run_js` | Run authored JavaScript (consent-gated) |

---

## Web Access (HTTP & search)

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
| **Description** | Fetches the full HTML content of a webpage over HTTP (no JS render). Prefer a [Browser Node](/guide/browser-nodes) + `browser.extract_*` for modern sites. |
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
