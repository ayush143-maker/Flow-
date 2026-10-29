import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
let server;
let info;
before(async () => {
  server = await createServer({ configFile: 'vite.config.ts', server: { middlewareMode: true }, appType: 'custom' });
  info = await server.ssrLoadModule('/src/app-info.ts');
});
after(async () => { await server?.close(); });
test('app name is Flow', () => { assert.equal(info.APP_NAME, 'Flow'); });
test('app tagline is present', () => { assert.ok(info.APP_TAGLINE.length > 0); });
test('app version uses semantic version shape', () => { assert.match(info.APP_VERSION, /^\d+\.\d+\.\d+$/); });
test('app name has no leading or trailing whitespace', () => { assert.equal(info.APP_NAME, info.APP_NAME.trim()); });
test('app tagline has no leading or trailing whitespace', () => { assert.equal(info.APP_TAGLINE, info.APP_TAGLINE.trim()); });

test("tagline identifies money as the product focus", () => {
  assert.match(info.APP_TAGLINE.toLowerCase(), /money/);
});

test("app name is a non-empty string", () => {
  assert.equal(typeof info.APP_NAME, 'string');
  assert.ok(info.APP_NAME.length > 0);
});

test("app tagline is a string", () => {
  assert.equal(typeof info.APP_TAGLINE, 'string');
});
