# NeoTha

A mouse rhythm game: notes come from the far end of a tunnel towards a 3 × 3 grid, and your cursor must be on each note the moment it lands. Play the 200 tracks from the Rythme plugin, or create levels from any music.

*Version française : [README.md](README.md)*

## How to play

- Pick a track and a difficulty (Easy, Normal, Hard, Expert), then press **Space** to play.
- Notes grow as they approach the end of the tunnel. Put the cursor on the note's square the moment it arrives: it is a hit. If it arrives without the cursor on it, it is a miss.
- Notes land anywhere in the field, sometimes in long streams to follow in one movement.
- The mouse is captured during the game; **Escape** releases it. **P** pauses, **Space** resumes.
- **Full screen** to play on the whole screen.

## Points and grades

Each hit is worth 300 points, plus 1 % per note of combo, up to double from 100 notes in a row. A miss resets the combo.

At the end, the final grade depends on the share of notes hit: **S** from 95 %, **A** at 90 %, **B** at 80 %, **C** at 70 %, **D** below. Score, accuracy, max combo and grade are kept for each level.

## Songs

The **Songs** tab offers the 200 tracks from the Rythme plugin, each with its 4 difficulties. Notes are placed on the music's beats.

## My music

In **My music**, create a level:

- **Import an audio file** (MP3, M4A, OGG, Opus, WAV, FLAC or WebM), or pick a track from your NeoMusic library;
- **Create level**: NeoTha detects the tempo and strong beats and builds 4 difficulty levels from them.

## Settings

- Music **volume**.
- **Audio offset**: Auto, +40, +80 or +120 ms, if the sound arrives late (Bluetooth headphones, for example).
- **Cursor**: dot, circle or square.

## Data and sync

Your scores, accuracy and grades per level, along with your settings and cursor, are stored by NeoDex, backed up and synced between your PCs when sync is on. Records belong to NeoTha alone. The NeoMusic plugin is required.

## Install

In NeoDex: **NeoStore → Discover → NeoTha → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
