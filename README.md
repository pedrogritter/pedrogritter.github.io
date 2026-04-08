# Gritter Portfolio

A dark, vaporwave-inspired personal portfolio built with Jekyll 4 and TailwindCSS 3.4. Features marble-ink SVG backgrounds, glassmorphism cards, scroll-driven parallax, and staggered reveal animations.

**Live:** [pedrogritter.github.io](https://pedrogritter.github.io)

## 🚀 Features

- Marble-ink SVG background with fractal noise turbulence
- Glassmorphism cards and frosted-glass overlays
- Scroll-driven parallax (hero fade-out, section scale/opacity)
- Staggered reveal animations with IntersectionObserver
- Scroll progress indicator in the nav bar
- Device orientation parallax on mobile
- Respects `prefers-reduced-motion`
- SEO optimized (jekyll-seo-tag, jekyll-sitemap)
- HTML & CSS compression in production

## 🛠 Tech Stack

| Layer | Tools |
|-------|-------|
| **Static site** | Jekyll 4.2 |
| **Styling** | TailwindCSS 3.4, PostCSS, Autoprefixer, CSSNano |
| **Fonts** | Inter (sans), JetBrains Mono / Fira Code (mono) |
| **Interactivity** | Vanilla JS (IntersectionObserver, scroll events) |
| **Deployment** | GitHub Pages |

## 🏗 Project Structure

```
pedrogritter.github.io/
├── _config.yml
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── Gemfile
├── _data/
│   ├── experience.yml
│   ├── projects.yml
│   ├── skills.yml
│   ├── education.yml
│   └── social.yml
├── _includes/
│   ├── header.html
│   ├── footer.html
│   └── sections/
│       ├── hero.html
│       ├── experience.html
│       ├── projects.html
│       ├── skills.html
│       ├── education.html
│       └── contact.html
├── _layouts/
│   └── default.html
├── _sass/
│   └── base.scss
└── assets/
    ├── css/
    │   ├── main.scss
    │   └── animations.scss
    └── js/
        └── main.js
```

## 🚦 Getting Started

### Prerequisites

- Ruby >= 2.7
- Node.js >= 14
- Bundler (`gem install bundler`)

### Install dependencies

```bash
bundle install
npm install
```

### Run development server

```bash
bundle exec jekyll serve
```

### Build for production

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## 💅 Customization

### Design Tokens

Color scheme is configured in `tailwind.config.js`:

| Token | Value | Purpose |
|-------|-------|---------|
| `accent` | `#3b82f6` | Links, focus rings, highlights |
| `accent-muted` | `#93c5fd` | Hover states |
| `surface-base` | `#0a0a0a` | Page background |
| `surface-raised` | `#141414` | Cards, elevated elements |
| `surface-border` | `#262626` | Borders |
| `text-primary` | `#fafafa` | Headings, body |
| `text-secondary` | `#a3a3a3` | Descriptions |
| `text-muted` | `#737373` | Captions, dates |

Easing curves and animation durations are defined as CSS custom properties in `_sass/base.scss`.

### Animations

Defined in `assets/css/animations.scss`:

- **Reveal**: Fade-in + 12px translateY with staggered delays (0–840ms)
- **Marble drift**: Three gradient layers with turbulence distortion (35s, 45s, 55s cycles)
- **Scroll hint**: Bouncing dot indicator on the hero
- **Progress bar**: Scroll-driven nav progress indicator
- **Hero parallax**: Opacity, translateY, and scale on scroll

### Data-Driven Sections

All content lives in `_data/` YAML files — edit those to update sections without touching templates:

- `experience.yml` — Work history (title, company, highlights)
- `projects.yml` — Featured projects (title, link, tech tags)
- `skills.yml` — Grouped skill tags (Core, Styling, State & Data, Backend, AI & ML, Tools)
- `education.yml` — Degrees and institutions
- `social.yml` — Social links for header/footer

## 📄 License

MIT License — feel free to use this template for your own portfolio.

## 👤 Author

Pedro Gritter

- GitHub: [@pedrogritter](https://github.com/pedrogritter)
- LinkedIn: [pedrogritter](https://linkedin.com/in/pedrogritter)