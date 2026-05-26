# Migueldesanta.github.io

Personal portfolio site for Xin (Michael) Yun — built as a Jekyll site organised around a working-paper series.

Live: <https://migueldesanta.github.io>

---

## Structure

```
.
├── _config.yml              ← site metadata, collections, plugins
├── _layouts/
│   ├── default.html         ← base HTML shell
│   ├── page.html            ← generic interior page
│   └── paper.html           ← case-study / paper layout
├── _includes/
│   ├── head.html            ← <head>, meta, fonts, CSS link
│   ├── header.html          ← site nav
│   └── footer.html          ← site footer
├── _papers/                 ← one .md per working paper
│   ├── 01-datafest.md
│   ├── 02-network-insularity.md
│   ├── 03-sovereign-bond.md
│   └── 04-fed-dashboard.md
├── assets/
│   ├── css/main.css         ← all styles
│   ├── images/              ← profile, favicon, paper assets
│   └── cv.pdf               ← (add your CV here)
├── index.html               ← homepage (hero + paper index + about snippet)
├── about.md                 ← full about page (/about/)
└── Gemfile
```

## Adding a new paper

Create a file in `_papers/` with the following frontmatter:

```yaml
---
title: "Paper title"
subtitle: "Optional subtitle in italic."
paper_number: "XY-2026-05"
order: 5                    # used to sort the homepage list (higher = newer/first)
date: 2026-06-01
status: "Working paper"     # optional
abstract: "One-paragraph abstract shown on homepage and at top of paper page."
tags: [Tag 1, Tag 2, Tag 3]
links:                      # optional external links shown under abstract
  - label: "Code on GitHub"
    url: "https://github.com/..."
  - label: "Live demo"
    url: "https://..."
---

Markdown body of the paper goes here. Use ## and ### for section headings.
```

The homepage will auto-populate the new paper in the catalog, sorted by `order` (descending).

## Local development

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## What to add before publishing

- [ ] `assets/cv.pdf` — your one-page CV (the "Download PDF →" link in the About sidebar points here)
- [ ] Optional: screenshots/figures inside `assets/images/papers/` referenced from individual paper files
- [ ] Update `_config.yml` author email / linkedin / github if anything changes

## Design notes

- **Typography:** Newsreader (serif, body + headings) + JetBrains Mono (numeric labels, paper numbers, nav)
- **Palette:** warm off-white `#F8F5EE` paper, near-black `#1A1A1A` ink, oxblood `#7C1F1F` accent
- **Layout:** single-column at 720px reading width, sticky nav with backdrop blur, working-paper aesthetic
- **No build step beyond Jekyll** — pure CSS, no SCSS, no JavaScript, no external build tools

## License

Content © Xin (Michael) Yun. Design code MIT.
