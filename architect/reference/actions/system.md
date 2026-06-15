# System & Files

Control your Mac's core functions, manage files, and automate system behaviors.

> [!NOTE]
> All System actions require the **Aura Native Helper** to be running. Some file operations may prompt for permission on the first run.

## System Control

### Open Application

|                 |                                                                    |
| :-------------- | :----------------------------------------------------------------- |
| **Type**        | `system.open_app`                                                  |
| **Description** | Launches or activates an application by name or bundle identifier. |
| **Inputs**      | `App Name` (String)                                                |
| **Outputs**     | `Result` (String)                                                  |

**Examples**

- `open_app(app_name="Safari")`
- `open_app(app_name="com.apple.dt.Xcode")`

### System Volume

|                 |                                                         |
| :-------------- | :------------------------------------------------------ |
| **Type**        | `system.set_volume`                                     |
| **Description** | Sets the system output volume to a specific percentage. |
| **Inputs**      | `Level (0-100)` (Number)                                |
| **Outputs**     | `Result` (String)                                       |

**Examples**

- `set_volume(level=50)`

### Run Shell Command

|                 |                                                               |
| :-------------- | :------------------------------------------------------------ |
| **Type**        | `system.shell`                                                |
| **Description** | Executes a shell command in the background. Use with caution. |
| **Inputs**      | `Command` (String), `Directory` (String, Optional)            |
| **Outputs**     | `Output` (String), `Exit Code` (Number)                       |
| **Permissions** | ⚠️ Requires **Explicit User Consent** for every execution.    |

**Examples**

- `run_command(command="ls -la", directory="~/Downloads")`
- `run_command(command="git status")`

---

## File System

### Read File

|                 |                                    |
| :-------------- | :--------------------------------- |
| **Type**        | `filesystem.read`                  |
| **Description** | Reads the contents of a text file. |
| **Inputs**      | `Path` (String)                    |
| **Outputs**     | `Content` (String)                 |

**Examples**

- `read_file(path="~/Documents/notes.txt")`

### Write File

|                 |                                                                 |
| :-------------- | :-------------------------------------------------------------- |
| **Type**        | `filesystem.write`                                              |
| **Description** | Writes text to a file. Can overwrite or append.                 |
| **Inputs**      | `Path` (String), `Content` (String), `Append` (Boolean)         |
| **Outputs**     | `Result` (String)                                               |
| **Permissions** | ⚠️ Requires **Explicit User Consent** for overwrite operations. |

**Examples**

- `write_file(path="~/log.txt", content="Log entry...", append=true)`

### List Directory

|                 |                                                  |
| :-------------- | :----------------------------------------------- |
| **Type**        | `filesystem.list`                                |
| **Description** | Lists files and folders in a specific directory. |
| **Inputs**      | `Path` (String)                                  |
| **Outputs**     | `Files` (`Array<String>`)                        |

**Examples**

- `list_directory(path="~/Downloads")`

---

## Visuals & UI

### Change Wallpaper

|                 |                                                      |
| :-------------- | :--------------------------------------------------- |
| **Type**        | `visuals.wallpaper`                                  |
| **Description** | Sets the desktop wallpaper to a specific image file. |
| **Inputs**      | `Image Path` (String)                                |
| **Outputs**     | `Result` (String)                                    |

**Examples**

- `set_wallpaper(path="~/Pictures/Wallpapers/mountain.jpg")`

### Simulate Input

|                 |                                                                            |
| :-------------- | :------------------------------------------------------------------------- |
| **Type**        | `ui.interact`                                                              |
| **Description** | Simulates mouse clicks or keyboard input for UI automation.                |
| **Inputs**      | `Action` (Click, Type, Move), `Value` (String), `X` (Number), `Y` (Number) |
| **Outputs**     | None                                                                       |

**Examples**

- `ui_interact(action="type", value="Hello World")`
- `ui_interact(action="click", x=500, y=300)`
