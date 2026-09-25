# PearTree.pro — Design Tokens

## Purpose
Translate the visual direction from mockups into reusable implementation tokens.

## Color tokens
```txt
--color-brand-900: #123D22
--color-brand-800: #19512B
--color-brand-700: #246B35
--color-brand-600: #3F8F35
--color-brand-500: #67AE3A
--color-brand-400: #94C94D
--color-brand-300: #B8DC72

--color-pear-500: #C9DF3D
--color-gold-500: #E4B83E
--color-brown-700: #5A3418

--color-cream-50:  #FFFDF5
--color-cream-100: #FAF7E9
--color-sage-100:  #EFF5E8
--color-sage-200:  #E0EBCF

--color-text-900: #17301B
--color-text-700: #344C37
--color-text-500: #6A786B

--color-border: #DFE7D7
--color-danger: #C93D32
--color-warning: #E5A11A
--color-success: #3D8F36
```

Exact WCAG contrast must be verified in implementation.

## Typography
### Brand/display
Serif or editorial display type for hero headings and brand moments.

### Product/UI
Modern neutral sans-serif for:
- navigation;
- forms;
- dashboards;
- cards;
- tables;
- mobile UI.

Recommended model:
- Display: 56/64 desktop, 38/44 tablet, 32/38 mobile
- H1: 40/48
- H2: 32/40
- H3: 24/32
- Body: 16/24
- Small: 14/20
- Caption: 12/16

## Radius
```txt
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 24px
--radius-pill: 999px
```

## Shadow
Soft only.

```txt
--shadow-sm: 0 2px 8px rgba(20,60,30,.08)
--shadow-md: 0 8px 24px rgba(20,60,30,.12)
--shadow-lg: 0 18px 48px rgba(20,60,30,.16)
```

## Spacing
8px grid:
4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96.

## Motion
- 120–180ms micro-state;
- 200–300ms card/overlay transition;
- spring only for optional delightful interactions;
- reduced-motion honored.

## UI density
Public marketplace: airy.
Console: compact but not dense.
Admin tables: efficient, with responsive fallback.
