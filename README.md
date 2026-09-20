# VELVET v0.4 — live-source prototype

This build is meant to be easy to test before you deploy anything.

## What changed

- The first live source is **RedGIFs**, chosen because VELVET is video-first.
- When you run `npm start` and open `http://localhost:8787`, the frontend automatically uses the local backend. You do **not** have to paste a backend URL into Settings.
- Directly opening `index.html` still works in demo mode.
- Search terms are expanded through the built-in multilingual tag groups.
- The backend returns source/media URLs; it does not copy the media files into the project.
- A basic blocklist removes clearly youth-coded/underage tags before results are returned/displayed.
- If a live provider is unavailable, the UI falls back to demo data instead of going blank.

## Requirements

- Node.js 20 or newer.
- No npm packages are required.

## Setup on a computer

1. Extract the ZIP.
2. Open a terminal/Command Prompt inside the `velvet_v4` folder.
3. Run:

```bash
npm start
```

4. Open this in your browser:

```text
http://localhost:8787
```

5. Search for a broad tag such as:

```text
dance
twerking
lingerie
nightlife
```

The Settings panel can switch between RedGIFs and the optional additional providers already included in the adapter.

## Setup on a phone

The easiest development setup is to run the server on a computer and open it from the phone over the same Wi-Fi network.

On the computer:

```bash
npm start
```

Find the computer's local IPv4 address (for example `192.168.1.25`), then on the phone open:

```text
http://192.168.1.25:8787
```

If the computer firewall asks whether Node may accept local-network connections, allow it for your private/home network.

## Direct HTML mode

You can also open `index.html` directly in a browser. In that mode the live provider API is intentionally not called, because many external APIs need a server-side request layer. Demo search, player, favorites, history, queue and playlists still work.

## Current source notes

Rule34 and Gelbooru document DAPI/JSON tag-search endpoints. RedGIFs currently uses a temporary bearer-token flow and a GIF-search endpoint in its API ecosystem; the adapter follows that current pattern. Provider behavior can change, so the next production step should be proper API/terms verification and error handling per source.

## Safety

Keep the service limited to lawful, consensual adult material. Do not add or index leaked/private intimate material, content involving minors, or content without appropriate consent. The built-in term filter is only a basic guard and is not a substitute for moderation, age-gating, or legal review.

## Next development step

After this build works on your phone, the next useful engineering step is to add a proper infinite-scroll/pagination layer and a cleaner source adapter interface so each new provider can be added without changing the player/feed code.
