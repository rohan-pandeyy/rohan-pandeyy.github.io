# Rohan Pandey: Portfolio

Personal portfolio at **https://rohan-pandeyy.github.io**, built on the
[Magic UI portfolio template](https://magicui.design/docs/templates/portfolio)
(Next.js, Tailwind CSS, shadcn/ui, Magic UI and Motion) and exported as a static
site for GitHub Pages.

The previous Create React App version lives in [`_legacy/`](./_legacy) for
reference and is excluded from the TypeScript build.

## Stack

- Next.js 16 (App Router, static export), React 19, TypeScript
- Tailwind CSS 4, shadcn/ui, Magic UI components, Motion
- MDX blog via `content-collections`
- EmailJS for the contact form
- `react-icons` for skill and brand icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Generate the CV PDF, then build the static site into `out/` |
| `npm run cv:pdf` | Regenerate `public/Rohan_Pandey_CV.pdf` from `src/data/cv.md` |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish `out/` to the `gh-pages` branch |

## Where things live

| Path | Content |
| --- | --- |
| `src/data/resume.tsx` | Name, summary, work, education, skills, projects, socials, orgs |
| `src/data/cv.md` | The CV shown on `/resume` and rendered to PDF |
| `content/*.mdx` | Blog posts |
| `public/logos/` | Company, school and organization logos |
| `src/assets/fonts/` | Fonts used only when rendering Open Graph images |
| `src/components/section/` | Page sections (work, projects, contact, GitHub activity) |

## Contact form

The form sends mail through [EmailJS](https://www.emailjs.com/), so no server is
needed. Copy `.env.example` to `.env.local` and fill in your service, template
and public key:

```bash
cp .env.example .env.local
```

The public key ends up in the client bundle by design; restrict the allowed
domains in the EmailJS dashboard.

## CV PDF

`npm run build` generates the CV PDF using a locally installed Chrome or Edge in
headless mode (set `CHROME_PATH` to point at a specific browser). If no browser is
found the step is skipped with a warning and the existing file, if any, is used.

## Deploying

```bash
npm run deploy
```

This builds the site and pushes `out/` to the `gh-pages` branch. If you build on
a network that intercepts TLS, `next/font/google` needs the system certificates;
this is already enabled via `experimental.turbopackUseSystemTlsCerts` in
`next.config.mjs`.

## Credits and license

Based on [dillionverma/portfolio](https://github.com/dillionverma/portfolio),
licensed under MIT (see [LICENSE](./LICENSE)).
