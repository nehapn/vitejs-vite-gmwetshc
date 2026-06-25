# TasteSignal

**Cultural intelligence for brands that move first.**

TasteSignal is a trend and taste prediction platform that detects emerging cultural signals 8–12 weeks before mainstream adoption. It analyzes weak signals across social media, fashion, film, music, interiors, and consumer behavior — then translates them into actionable brand strategy.

This repository is a **frontend mockup** — a fully clickable, polished SaaS dashboard built to demonstrate the product vision. No backend, no API calls, no real data processing. All data is mock.

---

## What the Mockup Demonstrates

| Screen | Route | What It Shows |
|--------|-------|---------------|
| **Dashboard** | `/` | Signal overview — ticker, stats, featured trend, top signals grid, cultural insight panel |
| **Emerging Trends** | `/emerging` | Filterable/sortable trend discovery — category, maturity, velocity filters |
| **Trend Detail** | `/trend/:id` | Deep dive — signal gauge, maturity curve, trajectory chart, cultural drivers, cross-cultural evidence, platform breakdown, demographics, brand playbook, fatigue risk |
| **Insight Report** | `/trend/:id/report` | AI-generated strategic report — executive summary, consumer psychology, product ideas, campaign ideas, 90-day action plan (mock generation animation) |
| **Taste Map** | `/taste-map` | Cultural signal scatter plot — confidence vs. velocity, quadrant positioning, click-to-inspect |
| **Brand Report** | `/report` | Opportunity brief — top 5 ranked opportunities, timing matrix, maturity distribution, risk watch list |
| **Methodology** | `/methodology` | 7-stage AI pipeline explanation — business layer + expandable technical detail |
| **Watchlist** | `/watchlist` | Saved trends (mock) |

### Key interactions
- Click any trend card → opens detail page
- Category/maturity filters on Emerging Trends → instant grid re-render
- Search bar → filters trends by name and description
- "Generate Insight Report" on any trend → mock AI generation animation → 10-section strategic report
- Scatter plot dots on Taste Map → click to inspect in sidebar
- "Under the Hood" accordions on Methodology → reveal technical architecture

---

## Run on StackBlitz (no install needed)

1. Go to [stackblitz.com](https://stackblitz.com)
2. Click **"Upload folder"** or start from the Vite React template
3. Upload the entire `tastesignal` folder
4. StackBlitz reads `package.json` and installs dependencies automatically
5. The app runs in-browser — no local Node.js required

Or fork a Vite template directly: [stackblitz.com/fork/vite-react](https://stackblitz.com/fork/vite-react) and replace the files.

---

## Run Locally

Requires [Node.js](https://nodejs.org) (v18+).

```bash
cd tastesignal
npm install
npm run dev
```

Opens at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Charts | Recharts |
| Icons | Lucide React |
| Routing | React Router v6 |
| Fonts | Lora (serif headings) + Inter (body) via Google Fonts |
| Data | Static JSON — no backend |

---

## Mock Data vs. Production Reality

| What You See | Mock (this repo) | Production (what it would be) |
|-------------|-------------------|-------------------------------|
| **12 trends** | Hand-curated, static JSON | ML-detected clusters from live platform data |
| **Signal strength scores** | Editorially assigned 0–100 values | Computed from cross-platform signal volume + engagement normalization |
| **Growth velocity** | Static percentages | Real-time second-derivative of signal volume over rolling windows |
| **Sparkline charts** | Hardcoded 14-point arrays | Time-series from platform API ingestion (daily/hourly) |
| **Platform breakdown** | Hardcoded percentage splits | Actual API data from TikTok, Pinterest, Instagram, Google Trends, Reddit |
| **Demographics/geography** | Hardcoded distributions | Inferred from platform analytics + audience modeling |
| **Cultural drivers** | Written by hand | LLM-generated (RAG pipeline with cultural knowledge base) |
| **Adjacent signals** | Curated cultural references | Automated cross-domain signal detection via multimodal embeddings |
| **Insight reports** | Template-composed from trend fields | Fully LLM-generated strategic reports (Gemini 2.5 Pro) |
| **Taste Map positions** | Derived from signal/velocity scores | UMAP projection of 512-dim CLIP embedding space |
| **Maturity predictions** | Editorial timeline estimates | Bass diffusion model + temporal CNN forecasting |
| **Opportunity scores** | Hand-assigned 0–100 | Weighted ensemble: signal strength, velocity, competitive whitespace, fatigue inverse, category fit |

---

## Project Structure

```
src/
├── main.jsx                     # Entry point
├── App.jsx                      # Route definitions
├── index.css                    # Tailwind directives + custom styles
├── data/
│   └── trends.json              # 12 mock trends with full metadata
├── utils/
│   └── helpers.js               # Color maps, formatters, filters, sorters
├── components/
│   ├── Layout.jsx               # Sidebar + TopBar + Outlet wrapper
│   ├── Sidebar.jsx              # Navigation
│   ├── TopBar.jsx               # Search + notifications
│   ├── TrendCard.jsx            # Reusable trend card (used on 4 pages)
│   ├── SparklineChart.jsx       # Recharts area chart wrapper
│   ├── SignalGauge.jsx          # SVG radial progress ring
│   ├── TasteMaturityCurve.jsx   # 5-stage maturity track
│   ├── StatCard.jsx             # Metric card
│   └── CategoryPill.jsx         # Colored category tag
└── pages/
    ├── Dashboard.jsx            # Home
    ├── EmergingTrends.jsx       # Discovery + filters
    ├── TrendDetail.jsx          # Single trend deep dive
    ├── InsightReport.jsx        # AI-generated report
    ├── TasteMap.jsx             # Cultural signal scatter
    ├── BrandReport.jsx          # Opportunity brief
    ├── Methodology.jsx          # AI pipeline explainer
    ├── Watchlist.jsx            # Saved trends
    └── Settings.jsx             # Placeholder
```

---

## Design Decisions

- **Light mode with warm off-white** (#FAFAF8) — editorial intelligence tools (WGSN, BoF, Bloomberg) use light backgrounds. Dark mode reads as generic SaaS.
- **Serif + sans typography** — Lora for headings (editorial authority), Inter for body (clean readability). Two-font hierarchy creates premium feel.
- **Gold accent** (#C8956C) — signals confidence, opportunity, and premium positioning without being garish.
- **No real images** — avoids copyright issues and keeps the focus on data and narrative.
- **Template-composed reports** — `generateReport()` in InsightReport.jsx composes report sections from trend data fields, so every trend gets a unique but consistent report.

---

## License

This is a product concept mockup. Not open source. All rights reserved.
