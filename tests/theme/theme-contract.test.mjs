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
