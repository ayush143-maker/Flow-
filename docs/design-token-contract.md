# Design token synchronization

CSS variables live in src/theme/global.css. Values consumed by TypeScript, such as category colors, live in src/theme/tokens.ts.

When changing the brand palette or semantic colors, review both files in the same change. Keep names and values aligned where the same concept exists. Category color additions should have a deterministic fallback through categoryColor() rather than returning an empty value.

Current conventions:
- Brand colors: mint, azure, and violet.
- Semantic colors: credit, danger, and warning.
- Surface and text colors use CSS custom properties so theme overrides can change them centrally.
- Spacing and radius tokens avoid scattered one-off values.

Do not duplicate a complete palette inside a component. Prefer tokens so future theme adjustments remain consistent.