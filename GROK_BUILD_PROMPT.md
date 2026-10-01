# ONE-SHOT PROMPT — Tor Borgen Portfolio
Copy everything below the line into Grok Build. Do not search for assets. They are already in the project folders when this runs:

- Headshot: `public/img/tor.png` (PNG, not jpeg)
- Client-facing CV: `public/cv/CV_General_Eng_Updated.pdf` (copy from the project `cv/` folder if it is not already under `public/cv/`)

Serve the PDF as a static file so `/cv/CV_General_Eng_Updated.pdf` downloads. Target repo: `git@github.com:torbor0x/portfolio.git`.

Canonical identity from resumes (use these facts; do not invent employers, dates, or metrics):

- Name: Tor Borgen
- Location: Norway
- LinkedIn: https://linkedin.com/in/torborgen
- GitHub remote: torbor0x
- X: https://x.com/torbor0x
- Education: Bachelor of IT and Information Systems, University of Agder (UiA), 2016–2019
- Languages: Norwegian (native), English (full professional)
- Courses: Java Essential Training; Foundations of Programming; Android Development Essential Training; Object-Oriented Design

---

Build a production-ready personal portfolio for **Tor Borgen** as a Next.js App Router + TypeScript site, deployable on Vercel with zero extra infra.

## Goal
A professional sales-pitch site that works for both:
- Project / product / TAM / stakeholder roles (Keystone product owner, TPM, Scrum)
- Hands-on tech, integrations, APIs, DevOps, Web3 / Solana engineering (CVM CTO, Muuh tech lead)

The site must feel senior, calm, and credible — not a meme-coin landing page — while still showing that Tor ships on-chain products. Dual positioning is the point: one site that a hiring manager for Product Lead **or** Technical Lead can take seriously.

Hero title (use this):
**CTO · Product & Technical Lead · Web3**

Subtitle:
Hands-on technology leader. Architecture and delivery across Solana products, enterprise integrations, and cloud platforms.

## Stack (do not deviate)
- Next.js (latest stable App Router) + TypeScript (strict)
- Tailwind CSS
- Framer Motion for restrained motion only
- `app/` directory only
- Route Handlers only under `app/api/` if needed
- Static-first. No database. No auth.
- `next.config.ts` ready for Vercel
- `next/image` for headshot and project thumbs
- Headshot is `public/img/tor.png` only. Use that path. Do not look for jpeg/jpg.
- All copy in `lib/content.ts` (typed models for profile, skills, experience, caseStudies, projects, education)
- README with local run + Vercel notes

```
app/layout.tsx
app/page.tsx
app/experience/page.tsx
app/projects/page.tsx
app/api/contact/route.ts   (Contact Me; sends via Resend when server env is set)
public/img/tor.png
public/cv/CV_General_Eng_Updated.pdf
components/
lib/content.ts
```

If the photo is missing, use a monogram “TB” avatar — do not crash the build.

## Visual system
Professional first. Cyan + pink as accent, not neon carnival.

- Background: `#070B12` → `#0B1220`
- Cards: lifted surface, 1px border
- Text: off-white + muted slate
- Cyan `#22D3EE` primary, magenta `#F472B6` secondary
- Inter or Geist + JetBrains Mono for addresses
- Mobile-first, sticky nav, accessible contrast, `prefers-reduced-motion`
- No particle fields, no 3D wallet spam

## Information architecture
1. Nav — TB / Tor Borgen. Work, Skills, Experience, Projects, Contact. Secondary CTA “Download CV” → `/cv/CV_General_Eng_Updated.pdf` (`download` attribute, label “Download CV”). Primary CTA “Let’s talk” → `/#contact`
2. Hero — photo from `public/img/tor.png`, name, dual title, 3-line pitch, skill chips, LinkedIn + X + Download CV button next to the talk CTA
3. Proof strip — four tiles with **real** resume metrics only:
   - 10,000+ daily transactions (CVM)
   - 30% lower distribution costs (CVM)
   - 5+ enterprise integrations / 10+ enterprise clients (Keystone)
   - Platforms modernised: React rewrite, Kubernetes, Azure + GCP
4. Skills — grouped from the resumes (see below)
5. Case studies — career initiatives + the extra delivery stories from the original brief
6. Project grid — 11 live sites
7. Experience timeline — every role below with dates
8. Education
9. Contact

## Pitch (use meaning, polish wording)
Tor Borgen sits between the customer and the codebase. He takes integrations from discovery through documentation, data mapping, roadmap, cost, and delivery — then stays on the line when something breaks. As CTO at CVM Solutions he owns architecture for Solana transaction platforms processing 10,000+ daily transactions. At Keystone.no he was Product Owner and Technical Project Manager for WITSML and enterprise API integrations serving 10+ clients. Earlier he led cloud migration and product recovery at Muuh AS.

Do not invent TVL, headcount, funding, or certifications that are not in the resumes. Do not claim ISO certification; you may say work was designed with documentation, validation, retention, and information-security discipline aligned with ISO 27001 *practices* (the original brief said “ISO 2007” — correct that).

## Skills (from resumes, grouped)
**Leadership & delivery:** Technology strategy, product ownership, technical project management, Scrum / agile, roadmaps, stakeholder alignment, Jira automation, cross-functional delivery

**Customer / TAM:** Technical discovery, requirements from sales and client meetings, incident communication, implementation ownership, service operations

**Integrations & APIs:** REST, Azure APIM, WITSML, oData, enterprise data hubs, Azure Data Lake, Azure Functions, API documentation, data validation and retention

**Engineering:** React, React Native, Next.js, Node.js, TypeScript, PHP/Laravel, REST APIs, MySQL/SQL, Jest, Git

**Web3:** Solana, Web3.js, Solana Pay, Token-2022, RPC, on-chain analysis, smart-contract integrations, wallet / checkout flows

**Cloud & platform:** Azure, Google Cloud, Kubernetes, cloud migration, serverless functions, Key Vault–style secret handling

**Foundation:** Complex troubleshooting, QA, workflow improvement, xDSL/fibre/VoIP/IPTV/networking (NextGenTel), AD/Exchange/Office (IBM / Nordea)

## Experience timeline (exact — put in `lib/content.ts`)

### CVM Solutions — Chief Technology Officer
Oct 2023 – Present · Norway

- Lead full-stack development and technology strategy for high-performance Solana-based transaction platforms; own architecture, delivery, and technical decisions across products and infrastructure.
- Platforms process 10,000+ daily transactions with emphasis on reliability, security, performance, and decentralised product delivery.
- Built and deployed on-chain tools: transaction automation, trading and rank/transaction tooling, token and native-token airdrop systems, Token-2022 tax distribution, and Solana Pay storefronts.
- Designed backend infrastructure and automation pipelines; 30% reduction in token-distribution costs through scalable automation.
- Own technical investigation from requirements through implementation; bridge product, operations, and engineering.

### Keystone.no — Product Owner
Jul 2024 – Feb 2025 · Norway  
(Overlaps CVM; show both — concurrent roles.)

- Owned product vision, delivery roadmap, and stakeholder alignment for API-driven integrations across WITSML, a central data hub, and enterprise APIs.
- Led scoping and development coordination for 5+ integrations delivered on time; improved data accessibility for 10+ enterprise clients.
- Translated client and technical needs into requirements with focus on interoperability, data integrity, security, and scalability.
- Hands-on contribution to solution architecture and delivery.

### Keystone.no — Technical Project Manager
Nov 2023 – Sep 2024 · Norway

- Led cross-functional planning, delivery, and coordination across engineering, data, and client teams.
- Scoped, estimated, and kept multi-stakeholder technical work aligned on priorities, dependencies, and delivery expectations.

### Keystone.no — Technical Lead and Scrum Master
Aug 2021 – Nov 2023 · Norway

- Led engineering delivery and Scrum across teams; introduced Jira automation and workflow improvements for predictability and code quality.
- Directed a React legacy rewrite toward a scalable micro-app architecture; introduced Jest and E2E testing.
- Drove Kubernetes adoption for maintainability and deployment scalability.

### Muuh AS — Technical Lead and Full Stack Developer
May 2019 – Aug 2021 · Norway

- Progressed from React development into technical leadership for core applications, customer-facing integrations, and knowledge transfer.
- Led legacy-system modernisation and cloud migration across Azure and Google Cloud: Azure Functions, APIM, oData, PHP, Node.js, SQL.
- Led a React Native rewrite to address critical NFC issues and recover the product.

### OpenSource UiA — Leadership Team
2018 – Jan 2021

- Open-source initiatives and technical collaboration alongside the IT and information systems degree.

### NextGenTel — Back Office / Advanced Technical Support
Sep 2010 – Oct 2014 · Norway

- Advanced troubleshooting: xDSL, fibre, VoIP, IPTV, networking, webmail, mobile broadband.
- Complex chat and premium-support cases; technical advisor for frontline colleagues.

### NextGenTel — Customer Support
Sep 2009 – Sep 2010 · Norway

- High-volume diagnosis of connectivity, webmail, and home-network issues.

### IBM, Ireland — Assistant Team Lead
Jan 2009 – Aug 2009 · Ireland

- Queue monitoring, reporting, workflow coordination, team support, process improvement for Nordea service operations.

### IBM, Ireland — Technical Support / Quality Assurance
Sep 2007 – Aug 2009 · Ireland

- Support for Nordea users: Active Directory, Exchange, Microsoft Office, mainframe, ATM-related systems; QA contribution.

On the homepage timeline, collapse NextGenTel + IBM into an “Earlier foundation” accordion after Muuh so the page stays scannable. Full list on `/experience`.

## Case studies (required cards)

Write 80–120 words + 4–6 bullets each. Mix resume facts with the original delivery brief.

1. **Solana transaction and distribution platform — CVM Solutions**  
   Full-stack suite: trading/automation, Token-2022 tax distribution, airdrops, Solana Pay commerce. 10k+ daily tx. 30% distribution-cost reduction. Architecture for secure on-chain execution and scalable automation.

2. **Enterprise data hub and WITSML integrations — Keystone.no**  
   Owned delivery lifecycle for WITSML, central data-hub, and custom APIs. Stakeholder alignment, roadmap, feasibility, implementation across engineering, data, and clients. Real-time exchange and operational visibility. Tech: Node.js, Azure APIM, WITSML, REST, Azure Data Lake. 5+ integrations, 10+ clients.

3. **Application and infrastructure modernisation — Keystone.no**  
   React legacy rewrite → micro-apps; Jest + E2E; Kubernetes; Jira automation; Scrum at team scale.

4. **Cloud migration and product recovery — Muuh AS**  
   Azure + GCP; Azure Functions; APIM; oData; SQL; React Native NFC recovery; Linux/app lift mentioned in the original brief as SQL → Azure and Linux servers → cloud instances — include that operational framing if it fits this period.

5. **Integrations from conception to delivery** (original brief)  
   In sales meetings for requirements; explore docs and systems; map data and scope; roadmap, costs, timelines, tasks; follow through delivery; adjust when technical reality changes; spar with engineers on implementation and practical ops.

6. **Stakeholder / TAM ownership** (original brief + Keystone/CVM)  
   Requests, incidents, and communication across orgs. Progress and critical incidents stay visible. Translation layer between commercial promises and engineering capacity.

7. **APIs, documentation, regulated data**  
   APIs where documentation, critical data requirements, retention, and validation are first-class. Government-adjacent / enterprise data handling and ISO 27001-aligned information-security practices. Do not invent a certificate.

8. **Azure serverless and APIM key rotation** (original brief)  
   Functions for small reliable API jobs. Example: APIM key renewal → generate new key → push to consuming apps → store in secure vault.

9. **Serverless product architecture on Vercel** (original brief)  
   Multi-function systems; incremental functions within serverless limits; wallet integration flows optimised without breaking the architecture.

10. **Custom Solana Pay** (original brief)  
    Multiple implementations. Flagship: SDK + on-chain memo so payment can be verified as untampered. Checkout: auto-scan QR for supported wallets + “send to wallet” fallback.

## Live project grid
Thumbnail via `https://image.thum.io/get/width/1200/crop/800/noanimate/{url}` with `remotePatterns` configured; fallback monogram card if the service fails.

Keep tone senior. Do not market volume/bump/rankboost as the hero story; CVM is an on-chain services and product studio.

| Project | URL | Summary |
|---|---|---|
| CVM Solutions | https://www.cvmsolutions.xyz | On-chain services studio: Token-2022 tax distribution, custom Solana development, Solana Pay / wallet-connect storefronts, operational tooling. Tor is CTO and builder of the product surface. |
| $TREMP | https://www.tremp.xyz | Branded meme-coin landing (satirical Tremp). Multi-section narrative, how-to-buy, disclaimer. Fast Web3 front-end. |
| JackpotEx | https://www.jackpotex.fun | Transparent on-chain lottery. Hourly draws, top-100 holder snapshots to gist, ORAO VRF, prize transfer with memo proof, burn-triggered jackpots, public history. |
| Chibis | https://www.chibis.fun | Brand + community site for $CHIBIS. Gallery, CA UX, pastel identity. |
| Chibimon | https://www.chibimon.fun | Pokémon-inspired chibi dex on Solana (Chibimondex) plus related-project strip. |
| ORCA / The Killer Whale | https://www.thekillerwhale.fun | High-atmosphere brand landing. Dark ocean visual system. |
| Skeletor Coin | https://www.skeletorcoin.fun | Character-driven campaign site: video hero, tokenomics/tech/about, gallery. |
| Terminal | https://terminal-next-henna.vercel.app | Terminal-styled Web3 utility UI. Next.js on Vercel. |
| MaxSol Lotto | https://maxsol-site.vercel.app | Hourly lottery product: weights, Token-2022 transfer fee → tax distribution → jackpot wallet, fairness copy. Powered by CVM tax engine. |
| Avatool | https://avatool.vercel.app | In-browser avatar/meme compositor (layers, z-index, upload/download). Signed @TORBOR. Also referenced as CVM custom meme-generator example. |
| VegA$$ | https://vegass.vercel.app | Vegas-themed token + rewards explainer: reflection, jackpot slice, LP/treasury splits. Tax engine via CVM. |

## Contact
https://linkedin.com/in/torborgen · Norway · Open to remote / hybrid conversations for product, TAM, technical lead, and Web3 CTO-shaped roles.

**Download CV button (required):** visible in the hero and again in the Experience section and footer. Link exactly to `/cv/CV_General_Eng_Updated.pdf`. The file is already in the project `cv/` folder as `CV_General_Eng_Updated.pdf` — copy it into `public/cv/` so Next serves it statically. Do not generate a new PDF. `download="Tor_Borgen_CV.pdf"` on the anchor. If the file is missing at build time, still render the button pointing at that path (do not hide it).

`app/api/contact/route.ts` accepts JSON `{ name, email, message }`. The email field is the visitor’s address and is used only as reply-to. The route sends the message with Resend when `RESEND_API_KEY` and `CONTACT_TO` are set on the server. It does not store the message, and it does not publish an inbox address. Primary public contact remains LinkedIn.

## Implementation quality
- Lighthouse-friendly, semantic HTML, skip link, focus states
- Metadata: “Tor Borgen — CTO, Product & Technical Lead”
- Open Graph uses the headshot
- `sitemap.ts` + `robots.ts`
- On-brand 404
- No `any`
- Components: SiteNav, Hero, ProofStrip, SkillGroups, CaseStudyList, ProjectGrid, ExperienceTimeline, Education, Contact, Footer

## After the app works
README:

```
# portfolio
Tor Borgen — CTO, product, integrations, and Web3 engineering.
Next.js · TypeScript · Vercel
```

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:torbor0x/portfolio.git
git push -u origin main
```

`.gitignore` must exclude `node_modules`, `.env*`, `.next`.

## Definition of done
- `npm run build` succeeds
- Homepage dual story is clear in 15 seconds
- Photo renders from `public/img/tor.png`
- Download CV button links to `/cv/CV_General_Eng_Updated.pdf` and the PDF is in `public/cv/`
- All resume roles and dates are accurate
- All 11 project URLs are in the grid
- Case studies cover both Keystone/Muuh/CVM and the original delivery brief
- Cyan/pink professional theme
- Ready for Vercel default Next.js settings
