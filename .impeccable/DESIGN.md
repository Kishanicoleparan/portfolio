# Design System

## Layout Vision

This portfolio showcases personal work through an Experience mode interface. The layout prioritizes clarity, visual hierarchy, and rhythm through strategic spacing and thoughtful visual integration of all UI elements within the dark neon aesthetic.

## Spacing Scale

Using a 4-unit base rhythm (12px foundation):
- **Tight intervals:** 12px (1 unit) - button padding, form fields
- **Regular intervals:** 24px (2 units) - card gaps, internal spacing
- **Generous intervals:** 40px-48px (3-4 units) - section separation
- **Major intervals:** 56px-80px (5-6 units) - section padding, major visual breaks

## Visual Hierarchy

### Primary Elements
- Page headers (center-aligned, with hero imagery on home)
- Main content cards showcasing work
- Portfolio section tabs (integrated filter interface)

### Secondary Elements
- Section titles
- Tab labels
- Contact information

### Supporting Elements
- Decorative accents and gradients
- Borders and subtle backgrounds

## Color & Theme Consistency

All interactive elements inherit from the design system variables:
- **Primary accent:** `var(--primary)` #9b6bff (purple)
- **Secondary accent:** `var(--secondary)` #39d0ff (cyan)
- **Active states:** Gradient combinations of primary + secondary
- **Inactive states:** Muted text with subtle borders
- **Hover states:** Elevated with background tint and slight lift

Portfolio tabs specifically updated to:
- Use theme-consistent borders (`var(--border)`)
- Apply gradient backgrounds for active states
- Maintain visual weight with typography
- Provide subtle shadow on active state

## Responsive Breakpoints

- **Desktop (>950px):** Full 3-column grid, side-by-side layouts
- **Tablet (650px - 950px):** 2-column grid, stacked contact sections
- **Mobile (<650px):** Single column, centered elements, full-width inputs
- **Small phones (<380px):** Reduced font sizes, minimal padding

## Section Rhythm

```
Page Header (center, 56px bottom padding)
    ↓ 48px vertical gap
Portfolio Tabs (centered filter buttons)
    ↓ 56px vertical gap
Section Title (center-aligned)
    ↓ 40px vertical gap
Card Container (3-column grid with 28px gap)
    ↓ 80px bottom padding
[Next Section]
```

## Key Improvements

1. **Portfolio tabs integration:** Transitioned from light, clashing style (#f1f1f1 background, orange gradients) to dark neon theme with gradient active states
2. **Spacing consistency:** Improved vertical rhythm with scalable intervals
3. **Visual coherence:** All UI elements now share the same color language and interactive patterns
4. **Density refinement:** Increased card gap from 24px to 28px for better visual breathing
5. **Responsive alignment:** Unified mobile breakpoint (650px) across all sections

## Typography

- **Headings:** Space Grotesk (500-700 weights)
- **Body:** Inter (400-600 weights)
- **Line height:** 1.7 for readable paragraphs
- **Letter spacing:** Tight on display (headings), normal on body

## Interactive States

All buttons and tabs follow consistent patterns:
- **Default:** Border + subtle background
- **Hover:** Lifted with enhanced background tint and color shift
- **Active:** Full gradient background + glow effect
- **Disabled:** Reduced opacity (if applicable)

Transition timing: 0.3s ease (var(--transition))

## Accessibility

- Touch targets minimum 48px (buttons)
- Color contrast maintained across all states
- Focus states visible with subtle outline or glow
- Semantic HTML structure preserved
- Reduced motion preference respected with media query
