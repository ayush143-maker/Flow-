import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';

let server;
let tokens;

before(async () => {
  server = await createServer({
    configFile: 'vite.config.ts',
    server: { middlewareMode: true },
    appType: 'custom',
  });
  tokens = await server.ssrLoadModule('/src/theme/tokens.ts');
});

after(async () => {
  await server?.close();
});

test('uses the documented mint brand token', () => {
  assert.equal(tokens.BRAND.mint, '#2FD6B3');
});

test('uses the documented azure brand token', () => {
  assert.equal(tokens.BRAND.azure, '#4FB0EC');
});

test('uses the documented violet brand token', () => {
  assert.equal(tokens.BRAND.violet, '#7C6CF0');
});

test('provides a color for the Food category', () => {
  assert.equal(tokens.categoryColor('Food'), tokens.CATEGORY_COLORS.Food);
});

test('uses the fallback color for an unknown category', () => {
  assert.equal(tokens.categoryColor('Not a category'), tokens.FALLBACK_CATEGORY_COLOR);
});

test("keeps the brand gradient non-empty", () => {
  assert.equal(typeof tokens.BRAND.gradient, 'string');
  assert.ok(tokens.BRAND.gradient.length > 0);
});

test("uses the semantic credit color", () => {
  assert.equal(tokens.SEMANTIC.credit, '#0BA678');
});

test("uses the semantic danger color", () => {
  assert.equal(tokens.SEMANTIC.danger, '#E5484D');
});

test("uses the semantic warning color", () => {
  assert.equal(tokens.SEMANTIC.warning, '#F5A524');
});

test("provides a fallback string for an empty category key", () => {
  assert.equal(tokens.categoryColor(''), tokens.FALLBACK_CATEGORY_COLOR);
});
