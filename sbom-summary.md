# Open-source component inventory — Quitty website

Companion summary to `sbom.cyclonedx.json`. That file is the formal, machine-readable SBOM
(CycloneDX 1.5) intended for automated scanning; this page is the readable version of the same data.
A third file, `sbom-components.csv`, contains the complete flat list for spreadsheet review.

| | |
|---|---|
| Product | Quitty marketing website (`quitty.ch`) |
| Generated | 2026-09-15 |
| Source of truth | `package-lock.json` (lockfileVersion 3) |
| Components, total | **663** |
| — shipped at runtime | 397 |
| — build/development only, not shipped | 266 |
| Known vulnerabilities | **0** (`npm audit`, runtime and development) |
| Licence coverage | 663 / 663 — no gaps |

## How to read the numbers

663 sounds like a lot; it is normal for a JavaScript project and it is not a count
of things anyone chose. The team selected the **29 runtime packages** listed below.
Everything else is pulled in automatically as those packages' own dependencies, and their
dependencies in turn. The 266 development-only entries (compilers, linters,
type definitions) run on build machines and are **never served to a visitor** — they are marked
`scope: excluded` in the SBOM so a scanner can filter them out.

## Directly chosen runtime dependencies (29)

| Package | Version | Licence |
|---|---|---|
| `@hookform/resolvers` | 3.3.4 | MIT |
| `@mdx-js/react` | 3.0.1 | MIT |
| `@radix-ui/react-accordion` | 1.1.2 | MIT |
| `@studio-freight/lenis` | 1.0.42 | MIT |
| `aos` | 2.3.4 | MIT |
| `class-variance-authority` | 0.7.0 | Apache-2.0 |
| `classnames` | 2.5.1 | MIT |
| `clsx` | 2.0.0 | MIT |
| `framer-motion` | 11.16.0 | MIT |
| `gray-matter` | 4.0.3 | MIT |
| `lucide-react` | 0.379.0 | ISC |
| `motion` | 11.16.0 | MIT |
| `next` | 16.3.5 | MIT |
| `next-intl` | 4.14.5 | MIT |
| `react` | 18.3.1 | MIT |
| `react-dom` | 18.3.1 | MIT |
| `react-globe.gl` | 2.27.2 | MIT |
| `react-hook-form` | 7.51.4 | MIT |
| `react-stacked-center-carousel` | 1.0.14 | MIT |
| `react-toastify` | 10.0.5 | MIT |
| `remark` | 15.0.1 | MIT |
| `remark-html` | 16.0.1 | MIT |
| `sass` | 1.82.0 | MIT |
| `sharp` | 0.35.4 | Apache-2.0 |
| `tailwind-merge` | 2.3.0 | MIT |
| `tailwindcss-animate` | 1.0.7 | MIT |
| `three` | 0.165.0 | MIT |
| `zod` | 3.23.8 | MIT |
| `zustand` | 4.5.2 | MIT |

## Directly chosen development dependencies (16)

Build tooling only. Not part of the served website.

| Package | Version | Licence |
|---|---|---|
| `@types/aos` | 3.0.7 | MIT |
| `@types/node` | 20.17.6 | MIT |
| `@types/react` | 18.3.12 | MIT |
| `@types/react-dom` | 18.3.0 | MIT |
| `@typescript-eslint/eslint-plugin` | 7.9.0 | MIT |
| `eslint` | 8.57.0 | MIT |
| `eslint-config-airbnb` | 19.0.4 | MIT |
| `eslint-config-next` | 15.5.25 | MIT |
| `eslint-config-prettier` | 9.1.0 | MIT |
| `eslint-plugin-prettier` | 5.1.3 | MIT |
| `eslint-plugin-tailwindcss` | 3.17.0 | MIT |
| `postcss` | 8.5.23 | MIT |
| `prettier` | 3.2.5 | MIT |
| `prettier-plugin-tailwindcss` | 0.5.14 | MIT |
| `tailwindcss` | 3.4.3 | MIT |
| `typescript` | 5.6.3 | Apache-2.0 |

## Licence distribution (all 663 components)

| Licence | Components |
|---|---|
| MIT | 521 |
| ISC | 51 |
| Apache-2.0 | 35 |
| BSD-2-Clause | 13 |
| Apache-2.0 AND MIT | 11 |
| LGPL-3.0-or-later | 10 |
| BSD-3-Clause | 5 |
| BlueOak-1.0.0 | 4 |
| Apache-2.0 AND LGPL-3.0-or-later | 3 |
| Unlicense | 2 |
| Apache-2.0 AND LGPL-3.0-or-later AND MIT | 1 |
| Python-2.0 | 1 |
| MPL-2.0 | 1 |
| CC-BY-4.0 | 1 |
| CC0-1.0 | 1 |
| NOASSERTION — package declares no license | 1 |
| 0BSD | 1 |
| (MIT OR CC0-1.0) | 1 |

Everything is a recognised open-source licence. The two entries worth a note:

- **LGPL-3.0-or-later (14 components)** — the prebuilt `libvips` image-processing binaries shipped
  by `sharp`, used for image optimisation. LGPL obligations attach to *distributing* software; a
  server-side web application does not distribute these binaries to visitors, and they are used
  unmodified and dynamically linked. No source-disclosure obligation arises.
- **NOASSERTION (1 component)** — `three-fatline@0.7.0` declares no licence at all. It is an
  indirect dependency (`react-globe.gl` → `three-globe` → `three-fatline`) behind the globe
  animation, by the same author as its parent package, so this appears to be an oversight upstream
  rather than a deliberate restriction. Flagged for a decision rather than presented as resolved.

## Regenerating this inventory

```bash
npx @cyclonedx/cyclonedx-npm --output-file sbom.cyclonedx.json
```
