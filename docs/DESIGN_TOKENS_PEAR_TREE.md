# PearTree.pro — Design Tokens Baseline

## 1. Color direction

### Brand
- Pear Green 900: #163A1B
- Pear Green 800: #245326
- Pear Green 700: #2F6B2B
- Pear Green 600: #4A8F2A
- Pear Green 500: #6FAE2E
- Pear Lime 400: #9BCC3B
- Pear Lime 300: #C1DF63

### Gold
- Gold 600: #D99B16
- Gold 500: #F0B629
- Gold 400: #F5C64E

### Neutral / cream
- Cream 50: #FFFDF5
- Cream 100: #FBF7E8
- Surface: #FFFFFF
- Border: #E6E8DF
- Text: #173019
- Muted: #667265

### Semantic
- Success: green token, not brand green by default;
- Warning: amber;
- Error: red;
- Info: blue.

Exact accessibility-safe semantic palette is finalized during implementation.

## 2. Typography

Recommended direction:
- Display/brand: elegant serif or high-character display face;
- Product UI: modern sans-serif.

Production font requirements:
- Polish diacritics;
- variable font preferred;
- strong readability;
- self-hosting or privacy-safe delivery preferred;
- fallback stack defined.

Suggested hierarchy:
- Display XL: 56–72
- H1: 40–52
- H2: 30–36
- H3: 22–28
- Body: 16–18
- Small: 13–14
- UI label: 13–15

## 3. Radius
- xs: 8
- sm: 12
- md: 16
- lg: 24
- xl: 32
- pill: 999

## 4. Spacing
Base 8px scale:
4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96.

## 5. Shadows
- subtle card;
- elevated dropdown;
- dialog;
- highlighted CTA.

Avoid large dark shadows.

## 6. Gradients
Allowed:
- green -> lime;
- cream -> white;
- green -> deep green for premium panels.

Use gradients sparingly in data-heavy UI.

## 7. Motion
- hover/focus: 120–180ms;
- sheets/dialogs: 180–240ms;
- page/state transitions: 180–300ms.

Respect reduced-motion.

## 8. Iconography
Use one consistent icon family.
Pear/leaf illustrations are brand assets, not replacements for functional icons.
