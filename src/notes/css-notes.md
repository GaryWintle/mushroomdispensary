# CSS Refactoring Field Guide

> Personal notes from a deep-dive refactor session. Add to this as you learn more.

---

## Table of Contents

- [Organization](#organization)
- [Naming](#naming)
- [Efficiency](#efficiency)
- [Semantic HTML](#semantic-html)
- [Accessibility](#accessibility)
- [Questions & To-Dos](#questions--to-dos)

---

## Organization

### Property ordering — outside in

Write properties in this order every time. Think of it as: **where it lives → how it sizes → how it looks → what's inside → how it moves.**

```css
.element {
  /* 1. Position */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  /* 2. Box model */
  display: flex;
  width: 100%;
  padding-inline: var(--sp-04);
  overflow: hidden;

  /* 3. Visual */
  background-color: var(--color-surface);
  border: var(--border-thin);
  border-radius: var(--br-02);

  /* 4. Typography */
  font-size: var(--text-lg);
  color: var(--color-text);

  /* 5. Transitions */
  transition: scale 0.3s ease;
}
```

---

### Comment the why, never the what

A comment should tell the next person something the code can't say itself.

```css
/* ❌ bad — describes what the code already says */
overflow: hidden; /* hides overflow */

/* ✅ good — explains the reason */
overflow: hidden;   /* clips image corners to card border-radius */
position: relative; /* establishes context for absolute icon */
flex: 4 1 0;        /* takes ~2/3 of card width */
```

---

### Delete dead code

Commented-out rules are noise. If it's been there more than a week, it's dead. Git has your back.

```css
/* ❌ delete these */
/* letter-spacing: var(--tracking-semiwide); */
/* align-items: center; */
/* display: none; */
```

---

### Label your breakpoints

Media queries should only contain **what changes** — never repeat unchanged base styles. Always label them.

```css
/* TABLET */
@media (max-width: 900px) { ... }

/* MOBILE */
@media (max-width: 650px) { ... }
```

---

## Naming

### Component-first naming

Every class in a component starts with the component name. Matches the filename. Instantly scannable in DevTools.

```
LocationCard.astro → .location-card-*
ProductCard.astro  → .product-card-*
HeroSection.astro  → .hero-section-*
```

```css
/* ❌ bad — mixed directions, no clear rule */
.text-location {}
.container-hours {}
.hours-time {}

/* ✅ good — component-first, consistent */
.location-card-title {}
.location-card-hours {}
.location-card-time {}
```

---

### Use `--` modifiers for variants

In Astro, `__` (BEM elements) solve a problem Astro's scoping already solves. But `--` modifiers are genuinely useful for variants and states.

```css
.location-card {}            /* base */
.location-card--featured {}  /* variant */
.location-card--compact {}   /* variant */
```

```astro
<div class={`location-card ${featured ? 'location-card--featured' : ''}`}>
```

---

### Name by role, not appearance

Names should survive a redesign. Steal lingo from UI libraries like Radix and shadcn.

| ❌ Avoid | ✅ Use |
|---|---|
| `.text-location` | `.location-card-title` |
| `.location-text-block` | `.location-card-body` |
| `.container-hours` | `.location-card-hours` |

**Common UI lingo to know:**
- `-body` — content area of a card, modal, panel
- `-header` / `-footer` — top and bottom regions
- `-title` / `-subtitle` — beats `-heading` or `-text-x`
- `-media` — images, video, maps
- `-meta` — secondary info like dates, tags, categories

---

### Scoped styles in Astro

Since Astro scopes styles per component, you don't *need* long prefixes for cascade safety — but they're still worth keeping for **DevTools readability** and **codebase search**.

Within a component, simple semantic names are fine:
```css
.title {}    /* clear from context inside LocationCard.astro */
.address {}
.hours {}
```

---

## Efficiency

### Shorthand logical properties

Logical properties support two-value shorthand, just like regular `padding`.

```css
/* ❌ before — 3 lines */
padding-inline-start: var(--sp-08);
padding-inline-end: var(--sp-07);
padding-block: var(--sp-05);

/* ✅ after — 2 lines */
padding-inline: var(--sp-08) var(--sp-07); /* start end */
padding-block: var(--sp-05);
```

---

### Trust inheritance — don't redeclare globals

Before declaring a property, ask: does the global CSS already set this?

```css
/* global.css already sets this on h1-h4 */
h1, h2, h3, h4 {
  font-family: var(--font-display);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

/* ❌ bad — redundant inside an h3 component */
.location-card-title {
  font-family: var(--font-display);      /* already inherited */
  line-height: var(--leading-tight);     /* already inherited */
  letter-spacing: var(--tracking-tight); /* already inherited */
}

/* ✅ good — only what's unique to this component */
.location-card-title {
  font-size: var(--text-2xl);
  color: var(--color-surface-light-text-highlight);
}
```

---

### Tokenize font-variation-settings

Name by role, not values. One change updates everywhere.

```css
/* in tokens */
--fvs-body-heavy:  "wdth" 90, "wght" 950;
--fvs-body-bold:   "wdth" 90, "wght" 800;
--fvs-condensed:   "wdth" 87, "wght" 900;

/* usage */
font-variation-settings: var(--fvs-body-heavy);
```

---

### Use % for position, rem for size

`%` positions scale relative to the parent. `rem` sizes stay consistent. Avoid mixing `px` into position values — it becomes a magic number that won't scale.

```css
/* ❌ bad — mixed units */
top: 15%;
left: -35px; /* magic number */

/* ✅ good — consistent % */
top: 15%;
left: -10%;
```

---

### object-fit zoom pattern

**Container height controls zoom. `object-position` controls pan.** Don't use `scale` + `translate` hacks when you can help it.

```css
.card-image {
  height: 200px;          /* smaller = more zoomed in */
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 70% center; /* pan right, center vertically */
  }
}
```

> **Note:** Astro's `<Image>` component can interfere with `object-position`. If it's not working, `scale` + `translate` is a valid workaround — just comment why.

---

### CSS custom properties as component APIs

For positioning values used across multiple components, use a public/private variable pattern. Borrowed from a Google Chrome engineer's Astro project.

```css
.location-card-icon {
  /* Private: internal logic */
  --_icon-top:   var(--icon-top, 15%);
  --_icon-left:  var(--icon-left, -10%);
  --_icon-right: var(--icon-right, auto);
  --_icon-size:  var(--icon-size, 4rem);

  position: absolute;
  top:   var(--_icon-top);
  left:  var(--_icon-left);
  right: var(--_icon-right);
  width: var(--_icon-size);
}

/* Mobile: only override the public variables */
@media (max-width: 650px) {
  .location-card-icon {
    --icon-top:   -20%;
    --icon-left:  auto;
    --icon-right: -5%;
    --icon-size:  4.5rem;
  }
}
```

- `--_variable` → private, internal implementation (don't touch from outside)
- `--variable` → public API, safe to override per instance or breakpoint

---

## Semantic HTML

### `<address>` for location/contact info

Reset its italic default globally, not per-component.

```astro
<address class="location-card-address">247 West Broadway</address>
```

```css
/* in global reset */
address { font-style: normal; }
```

---

### `<dl>` for key-value pairs

**dl** = Description List, **dt** = Description Term, **dd** = Description Details.

Use whenever you have a label → value relationship. Don't reach for `<p><strong>Label:</strong> value</p>` — that's what `<dl>` is for.

**Good use cases:**
- Store hours
- Product specs
- Recipe metadata (prep time, servings)
- FAQs

```astro
<dl class="location-card-hours">
  <dt class="location-card-schedule">Mon–Wed</dt>
  <dd class="location-card-time">11am–7pm</dd>
  <dt class="location-card-schedule">Thu–Sat</dt>
  <dd class="location-card-time">10am–10pm</dd>
</dl>
```

```css
/* reset browser default dd indent in global */
dd { margin-inline-start: 0; }

/* grid aligns pairs cleanly */
.location-card-hours {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0 var(--sp-03);
  align-items: baseline;
}
```

---

## Accessibility

### Descriptive, dynamic alt text

`alt="location"` tells a screen reader nothing. Use props to make it meaningful — the alt text also becomes the link's accessible name when an image is inside an `<a>`.

```astro
/* ❌ bad */
alt="location"

/* ✅ good */
alt={`Map showing ${cityArea} store at ${address}`}
```

---

### Announce `target="_blank"`

Screen readers don't warn users when a link opens a new tab. Use `aria-label` to tell them.

```astro
<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`View ${cityArea} on map (opens in new tab)`}
>
```

---

### Hide decorative icons

Decorative SVGs injected via `set:html` will be read aloud by screen readers as gibberish. Hide them.

```astro
<div set:html={locationIcon} aria-hidden="true" />
```

---

### `:focus-visible` for keyboard navigation

`:focus-visible` shows the focus ring for keyboard users only — not on mouse click. Add it to every interactive element.

```css
.location-card-image:focus-visible {
  outline: var(--keyboard-focus);
  outline-offset: 3px;
}
```

---

### `prefers-reduced-motion`

Some users get motion sick. Opt them **in** to animation — `no-preference` means they're fine with it.

```css
& img {
  @media (prefers-reduced-motion: no-preference) {
    transition: scale 0.4s ease;
    &:hover { scale: 1.25; }
  }
}
```

---

## Questions & To-Dos

> Use this section to track things you want to look up or revisit.

- [ ] Look into `@layer` for managing CSS specificity at scale
- [ ] Explore container queries as a more powerful alternative to media queries
- [ ] Investigate `@property` for type-safe CSS custom properties

---

*Started: <!-- add date --> — keep adding to this as you learn.*
