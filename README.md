# messenger-copy

Unofficial learning workspace that mirrors assets, shaders, and scene structure from [**Messenger**](https://messenger.abeto.co/) by [abeto](https://abeto.co/).

> **Disclaimer:** This is not the real game. It is a local, AI-assisted rebuild for study only. All original art, audio, and design remain the property of their respective owners. See [ATTRIBUTION.md](./ATTRIBUTION.md).

## Demo

Live preview: **https://zjoooooo.github.io/messenger-copy/**

Deployed automatically to GitHub Pages by [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) on every push to `main`. See [Deploy the demo](#deploy-the-demo) for one-time setup.

## What this is

- A SvelteKit + Three.js preview with **Intro**, **Gameplay**, and **NPC** scene modes
- Downloaded reference bundles under `reference/messenger.abeto.co/`
- Ported/simplified GLSL materials, Draco loaders, and post-processing experiments

## License

- **Repository code** (`src/`, scripts, config): [MIT](./LICENSE)
- **Reference assets** (`reference/`, `static/messenger`): belong to the original Messenger project — do not redistribute without permission

## Develop

```sh
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy the demo

The app is exported as a static site (`@sveltejs/adapter-static`) and published to GitHub Pages. Because it serves from a project subpath (`/messenger-copy/`), the build reads a `BASE_PATH` env var and prefixes every asset URL with it; local dev/preview leave it empty.

One-time setup in the GitHub repo:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main` (or run the **Deploy demo to GitHub Pages** workflow manually via *Actions → Run workflow*).

The workflow builds with `BASE_PATH=/messenger-copy` and deploys `build/` to Pages. To build the static site locally the same way CI does:

```sh
BASE_PATH=/messenger-copy pnpm build   # output in build/
```

### Reference tooling

```sh
pnpm reference:discover   # find asset URLs from bundles
pnpm reference:download   # fetch missing reference files
pnpm reference:shaders    # extract GLSL from JS bundles
```

## Stack

- SvelteKit 2 / Svelte 5
- Three.js r184
- TypeScript, Tailwind CSS, Vitest
