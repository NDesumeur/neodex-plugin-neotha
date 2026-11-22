# NeoTha

A mouse rhythm game: notes come from the far end of a tunnel towards a 3 × 3 grid, and your cursor must be on each note the moment it lands. Play the 1200 tracks from the Rythme plugin, or create levels from any music.

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

The **Songs** tab offers the 1200 tracks from the Rythme plugin, each with its 4 difficulties. Notes are placed on the music's beats.

## My music

In **My music**, create a level:

- **Import an audio file** (MP3, M4A, OGG, Opus, WAV, FLAC or WebM), or pick a track from your NeoMusic library;
- **Create level**: NeoTha detects the tempo and strong beats and builds 4 difficulty levels from them.

## Community maps

In **My music**, **IMPORT A MAP (.SSPM)**: a Sound Space Plus or Rhythia map (**.sspm** file, versions 1 and 2, with its music), or a Sound Space text map (**.txt**, picked together with its music). Notes stay exactly where they are, even between two cells. The map and its music are kept on this PC (20 MB at most for the music); **×** removes it.

## Genre settings

- **Approach speed** (Auto, Slow to Extreme): the time between a note appearing and reaching you, separate from the **Distance** (near, normal, far) at which it appears in the tunnel.
- **Mods**: **FADE IN** (notes only appear halfway), **GHOST** (they vanish just before arriving), **MIRROR** (the grid flipped left to right). Each mod gives 10 % more experience.
- **Note size**, **Note colour** (alternating, by pattern: one colour per pattern — stream, spiral, zigzag, triangle, square, jump — or rainbow), **Parallax** (the grid and tunnel follow the cursor a little), **Locked cursor** (it stays inside the play field).

## Challenges and progression

- **Challenge**: notes only land on some cells — **corners only**, **the cross**, **the ring** or **the middle row**. Each challenge has its own leaderboard.
- **Player level**: each hit note gives experience (more on high-star levels, with a challenge or with mods). Your level is shown at the top.
- The end screen also shows the **miss map**: the share of missed notes on each of the 9 cells, and the cell you miss most.

## Settings

- Music **volume**.
- **Hit sound**: the sound played on each note you hit, one of 10 (Soft, Clap, Wood, Kick, Crystal, Pop, Hi-hat, Snare, Pluck, Tock) or none. Losing a combo of 10 or more plays a « combo break » sound.
- **Audio offset**: Auto, +40, +80 or +120 ms, if the sound arrives late (Bluetooth headphones, for example).
- **Cursor**: dot, circle or square.

## Data and sync

Your scores, accuracy and grades per level, along with your settings and cursor, are stored by NeoDex, backed up and synced between your PCs when sync is on. Records belong to NeoTha alone. The NeoMusic plugin is required.

## Install

In NeoDex: **NeoStore → Discover → NeoTha → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).

## Version 1.5.0

- Each song has its own tunnel: rectangle, hexagon, circle, diamond, octagon or triangle, with its two colours, always the same for a given song.
- End screen: the accuracy curve across the song, with missed notes marked in red.

## Speed and replay

The “Speed” option plays the song at 0.75×, 1×, 1.25× or 1.5×: notes arrive in time with the music. Faster gives more XP, and each speed has its own records. At the end of a game, the R key replays it with its music: your cursor follows exactly the same path (no record, no XP).
