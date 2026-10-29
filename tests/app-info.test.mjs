import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
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

test("app version is a string", () => {
  assert.equal(typeof info.APP_VERSION, 'string');
});

test("app version contains exactly three numeric segments", () => {
  assert.equal(info.APP_VERSION.split('.').length, 3);
});

test("app version segments are all numeric", () => {
  assert.ok(info.APP_VERSION.split('.').every((part) => /^\d+$/.test(part)));
});

test("app name contains no newline", () => {
  assert.equal(info.APP_NAME.includes('\n'), false);
});

test("app tagline contains no newline", () => {
  assert.equal(info.APP_TAGLINE.includes('\n'), false);
});

test("app tagline ends with punctuation", () => {
  assert.match(info.APP_TAGLINE, /[.!?]$/);
});

test("app version matches the package manifest", async () => {
  const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
  assert.equal(info.APP_VERSION, pkg.version);
});

test("HTML document title matches the app name", async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, new RegExp('<title>' + info.APP_NAME + '</title>'));
});

test("HTML shell exposes the React root element", async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /id=["']root["']/);
});

test("HTML shell loads the TypeScript entrypoint", async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /src="\/src\/main\.tsx"/);
});

test("metadata version does not contain whitespace", async () => {
  assert.equal(info.APP_VERSION, info.APP_VERSION.trim());
});

test("app name uses a simple portable identifier", async () => {
  assert.match(info.APP_NAME, /^[A-Za-z0-9 -]+$/);
});

test("tagline ends in a sentence mark", async () => {
  assert.match(info.APP_TAGLINE, /[.!?]$/);
});

test("tagline is short enough for a compact brand line", async () => {
  assert.ok(info.APP_TAGLINE.length < 80);
});

test("tagline includes the Flow product phrase", () => {
  assert.match(info.APP_TAGLINE.toLowerCase(), /flow/);
});

test("app name does not include path separators", () => {
  assert.equal(/[\\/]/.test(info.APP_NAME), false);
});
