# Neon Countdown Timer (desktop app)

A frameless, real always-on-top version of the timer — no browser window,
no title bar, no file-path bar. It will float above PowerPoint, Word, and
full-screen presentations.

## Setup (one-time)

You need [Node.js](https://nodejs.org) installed (any recent version).

1. Unzip/copy this folder anywhere on your computer.
2. Open a terminal/command prompt in this folder.
3. Run:

   ```
   npm install
   ```

   This downloads Electron (~150 MB, one-time).

## Running it

```
npm start
```

A small black window opens, always on top of everything else, with no
title bar. Drag it by clicking and holding anywhere in the top row (next
to the badge/tabs). Resize it from any edge/corner like a normal window.
Click the ✕ in the top-right corner to close it.

## Notes

- All your settings (custom alarm sound, volume) are remembered between
  runs, same as the browser version.
- To change the badge, replace `midstream-ridge-badge.png` in this folder
  with your own image (same filename), or edit the `<img src="...">` line
  near the top of `timer.html`.
## Building a standalone .exe (no Node.js needed to run it)

Once `npm install` has been run at least once:

```
npm run dist
```

This produces a portable `Neon Countdown Timer.exe` (Windows) under the
`dist/` folder — no installer, no Node.js required on the machine that
runs it. Just copy that one `.exe` anywhere and double-click it. On
macOS/Linux the same command produces a `.dmg`/`.AppImage` instead.

Building takes a minute or two the first time (it downloads Electron's
platform binaries). Re-run `npm run dist` any time you change `timer.html`
to refresh the `.exe`.
