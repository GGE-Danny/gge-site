# GGE Site — Design & Positioning Review (2026-07-24)

Reviewer pass over the current working tree (all of Antigravity's pivot work is present but **uncommitted** — nothing has landed in git yet; last commit is `e0dda9e`). Reviewed against real rendered output at 1440px and 390px (headless Chromium), plus a production build.

---

## 1. VERDICT

Not shippable yet, but closer than it looks. The single worst fact: **`npm run build` fails** — the site does not compile, because `TeamSection.tsx` passes an `onError` handler to `next/image` from a Server Component. Beyond that, the review found a cluster of positioning/honesty defects concentrated in three files (`layout.tsx` metadata still says "A technology company", the hero dilutes "Kingdom first" into reliability-speak, and `ExperienceSection` carries several unapproved scale claims while **missing the one approved claim**), plus a TeamSection that fabricates two "Coming Soon" team members. The craft foundation underneath is genuinely good — the spacing rhythm is consistent (`py-28 md:py-36` everywhere), the type scale is coherent, and the `/royal-marketplace` page is the best thing on the site and close to the Stripe bar. The homepage hero image treatment does not hold that bar, and the page's dark-section palette is fragmented across three different near-blacks. Fix the blockers, apply the top four elevations, and this is a site to be proud of.

---

## 2. BLOCKERS — must fix before ship

### B1. The build is broken — `onError` in a Server Component
- **File:** `components/Home/TeamSection.tsx:49-52`
- **What's wrong:** `TeamSection` has no `"use client"` directive, so it's a Server Component; the `onError` prop on `<Image>` is a function and cannot be serialized. `next build` fails prerendering `/` with *"Event handlers cannot be passed to Client Component props"*. Verified: build exits 1. Additionally `/public/team/` does not exist, so all three photos 404 (visible broken-image icons and console 400s at runtime).
- **Directive:** Delete the `onError` handler entirely — do not convert the whole section to a client component for it. Handle the missing-photo case with a small dedicated client component:
  1. Create `components/Home/TeamPhoto.tsx` with `"use client"`. It takes `{ src, alt, name }`. It renders the `<Image>` (same classes/`sizes` as now); on error (`useState` flipped in `onError`) it instead renders a `div` filled `bg-slate-800` with the member's initials centered in `text-[#E5B84F] font-medium text-3xl tracking-wide` (derive initials from `name`). Note: the 400 from `/_next/image` does fire `onError` in a client component, so this works — but test it once with a deliberately missing file before considering it done.
  2. Create `/public/team/` and add Daniel's headshot as `daniel.jpg` (1:1 crop). If no new headshot is available, crop `/public/danTheMan.jpeg` square as an interim (see Open Question Q5).

### B2. Site metadata still says "A technology company"
- **File:** `app/layout.tsx:26-28`
- **What's wrong:** `title: "GGE — A technology company, Kingdom first"` is the exact pre-pivot framing, in the most visible string on the site (browser tab, search results, link unfurls). The description leads with "GGE builds the infrastructure…" — tech-first, and "Kingdom first" used as a slogan, both against settled positioning.
- **Directive:** Replace with:
  ```ts
  title: "GGE Enterprise — We run your operations. You run the business."
  description: "GGE is a service company. We run the complete operating engine for retail businesses — Royal Inventory and Gendal, the Total Retail Engine — starting in Gambian retail."
  ```
- Also: `package.json` `"name"` is still `"ericport"` — rename to `"gge-site"`.

### B3. Hero dilutes "Kingdom first" into reliability-speak
- **File:** `components/Home/Hero.tsx:31`
- **What's wrong:** "Built on a Kingdom-first commitment to reliability" is precisely the dilution the positioning forbids — it converts the faith statement into a reliability adjective. The headline itself ("We run your operations. You run the business.") is strong: promise-first, short, and the run/run mirroring is rhetorical muscle, not repetition. Keep it — do not churn the headline.
- **Directive:** Replace the supporting paragraph with:
  > "GGE runs the complete operating engine for ambitious businesses — from stockroom to storefront — and absorbs the complexity so you can focus on growth. Kingdom first: we seek the kingdom of God before anything we build."
  Two sentences, faith statement last and unadorned. Do not add iconography, bolding, or color to the Kingdom-first sentence.

### B4. ExperienceSection: unapproved scale claims present, the approved claim missing
- **File:** `components/Home/ExperienceSection.tsx`
- **What's wrong:** The ONE approved scale claim (GTWorld Gambia platform processes "tens of millions of dollars in transaction volume annually") appears nowhere. Instead there are several unapproved/hype claims:
  - Line 31: "secures and processes transactions **for millions**" — fabricated scale.
  - Line 35: "**thousands of daily users**" — unapproved number.
  - Line 39: "**major corporate institutions rely on**" — unearned trust claim.
  - Line 50: "**high transaction volumes with zero compromise**" — hype.
  - Line 70: "**bulletproof** banking and fintech systems" — hype.
- **Directive:** Exact replacements:
  - Line 31 (GTBank `summary`): "Building and maintaining mobile and corporate banking infrastructure for GTBank, where uptime and accuracy are non-negotiable."
  - Line 35 (GTWorld Gambia `detail`): "Delivered the mobile banking infrastructure for the Gambian subsidiary — the platform processes tens of millions of dollars in transaction volume annually." *(This wording is approved verbatim — platform-attributed, dollars, annually. Do not restyle it.)*
  - Line 39 (Corporate Banking `detail`): "Built financial management tooling that GTBank's corporate clients use for daily treasury and operational work."
  - Line 50 (Cayor `summary`): "Engineered fintech platforms where reliability and data integrity came first."
  - Line 70 (section intro): "Daniel's history of building and running banking and fintech systems — work where uptime and accuracy are non-negotiable."
- **Data inconsistency, same file:** Coders Clutch has `period: "Present", current: true`; GTBank has `period: "Jun 2024 — Present", current: false` — so two roles read "Present" but only one is styled as current, and Coders Clutch shows no start date at all. Needs Daniel's answer (Open Question Q1) before final wording; render whatever the truth is consistently (one `current` treatment, every role with a real start date).

### B5. TeamSection fabricates team members and team size
- **File:** `components/Home/TeamSection.tsx:10-21, 33`
- **What's wrong:** Two "Coming Soon" members with invented roles ("Operations Lead", "Product Design") are fabricated people; the subhead "A dedicated team of operators, engineers, and problem solvers" claims a plural team the company doesn't have. This is the exact "fabricated plural" defect, and it renders as three broken-image tiles ("Portrait of Coming Soon" alt text visible at 390px). The section's job was to make the real size visible.
- **Directive:**
  - Reduce `teamMembers` to the single real entry (Daniel, "Founder & Lead Engineer", `/team/daniel.jpg`). Keep the array/data-driven structure — it is genuinely count-agnostic and correct to keep.
  - Replace the subhead (line 33) with: "GGE is founder-led. This is who answers for the promise today — the team grows as the work does."
  - Grid: change `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4` → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`. At 4 columns, 3 members leaves a permanently dead right column; at 3 columns the grid resolves cleanly for 1, 3, 5, 6, and 7 members (5 → 3+2, acceptable; revisit 4-col only when the team passes 4). With a single member, one card in a 3-col track at `max-w-6xl` is well-proportioned (~352px) — do not center or enlarge it.
  - Alt text: `Portrait of ${member.name}` is fine once fabricated members are gone.

### B6. Dead navigation anchor
- **File:** `components/Home/Navbar.tsx:24-28`
- **What's wrong:** "How we build" links to `/#capabilities`; no element with `id="capabilities"` exists anywhere (the section is now `id="how-we-work"`). Clicking it silently does nothing. The label "How we build" is also build/tech framing.
- **Directive:** Change the item to `label: "How we work"`, `description: "Ownership, reliability, and how we deliver"`, `href: "/#how-we-work"`.

### B7. "Kingdom first" principle in How-we-work is diluted
- **File:** `components/Home/TechStack.tsx:16-19`
- **What's wrong:** "Our work is anchored in a commitment to honest dealing, service, and excellence" is generic values-speak — the same dilution as B3. Any consultancy could publish it.
- **Directive:** Replace the description with: "We seek the kingdom of God before our own — which, in daily work, means honest records, honest dealing, and promises kept." Keep it fourth in the list; no styling changes.

### B8. Accessibility: invisible focus ring on dark surfaces; sub-AA text contrast
- **Files:** `app/globals.css:229-236`, `components/Home/ExperienceSection.tsx`, `components/Marketplace/MarketplacePage.tsx`
- **What's wrong:**
  - `globals.css` applies `outline-ring/50` to `*` — that forces every focus outline to near-black at 50% opacity. Verified via keyboard test: computed outline is `rgba(10,10,10,0.5)` — effectively invisible on the transparent navbar over the dark hero and on all dark sections. (Keyboard behavior itself is good: dropdowns open on focus, menu items are tabbable, Escape closes.)
  - Small metadata text fails AA on dark: `text-white/40` on `slate-900` ≈ 3.7:1 (period text `ExperienceSection.tsx:90`, role eyebrow line 104), `text-white/35` legend on the marketplace hero ≈ 3.3:1 (`MarketplacePage.tsx:110`). AA for small text needs 4.5:1.
- **Directive:**
  - In `globals.css`, remove `outline-ring/50` from the `* { … }` rule (note there are two duplicate `@layer base` blocks at lines 218-225 and 229-236 — merge them into one while there). This restores the browser's adaptive default focus ring. Then add explicit rings where brand consistency matters: on Navbar links/buttons add `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400`.
  - Adopt one rule on dark sections: **no text below `white/60` at sizes under 16px.** Concretely: `text-white/40` → `text-white/60` (ExperienceSection lines 90, 104), `text-white/50` → `text-white/60` (line 114), `text-white/35` → `text-white/55` (MarketplacePage line 110 — a11y fix only; touch nothing else on that page).

### B9. Contact form silently discards the email field
- **File:** `app/talk/page.tsx:19-26`
- **What's wrong:** The form requires an email, then never uses it — the mailto body includes only name and message. A visitor's typed reply address is dropped.
- **Directive:** Include it: `const bodyContent = \`Name: ${name}\nEmail: ${formData.email}\n\n${message}\`;`

---

## 3. CRAFT ELEVATIONS — ranked by impact

### E1. Hero image treatment (the biggest visual win)
- **File:** `components/Home/Hero.tsx:8-18`
- **Current state:** `opacity-60 mix-blend-overlay` against `bg-slate-900`, then two stacked gradients on top. Verified at 1440px: the eagle is nearly invisible — the top half of the viewport is featureless near-black murk. This is neither a confident photograph nor a clean abstract field; it reads as a scrim over nothing, and it's the first thing every visitor sees.
- **Directive:** Commit to the photograph. On the `<Image>`: remove `mix-blend-overlay`, set `className="object-cover object-[70%_35%] opacity-80"` (puts the eagle's head in the upper-right third, clear of the left-anchored text). Replace the two overlay divs with exactly two gradients:
  1. `bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-slate-950/25` (legibility floor for the bottom-anchored text)
  2. `bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent` (left text column protection, lets the right side breathe)
  White-on-image contrast stays safe because the text block sits over the darkest corner of both gradients. If, after this, Eagle.jpg still looks stocky rather than iconic, the fallback direction is Q4 — don't iterate endlessly on scrim values.

### E2. Unify the dark-section palette
- **Files:** `components/Home/TeamSection.tsx:25`, `components/Home/ExperienceSection.tsx:62`
- **Current state:** Three different dark families on one page: Team `#111827→#1E293B` (blue-navy), Experience `bg-slate-900` (`#0F172A`), footer/marketplace `gge-coal` (`#131714`, green-black). Adjacent dark sections visibly mismatch.
- **Directive:** Team's gradient is approved spec — leave it. Change Experience to `bg-[#111827]` and its `border-t border-slate-800` to `border-[#1E293B]`, so Team and Experience read as one navy family. `gge-coal` remains reserved for the footer and marketplace hero/status bands (its green-black is the brand's "coal", distinct on purpose).

### E3. Page rhythm / section order
- **File:** `app/page.tsx:12-18`
- **Current state:** white → navy (Team) → cream (verse) → navy (Experience) → white (How we work) → coal footer. Verified in the full-page capture: it zebra-stripes — the verse is sandwiched between two dark slabs, and "How we work" dangles after Experience as a stray white block.
- **Directive (pending Q3 approval):** Reorder to `Hero → MarketplaceTeaser → ProfileSection → TechStack ("How we work") → TeamSection → ExperienceSection → FoundersNote`. Effect: the two navy sections sit adjacent (Team's gradient ends at `#1E293B`, Experience picks up `#111827` — with E2 this becomes one continuous dark passage), the light sections group at the top, and the verse gets true stillness as the last thing before the footer. No section-internal changes required.

### E4. Eyebrow color consistency
- **Files:** `ProfileSection.tsx:11`, `TeamSection.tsx:28`, `ExperienceSection.tsx:65`, `TechStack.tsx:27`
- **Current state:** The teaser and marketplace pages use emerald eyebrows (`text-gge-emerald` / `text-emerald-400/80`); every homepage section uses gray (`text-slate-500` / `text-slate-400`). The site's one accent is being used inconsistently — this is exactly where sparing emerald belongs.
- **Directive:** Light sections: `text-gge-emerald`. Dark sections: `text-emerald-400/80`. Exception: TeamSection keeps its approved single-gold-accent scheme — its eyebrow stays `text-slate-400` (emerald inside the gold section would break its one-accent rule).

### E5. Codify the h2 system (stop the weight drift)
- **Current state:** Scale is consistent (`text-3xl md:text-5xl tracking-tight leading-[1.1]` everywhere — good), but weight drifts: teaser/marketplace use `font-light` with a `font-medium` emphasis span; all homepage sections use flat `font-medium`.
- **Directive:** Adopt the light-with-medium-emphasis pattern as the house style wherever the headline contains an emphasizable phrase: "The people behind the **promise**.", "The **track record** behind GGE", "**Reliability**, as a service" (also: add that comma — it sharpens the claim). Leave short labels ("Who we are") as flat `font-medium`. This makes the marketplace page's signature move the site-wide voice.

### E6. Hero CTA row alignment
- **File:** `components/Home/Hero.tsx:41-46`
- **Current state:** "See how we deliver" has `border-b pb-1`; "Partner with us" doesn't, so its baseline floats ~4px high of its neighbor (visible at 1440px).
- **Directive:** Add `border-b border-transparent pb-1` to the "Partner with us" link.

### E7. Small `fill` images lack `sizes`
- **Files:** `Navbar.tsx:101` (36px logo), `ExperienceSection.tsx:83` (40px logos), `MarketplaceTeaser.tsx:53` (40px RI logo), `Footer.tsx:82` (28px eagle)
- **Current state:** `fill` without `sizes` defaults to `100vw` — the browser downloads desktop-width renditions for 40px chips.
- **Directive:** Add `sizes="40px"` (or the actual rendered size) to each. The hero image and portrait already have correct `sizes`/`priority`; no change there.

### E8. Experience logo chips
- **File:** `components/Home/ExperienceSection.tsx:82`
- **Current state:** Raw white squares (`bg-white p-1 rounded-md`) sitting on navy — they read pasted-on (verified in section capture; the Coders Clutch mark nearly fills the chip edge-to-edge).
- **Directive:** `rounded-lg bg-white p-1.5 ring-1 ring-white/10` — a touch more inset and a hairline seat.

---

## 4. APPROVED — do not churn

- **FoundersNote.tsx** — exactly right. The verse alone, Fraunces italic, cream field, no motion. Verified in render: it is the stillest moment on the site. Untouchable.
- **MarketplacePage.tsx** — the best page on the site and the closest to the Stripe bar: the dual radial brand glows in the hero, the flow-line with owner dots, the purple band with *real* screenshots and the "Actual product interface" caption, the gendal-thread tricolor seams, and the status band's honesty ("this page is the work, not the storefront"). Only the B8 contrast touch-up is permitted here.
- **MarketplaceTeaser.tsx** and **IntroOverlay.tsx** — approved as-is (per prior sign-off; nothing found that changes that).
- **Hero headline** — "We run your operations. You run the business." Keep verbatim.
- **Spacing rhythm** — `py-28 md:py-36` is applied consistently across every section, with FoundersNote's `py-40/60` as an intentional exception. This is a real system; preserve it in any new section.
- **"How we work" principles 1–3** — not filler. "We run the infrastructure, handle the uptime," "real stock and real money," and the named hard problems (inventory synchronization, cross-channel sales, marketplace integration) are specific to GGE and pass the any-agency test. Only #4 changes (B7).
- **Navbar interaction model** — scroll-aware transparency, solid-on-open, Escape-to-close, focus-opens-menu: all verified working. Only B6 (dead link) and B8 (focus ring) apply.
- **TeamSection structure** — the data-driven array, 1:1 aspect, gold-role/off-white-name hierarchy, and the approved navy gradient are all right. The defects are content (B5) and the fallback mechanism (B1), not the design.
- **Reduced motion** — `prefers-reduced-motion` is respected in the intro, wordmark animations, and smooth-scroll. Framer transitions are short opacity/translate fades (0.16–0.25s) — within the "warm and quick" bar.

## 5. OPEN QUESTIONS — need your call

- **Q1 — Experience dates:** Coders Clutch shows only "Present" (no start date) and GTBank also reads "Jun 2024 — Present" — are both roles genuinely concurrent and current? Give Antigravity: (a) Coders Clutch start month/year, and (b) which role(s) should carry the green "Present" treatment.
- **Q2 — Team section with one member:** Ship it founder-only with the honest subhead (B5, my recommendation — it makes the real size visible, which is the section's point), **or** hold TeamSection off the page until there are ≥2 real members?
- **Q3 — Section reorder (E3):** Approve the reorder (verse last, darks adjacent), **or** keep the current order and accept the zebra rhythm?
- **Q4 — Hero art direction if E1 isn't enough:** If the lightened Eagle.jpg still reads stock after E1, the fallback is to drop the photo and adopt the marketplace hero's language (coal field + soft radial emerald/brand glows, eagle present only as the small mark). Pre-authorize that fallback, or review E1 first?
- **Q5 — Daniel's team headshot:** Supply a real 1:1 headshot for `/public/team/daniel.jpg`, **or** approve an interim square crop of the existing `danTheMan.jpeg`?
