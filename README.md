# gitagent — landing page

This is the landing page for [gitagent](https://github.com/10xdev4u-alt/gitagent), the open-source framework for declaring persistent, versioned AI agents as files in your GitHub repository.

## What this site is

- **One-page landing** at `index.astro` — the marketing/showcase page
- **Examples page** at `examples.astro` — the 13 shipped example agents
- Built with [Astro](https://astro.build), static output, deployed to GitHub Pages
- Custom design system: "10x Engine" — deep navy + electric cyan + terminal green
- Cursor-light that follows the mouse, scroll-reveal animations, animated terminal demo, interactive manifest playground

## Local dev

```bash
npm install
npm run dev      # dev server
npm run build    # build to dist/
```

## Deploy

The `.github/workflows/deploy.yml` workflow builds and deploys on every push to `main`. Live at:

**https://10xdev4u-alt.github.io/gitagent-site/**

(Note: GitHub Pages URL is `/gitagent-site/` because the repo is named `gitagent-site`. The Astro `base` is set to match.)

## Structure

```
src/
├── layouts/
│   └── BaseLayout.astro      # HTML shell, meta, fonts, scripts
├── pages/
│   ├── index.astro           # main landing page
│   └── examples.astro        # 13 example agents showcase
├── components/
│   ├── TerminalDemo.astro     # animated real-looking terminal
│   ├── ManifestPlayground.astro  # interactive YAML editor + live preview
│   └── AgentConstellation.astro   # SVG network of 13 agents
└── styles/
    └── global.css             # design system
```

## Credits

- Astro for the static site framework
- Google Fonts for Space Grotesk, Inter, JetBrains Mono
- The whole [gitagent](https://github.com/10xdev4u-alt/gitagent) project, which this site showcases
