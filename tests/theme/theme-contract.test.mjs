import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const css = await readFile(new URL('../../src/theme/global.css', import.meta.url), 'utf8');
test('global CSS contains all primary brand tokens', () => {
  assert.match(css, /--brand-mint:\s*#2FD6B3/);
  assert.match(css, /--brand-azure:\s*#4FB0EC/);
  assert.match(css, /--brand-violet:\s*#7C6CF0/);
});
test('global CSS includes semantic status tokens', () => {
  assert.match(css, /--credit:\s*#0BA678/);
  assert.match(css, /--danger:\s*#E5484D/);
  assert.match(css, /--warning:\s*#F5A524/);
});
test('global CSS includes a light surface and text palette', () => {
  assert.match(css, /--surface:\s*#FFFFFF/);
  assert.match(css, /--ink:\s*#0D1526/);
  assert.match(css, /--line:\s*#E3E8F1/);
});
test('global CSS includes the dark theme override', () => {
  assert.match(css, /:root\[data-theme='dark'\]/);
  assert.match(css, /--bg:\s*#0A0F1C/);
});
test('global CSS respects reduced-motion preference', () => {
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test("global CSS defines spacing tokens", () => {
  assert.match(css, /--space-1:\s*4px/);
  assert.match(css, /--space-7:\s*48px/);
});

test("global CSS defines radii tokens", () => {
  assert.match(css, /--radius-sm:\s*12px/);
  assert.match(css, /--radius-full:\s*999px/);
});

test("global CSS defines a font stack", () => {
  assert.match(css, /--font-sans:/);
});

test("global CSS includes visible focus styling", () => {
  assert.match(css, /:focus-visible/);
  assert.match(css, /outline:\s*2px solid var\(--brand-mint\)/);
});

test("global CSS uses border-box sizing", () => {
  assert.match(css, /box-sizing:\s*border-box/);
});

test("global CSS defines app shell safe-area spacing", () => {
  assert.match(css, /padding-top:\s*env\(safe-area-inset-top\)/);
  assert.match(css, /padding-bottom:\s*env\(safe-area-inset-bottom\)/);
});

test("global CSS includes reusable card styling", () => {
  assert.match(css, /\.card\s*\{/);
  assert.match(css, /background:\s*var\(--surface\)/);
});

test("global CSS contains the primary motion animation", () => {
  assert.match(css, /@keyframes flow-rise/);
});

test("global CSS transitions foreground and background", () => {
  assert.match(css, /transition:\s*background-color 0\.25s ease, color 0\.25s ease/);
});

test("global CSS limits image and SVG width", () => {
  assert.match(css, /img,\s*\nsvg\s*\{/);
  assert.match(css, /max-width:\s*100%/);
});

test("dark theme includes a dark surface token", () => {
  assert.match(css, /--surface:\s*#111928/);
});

test("dark theme includes a readable foreground token", () => {
  assert.match(css, /--ink:\s*#F2F5FA/);
});

test("all spacing values use pixel units", () => {
  assert.ok([...css.matchAll(/--space-\d+:\s*(\d+)px/g)].length >= 7);
});

test("body defaults to the configured font stack", () => {
  assert.match(css, /font-family:\s*var\(--font-sans\)/);
});

test("base body typography includes readable line height", () => {
  assert.match(css, /line-height:\s*1\.5/);
});

test("interactive controls inherit the application font", () => {
  assert.match(css, /button,\s*\ninput,\s*\nselect,\s*\ntextarea\s*\{[\s\S]*?font:\s*inherit/);
});

test("buttons expose a pointer cursor", () => {
  assert.match(css, /button\s*\{\s*cursor:\s*pointer/);
});

test("links inherit text color and suppress default underline", () => {
  assert.match(css, /a\s*\{[\s\S]*?color:\s*inherit;[\s\S]*?text-decoration:\s*none/);
});

test("card border uses the shared line token", () => {
  assert.match(css, /border:\s*1px solid var\(--line\)/);
});

test("card radius uses a shared radius token", () => {
  assert.match(css, /border-radius:\s*var\(--radius-lg\)/);
});

test("dark mode declares a distinct second surface", () => {
  assert.match(css, /--surface-2:\s*#182236/);
});

test("light mode includes a third surface level", () => {
  assert.match(css, /--surface-3:\s*#E7ECF4/);
});

test("dark mode includes a third surface level", () => {
  assert.match(css, /--surface-3:\s*#1F2B42/);
});

test("global CSS has an explicit stronger divider token", () => {
  assert.match(css, /--line-strong:\s*#D2D9E6/);
});
