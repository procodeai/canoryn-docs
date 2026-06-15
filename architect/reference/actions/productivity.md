# Productivity & Communication

Manage your schedule, tasks, and communications with native app integrations.

## Notes & Reminders

### Create Note

|                 |                                                                   |
| :-------------- | :---------------------------------------------------------------- |
| **Type**        | `productivity.create_note`                                        |
| **Description** | Creates a new note in the Apple Notes app.                        |
| **Inputs**      | `Title` (String), `Content` (String), `Folder` (String, Optional) |
| **Outputs**     | `Note ID` (String)                                                |

**Examples**

- `create_note(title="Meeting Minutes", content="Action items...", folder="Work")`

### Create Reminder

|                 |                                                                                     |
| :-------------- | :---------------------------------------------------------------------------------- |
| **Type**        | `productivity.create_reminder`                                                      |
| **Description** | Adds a new task to Apple Reminders.                                                 |
| **Inputs**      | `Title` (String), `List` (String, Optional), `Priority` (High/Medium/Low, Optional) |
| **Outputs**     | `Reminder ID` (String)                                                              |

**Examples**

- `create_reminder(title="Buy milk", list="Groceries", priority="High")`

### List Reminders

|                 |                                           |
| :-------------- | :---------------------------------------- |
| **Type**        | `productivity.list_reminders`             |
| **Description** | Retrieves a list of incomplete reminders. |
| **Inputs**      | `List` (String, Optional)                 |
| **Outputs**     | `Reminders` (`Array<String>`)             |

**Examples**

- `list_reminders(list="Today")`

---

## Calendar

### Create Event

|                 |                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------ |
| **Type**        | `productivity.create_event`                                                                 |
| **Description** | Schedules a new event in the Calendar app.                                                  |
| **Inputs**      | `Title` (String), `Start Time` (String), `Duration` (Number), `Location` (String, Optional) |
| **Outputs**     | `Event ID` (String)                                                                         |

**Examples**

- `create_event(title="Team Sync", start_time="Tomorrow 10am", duration=30)`

### List Events

|                 |                                 |
| :-------------- | :------------------------------ |
| **Type**        | `productivity.list_events`      |
| **Description** | Lists upcoming calendar events. |
| **Inputs**      | `Range` (Today/Week/Month)      |
| **Outputs**     | `Events` (`Array<String>`)      |

**Examples**

- `list_events(range="Today")`

---

## Communication

### Send Email

|                 |                                                                                 |
| :-------------- | :------------------------------------------------------------------------------ |
| **Type**        | `communication.send_email`                                                      |
| **Description** | Composes an email in Apple Mail.                                                |
| **Inputs**      | `To` (String), `Subject` (String), `Body` (String)                              |
| **Outputs**     | `Result` (String)                                                               |
| **Permissions** | ⚠️ Opens the Mail compose window. Does not auto-send without user confirmation. |

**Examples**

- `send_email(to="john@example.com", subject="Hello", body="Just checking in.")`

### Send Message

|                 |                                                |
| :-------------- | :--------------------------------------------- |
| **Type**        | `communication.send_message`                   |
| **Description** | Sends an iMessage or SMS via the Messages app. |
| **Inputs**      | `To` (String), `Message` (String)              |
| **Outputs**     | `Result` (String)                              |

**Examples**

- `send_message(to="Alice", message="Running late!")`
