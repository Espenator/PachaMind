# PachaMind Design Tokens — Flow A (Free Learning Membership)

These tokens power the PachaMind.org free learning experience. Earthy, Andes-inspired, calm and editorial. Mobile-first (390px base, scale to 1440px).

## Color Tokens

| Token name | Hex | Role |
|---|---|---|
| paper-white | #F7F1E7 | Page background / surface base |
| deep-earth | #2F261F | Primary text on light surfaces |
| terracotta | #B7653F | Primary action / accent |
| clay | #8E4E35 | Secondary accent / hover state |
| sage | #7D8B6F | Success / nature accent |
| sky | #8FB6C9 | Info / calm accent |
| stone | #8C8578 | Muted text / borders |
| charcoal | #1D1A17 | Dark surfaces / footer |
| soft-sand | #E6D7C3 | Card / secondary surface |
| mist | #EEF3F1 | Subtle section background |

## Typography Tokens

Headings use a warm editorial serif; UI/body uses a clean humanist sans.

| Token | Size (mobile) | Line height | Weight | Use |
|---|---|---|---|---|
| font-display | 32px | 1.15 | 600 | Page hero headings (serif) |
| font-h1 | 28px | 1.2 | 600 | Screen titles (serif) |
| font-h2 | 22px | 1.25 | 600 | Section headings (serif) |
| font-h3 | 18px | 1.3 | 600 | Card titles (sans) |
| font-body | 16px | 1.5 | 400 | Body copy (sans) |
| font-small | 14px | 1.45 | 400 | Captions / meta (sans) |
| font-label | 13px | 1.4 | 500 | Form labels / tags (sans) |

Desktop (1440px): scale display to 48px, h1 to 36px, h2 to 28px; body stays 16-18px.

## Spacing Scale (4px base)

| Token | Value |
|---|---|
| space-1 | 4px |
| space-2 | 8px |
| space-3 | 12px |
| space-4 | 16px |
| space-5 | 24px |
| space-6 | 32px |
| space-7 | 48px |
| space-8 | 64px |

## Radius Tokens

| Token | Value | Use |
|---|---|---|
| radius-sm | 6px | Inputs, tags |
| radius-md | 12px | Buttons, cards |
| radius-lg | 20px | Featured cards, media |
| radius-full | 9999px | Pills, badges, avatars |

## Shadow Tokens

| Token | Value | Use |
|---|---|---|
| shadow-sm | 0 1px 2px rgba(29,26,23,0.08) | Inputs, subtle lift |
| shadow-md | 0 4px 12px rgba(29,26,23,0.10) | Cards |
| shadow-lg | 0 12px 32px rgba(29,26,23,0.14) | Modals, featured media |

## Usage Notes

- terracotta is the only primary-action color; never introduce neon, purple, or blue SaaS gradients.
- Maintain WCAG AA: deep-earth on paper-white and white on terracotta both pass body-text contrast.
- Use mist/soft-sand to separate sections without hard borders.
- Focus rings use a terracotta outline (2px) on all interactive elements.
- Tokens are additive; do not overwrite existing global tokens. New tokens live in a dedicated tokens layer.

## Tailwind Mapping

Extend `theme.extend.colors` (kebab token -> camel/utility):

```js
// tailwind.config — theme.extend
colors: {
  'paper-white': '#F7F1E7',
  'deep-earth': '#2F261F',
  terracotta: '#B7653F',
  clay: '#8E4E35',
  sage: '#7D8B6F',
  sky: '#8FB6C9',
  stone: '#8C8578',
  charcoal: '#1D1A17',
  'soft-sand': '#E6D7C3',
  mist: '#EEF3F1',
},
borderRadius: {
  sm: '6px', md: '12px', lg: '20px', full: '9999px',
},
boxShadow: {
  sm: '0 1px 2px rgba(29,26,23,0.08)',
  md: '0 4px 12px rgba(29,26,23,0.10)',
  lg: '0 12px 32px rgba(29,26,23,0.14)',
},
fontFamily: {
  display: ['"Source Serif 4"', 'Georgia', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
},
```

Utility examples: `bg-paper-white text-deep-earth`, `bg-terracotta text-paper-white rounded-md`, `font-display`, `shadow-md`.
