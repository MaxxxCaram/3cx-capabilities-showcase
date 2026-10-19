---
name: Telemetry Dark Glass
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#23b2ec'
  on-tertiary-container: '#00415a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  metric-display:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  metric-display-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: -0.02em
  metric-sub:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 3rem
---

## Brand & Style

This design system elevates enterprise Unified Communications and 3CX PBX intelligence into an ultra-precise, real-time command cockpit. It caters to call center operators, telecom administrators, IT leaders, and customer experience directors who monitor high-velocity voice traffic, agent queues, and mission-critical SLAs.

The visual direction fuses **Dark Mode Minimalism** with **Tactile Glassmorphism**:
- Deep obsidian and charcoal backdrops evoke depth, focus, and reduced eye fatigue during extended NOC/call-center shifts.
- Vivid electric cyan, sky blue, and radiant emerald indicators pierce through the dark layers, providing instantaneous telemetry scanning and critical status awareness.
- Translucent panels, refined borders with light-bleed accents, and high-legibility tabular metrics replace outdated, legacy PBX tables with a contemporary, high-performance command center.
- Full RTL and bidirectional spatial logic natively supports Hebrew and English interfaces without disrupting visual balance or telemetry hierarchy.

## Colors

The palette is engineered for high data-density contrast in dark telemetry environments. Surfaces leverage graded charcoal-navy shades to establish stacking order, while saturated neons denote live activity, call performance, and system health.

### Surface Architecture
- **Canvas Base:** `#0b0f19` (Void Navy) — the lowest visual plane.
- **Surface Elevation 1:** `#111827` (Deep Slate Slate) — primary panel backgrounds and side nav.
- **Surface Elevation 2 / Glass Container:** `#1e293b` (Muted Steel Slate) with 60–80% opacity and backdrop blur for telemetry cards, widgets, and modal dialogs.
- **Border / Stroke Base:** `#334155` at 40% to 60% opacity; selected or hovered states activate an ambient `#06b6d4` stroke.

### Telemetry Accents & Semantic Roles
- **Primary Accent (`#06b6d4` Electric Cyan):** Active tabs, primary interactive triggers, live line status, and selected queue filters.
- **Secondary Accent (`#10b981` Emerald Green):** Healthy call thresholds, answered calls, active agent availability, and SLA targets met.
- **Tertiary Accent (`#38bdf8` Sky Neon):** Outbound streams, auxiliary charts, secondary badges, and link triggers.
- **Deep Navy Base Accent (`#1e3a8a`):** Subdued backdrops for highlighted rows, wallboard headers, and active state pill fills.
- **Critical Alert (`#ef4444` Crimson):** Abandoned calls, queue overflows, dropped calls, and disconnect warnings.
- **Warning (`#f59e0b` Amber):** SLA breach warning, hold time exceeded, agent pause state.

### Typography & Icon Tokens
- **Text High-Contrast:** `#f8fafc` (Slate 50) for primary metrics, titles, and agent names.
- **Text Muted / Secondary:** `#94a3b8` (Slate 400) for labels, timestamps, and column headers.
- **Text Tertiary / Subtle:** `#64748b` (Slate 500) for de-emphasized metadata and helper hints.

## Typography

The typography pairings serve dual functions: rapid optical scanning and zero-jitter tabular precision.
- **Inter** provides exceptional legibility, balanced geometry, and comprehensive Unicode support (including native Hebrew character rendering for bidirectional workflows). It is applied to all headlines, conversational widgets, interface navigation, and primary body content.
- **JetBrains Mono** is utilized for telemetry values, timers (`00:05:23`), queue counts, call IDs, and KPI status badges. Tabular lining numbers guarantee figures never shift horizontal alignment during live second-by-second wallboard updates.

### RTL & Localization Guidelines
When switching the interface to Hebrew (`dir="rtl"`), Inter adapts gracefully with correct vowel points and balance. Numerical metrics (e.g., telephone numbers, IP PBX extensions, durations) must retain an explicit `dir="ltr"` style wrapper to prevent inversion of mathematical order.

## Layout & Spacing

The layout is architected around a fluid telemetry dashboard grid with modular card blocks designed for wallboards, multi-monitor enterprise consoles, and responsive tablet/mobile supervisor screens.

### Grid Framework
- **Desktop (>= 1280px):** 12-column fluid grid with `1.5rem` gutters and `2rem` outer margins. Left-docked collapsed/expandable telemetry rail (64px collapsed, 240px expanded).
- **Tablet (768px – 1279px):** 8-column layout with `1rem` gutters and `1.5rem` margins. Side rail auto-collapses to icon mode or shifts to an overlay drawer.
- **Mobile (< 768px):** 4-column layout with `0.75rem` gutters and `1rem` margins. Metrics and wallboard rows switch from multi-column split cards into vertical stacked swipeable cards.

### Spacing Principles
- Compact vertical rhythms (`space-sm` to `space-md`) preserve high visual density without feeling cramped, maximizing above-the-fold agent visibility.
- Numeric KPI groupings adhere to tight groupings using `space-xs` between numerical digits and descriptive tags.

## Elevation & Depth

Visual hierarchy is communicated through translucent glass surfaces, selective background-blur filters, and luminescence rather than conventional heavy drop shadows.

### Elevation Levels
- **Level 0 (Base Floor):** `#0b0f19` pure solid background. Holds grid canvas and ambient vector underlays.
- **Level 1 (Card & Module Deck):** Solid `#111827` or translucent `rgba(17, 24, 39, 0.75)` with `backdrop-filter: blur(12px)`. Outlined with a fine stroke of `rgba(255, 255, 255, 0.08)`.
- **Level 2 (Active Widget / Hover Card):** `rgba(30, 41, 59, 0.8)` with `backdrop-filter: blur(16px)` and a subtle glow border: `box-shadow: 0 0 16px -2px rgba(6, 182, 212, 0.25)`.
- **Level 3 (Modals, Context Drawers, Flyout Dialers):** `#1e293b` with 95% opacity, `box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.7)`, bounded by `rgba(56, 189, 248, 0.2)`.

### Cyan & Emerald Lighting Rules
Glows and ambient colored drop-shadows are strictly reserved for critical telemetry state indicators:
- Active Ongoing Call: Pulsing subtle cyan glow (`0 0 8px rgba(6, 182, 212, 0.4)`).
- Agent Free / Ready: Crisp emerald ring highlight.
- Overflow / Warning: Amber or crimson rim beacon without obscuring text contrast.

## Shapes

The design system uses a calibrated roundedness level of `2` (0.5rem base radius). This produces clean geometric tech cards that soften the cold nature of raw data while retaining sharp institutional authority.

### Radius Scale Implementation
- **Micro Radii (`rounded-sm` / 0.25rem):** Filter chips, table row tags, queue status indicators, inline badges.
- **Standard Radii (`rounded-md` / 0.5rem):** Form inputs, standard dashboard cards, action buttons, agent telemetry rows.
- **Large Radii (`rounded-lg` / 1rem):** Primary wallboard modules, modal windows, floating action panels.
- **Circular Radii (`rounded-full`):** Agent profile avatars, round call completion gauges, and pulse beacon indicators.

## Components

### Buttons & Interactive Controls
- **Primary CTA:** Background in `#06b6d4` with `#0b0f19` text, `font-weight: 600`, subtle outer cyan glow on hover. Active press drops scale to `0.98`.
- **Secondary / Ghost Action:** Deep navy translucent surface (`rgba(30, 41, 59, 0.6)`) with high-contrast `#f8fafc` text and fine border `rgba(255, 255, 255, 0.12)`. On hover, border transitions to `#38bdf8`.
- **Destructive Action (Drop Call / Force Disconnect):** Crimson stroke `rgba(239, 68, 68, 0.4)`, `#ef4444` text, soft red gradient fill on hover.

### Telemetry Cards & Wallboard Blocks
- **Wallboard Row / Card:** Multi-tier agent container displaying avatar, agent name/extension, answered calls, active talk time, and abandoned counts.
- **Metric Micro-Card:** Frosted surface, bold tabular number (`metric-display`), labeled with uppercase `label-sm` in slate-400. Includes an integrated trend indicator arrow (emerald up / crimson down).

### Status Chips & Queue Badges
- **Online / Idle:** Emerald pill (`bg-emerald-950/40 text-emerald-400 border border-emerald-500/30`) with a 6px glowing dot.
- **On Call / Busy:** Cyan pill (`bg-cyan-950/40 text-cyan-400 border border-cyan-500/30`).
- **Wrap-up / DND:** Amber pill (`bg-amber-950/40 text-amber-400 border border-amber-500/30`).

### Tables & Data Grids
- **Header:** Sticky, muted `#111827`, uppercase `label-sm` typography with interactive column sorting arrows.
- **Row Styling:** Alternating hover highlight using `rgba(255, 255, 255, 0.03)`. Cell divider lines using subtle `rgba(255, 255, 255, 0.05)`.
- **Audio Waveform / Player:** Integrated inline audio scrubbing bar for recorded call playback with electric sky-blue waveform bars.

### Input Fields & Selectors
- **Input Canvas:** `#0b0f19` inset with `1px solid rgba(255, 255, 255, 0.1)`. Focus state illuminates a `#06b6d4` 1.5px ring with zero blur leak. Text rendered in `#f8fafc`.
- **Search & Quick-Filter Bar:** Prefix keyboard shortcut indicator (`/` or `Ctrl+K`) rendered in `JetBrains Mono` inside a muted slate chip.

### Checkboxes & Toggle Switches
- **Toggle Track:** `#1e293b` when inactive; transitions to high-luminance `#06b6d4` when toggled.
- **Toggle Thumb:** Pure `#ffffff` circular node with subtle 2px drop-shadow for tactile depth.