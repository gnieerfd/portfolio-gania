---
name: Botanical Portfolio System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4c444b'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#7e747c'
  outline-variant: '#cfc3cc'
  surface-tint: '#735475'
  primary: '#715173'
  on-primary: '#ffffff'
  primary-container: '#8b6a8c'
  on-primary-container: '#fffbff'
  inverse-primary: '#e1bae1'
  secondary: '#5e5e60'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e4'
  on-secondary-container: '#646466'
  tertiary: '#6e536f'
  on-tertiary: '#ffffff'
  tertiary-container: '#886b89'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fed6fe'
  primary-fixed-dim: '#e1bae1'
  on-primary-fixed: '#2b112f'
  on-primary-fixed-variant: '#5a3c5c'
  secondary-fixed: '#e3e2e4'
  secondary-fixed-dim: '#c7c6c8'
  on-secondary-fixed: '#1b1c1d'
  on-secondary-fixed-variant: '#464748'
  tertiary-fixed: '#fbd8fa'
  tertiary-fixed-dim: '#debcdd'
  on-tertiary-fixed: '#29132c'
  on-tertiary-fixed-variant: '#573e59'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  section-padding: 80px
  card-gap: 32px
---

## Brand & Style

This design system is built on a foundation of **Soft Minimalism** with organic, editorial influences. It is specifically tailored for a UI/UX designer's portfolio, aiming to evoke a sense of calm professionalism, creative attention to detail, and approachable elegance.

The visual narrative centers on high-quality whitespace and a "paper-like" digital canvas. To prevent the layout from feeling sterile, the design system introduces organic personality through:
*   **Botanical Accents:** Subtle four-petal flower motifs used as markers or decorative anchors.
*   **Texture:** A pervasive but faint dot grid that provides a technical, "drafting board" feel to the creative work.
*   **Soft Geometry:** Generous corner radii that mirror the friendliness of the floral elements.

## Colors

The palette is monochromatic and sophisticated, relying on the interplay between deep charcoal and varying shades of lavender.

*   **Primary (Lavender):** Used for key brand moments, active states, and decorative floral elements.
*   **Secondary (Off-white/Mist):** The primary canvas color. It is warmer than pure white, reducing eye strain and providing a premium feel.
*   **Tertiary (Deep Lavender):** Used for hover states or secondary buttons where higher contrast against the light background is required.
*   **Neutral (Charcoal):** Reserved exclusively for text and high-contrast iconography to ensure WCAG AA readability standards.

A subtle dot grid pattern should be rendered in a very light version of the primary color (approx. 10% opacity) across the background of all pages.

## Typography

This design system utilizes a pairing of two modern sans-serifs to balance personality with function.

**Manrope** is used for headlines. Its geometric yet slightly soft curves align with the rounded UI shapes and floral accents. It should be set with tight letter spacing for large display text to maintain a professional, "tight" editorial look.

**Inter** is the functional workhorse for body copy and labels. It provides exceptional legibility at small sizes, particularly for project descriptions and technical "Skills" sections. Body text should maintain a generous line height (1.6) to support the overall minimalist and airy aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy centered within the viewport. For desktop, a 12-column grid is used with wide gutters to ensure the content never feels cramped.

*   **Whitespace:** Ample vertical padding (80px+) between sections is mandatory to allow the designer's work to "breathe."
*   **Alignment:** Text is primarily left-aligned for readability, though hero introductions may use centered layouts for impact.
*   **Component Rhythm:** An 8px linear scale governs all internal component spacing (padding, margins within cards).

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

*   **Surfaces:** The background is the lowest level. Cards and containers sit on top, distinguished by a slightly lighter fill or a very thin (1px) border in a muted lavender tint.
*   **Depth:** Instead of traditional drop shadows, depth is suggested through the "stacked" appearance of rounded containers. 
*   **Shadows:** When used for high-importance items (like a floating 'Let's Chat' button), shadows must be extremely diffused (20px+ blur), low-opacity (5-8%), and tinted with the primary lavender hex rather than pure black.

## Shapes

The shape language is defined by **High Roundedness**. 

*   **Main Containers:** Standard cards and content blocks use a 1rem (16px) radius.
*   **Interactive Elements:** Buttons and tags use a fully pill-shaped (rounded-full) radius to contrast against the more rectangular content blocks.
*   **Images:** All project mockups and profile photos must carry the same corner radius as the cards to maintain visual harmony.

## Components

### Buttons
Primary buttons are pill-shaped with a solid primary color fill and charcoal or white text. Secondary buttons use an outline style with a 1px border.

### Cards
Portfolio cards are the centerpiece. They should feature a soft background color (slightly different from the page background) and contain the floral accent in the top right corner as a "signature" element.

### Chips & Tags
Used for skills or categories. These are small, pill-shaped, and use the primary color at 10-15% opacity for the background to keep them subtle and non-distracting.

### Input Fields
Minimalist with only a bottom border or a very soft rounded background. Focus states are indicated by a thickening of the primary color border.

### Decorative Accents
The "four-petal flower" icon is a system-wide component. It should be used at different scales: small (16px) for list bullets, and large (120px+) as a semi-transparent background watermark for section headers.