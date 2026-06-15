# Media & Entertainment

Control playback, manage playlists, and access entertainment services.

## Music (Apple Music)

> [!NOTE]
> Uses the **native Music app** on macOS. Works offline with your local library and requires no API keys or login.

### Play Music

|                 |                                                            |
| :-------------- | :--------------------------------------------------------- |
| **Type**        | `apple.play_music`                                         |
| **Description** | Plays songs, albums, or playlists from your local library. |
| **Inputs**      | `Query` (String)                                           |
| **Outputs**     | `Result` (String)                                          |

**Examples**

- `play_music(query="The Beatles")`
- `play_music(query="Chill Playlist")`

### Control Playback

|                 |                                                          |
| :-------------- | :------------------------------------------------------- |
| **Type**        | `apple.control`                                          |
| **Description** | Controls playback state (Pause, Resume, Next, Previous). |
| **Inputs**      | `Command` (Enum: pause, resume, next, previous)          |
| **Outputs**     | `Result` (String)                                        |

**Examples**

- `control_music(command="pause")`
- `control_music(command="next")`

## Music (Spotify)

> [!NOTE]
> Requires a **Spotify Premium** account and an active device (desktop, mobile, or web player).
>
> **Why Web API?**
> We use the Spotify Web API to allow your agent to control music on **any device** (smart speakers, phone, laptop) and to access rich metadata for "smart" DJing. This enables true agentic control beyond simple local keyboard simulation.

### Play Music

|                 |                                                                                                    |
| :-------------- | :------------------------------------------------------------------------------------------------- |
| **Type**        | `spotify.play`                                                                                     |
| **Description** | Starts playback. Can play a specific URI (Track, Album, Artist, Playlist) or resume current track. |
| **Inputs**      | `URI` (String, Optional), `Context` (String, Optional)                                             |
| **Outputs**     | `Result` (String)                                                                                  |

**Examples**

- `play_music(uri="spotify:track:4cOdK2wGLETKBW3PvgPWqT")`
- `play_music()` (Resumes playback)

### Pause Music

|                 |                           |
| :-------------- | :------------------------ |
| **Type**        | `spotify.pause`           |
| **Description** | Pauses the current track. |
| **Inputs**      | None                      |
| **Outputs**     | `Result` (String)         |

**Examples**

- `pause_music()`

### Next Track

|                 |                                       |
| :-------------- | :------------------------------------ |
| **Type**        | `spotify.next`                        |
| **Description** | Skips to the next track in the queue. |
| **Inputs**      | None                                  |
| **Outputs**     | `Result` (String)                     |

**Examples**

- `next_track()`

### Previous Track

|                 |                              |
| :-------------- | :--------------------------- |
| **Type**        | `spotify.previous`           |
| **Description** | Skips to the previous track. |
| **Inputs**      | None                         |
| **Outputs**     | `Result` (String)            |

**Examples**

- `previous_track()`

### Add to Queue

|                 |                                     |
| :-------------- | :---------------------------------- |
| **Type**        | `spotify.queue`                     |
| **Description** | Adds a track to the playback queue. |
| **Inputs**      | `URI` (String)                      |
| **Outputs**     | `Result` (String)                   |

**Examples**

- `add_to_queue(uri="spotify:track:...")`

### Get Now Playing

|                 |                                                                            |
| :-------------- | :------------------------------------------------------------------------- |
| **Type**        | `spotify.now_playing`                                                      |
| **Description** | Returns details about the currently playing track.                         |
| **Inputs**      | None                                                                       |
| **Outputs**     | `Track Name` (String), `Artist` (String), `Album` (String), `URI` (String) |

**Examples**

- `get_now_playing()`

### Set Volume

|                 |                                      |
| :-------------- | :----------------------------------- |
| **Type**        | `spotify.volume`                     |
| **Description** | Sets the Spotify application volume. |
| **Inputs**      | `Level (0-100)` (Number)             |
| **Outputs**     | `Result` (String)                    |

**Examples**

- `set_spotify_volume(level=80)`

---

## Streaming & Entertainment

### Watch Movie / TV

|                 |                                                                             |
| :-------------- | :-------------------------------------------------------------------------- |
| **Type**        | `entertainment.watch_movie`                                                 |
| **Description** | Searches for movies or shows on streaming platforms.                        |
| **Inputs**      | `Query` (String, Optional), `Platform` (Enum: netflix, disney, prime, hulu) |
| **Outputs**     | `Result` (String)                                                           |

**Examples**

- `watch_movie(query="Inception", platform="netflix")`
- `watch_movie(query="The Mandalorian", platform="disney")`

### Open Netflix

|                 |                                             |
| :-------------- | :------------------------------------------ |
| **Type**        | `entertainment.open_netflix`                |
| **Description** | Opens the Netflix homepage in your browser. |
| **Inputs**      | None                                        |
| **Outputs**     | `Result` (String)                           |

**Examples**

- `open_netflix()`

### Search YouTube

|                 |                                                            |
| :-------------- | :--------------------------------------------------------- |
| **Type**        | `entertainment.youtube_search`                             |
| **Description** | Searches YouTube and returns video results.                |
| **Inputs**      | `Query` (String)                                           |
| **Outputs**     | `Video URLs` (`Array<String>`), `Titles` (`Array<String>`) |

**Examples**

- `youtube_search(query="SwiftUI tutorial")`
