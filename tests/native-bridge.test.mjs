import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';

let server;
let FlowCoreWeb;
before(async () => {
  server = await createServer({ configFile: 'vite.config.ts', server: { middlewareMode: true }, appType: 'custom' });
  ({ FlowCoreWeb } = await server.ssrLoadModule('/src/services/native/flow-core-web.ts'));
});
after(async () => { await server?.close(); });

test('web bridge resolves engine information without claiming native support', async () => {
  const result = await new FlowCoreWeb().getEngineInfo();
  assert.deepEqual(result, { native: false, platform: 'web', version: '0.0.0' });
});

test("keeps the web bridge native flag false", async () => {
  assert.equal((await new FlowCoreWeb().getEngineInfo()).native, false);
});

test("identifies the browser platform", async () => {
  assert.equal((await new FlowCoreWeb().getEngineInfo()).platform, 'web');
});

test("uses a placeholder version for the web fallback", async () => {
  assert.equal((await new FlowCoreWeb().getEngineInfo()).version, '0.0.0');
});

test("returns a promise from the asynchronous bridge method", async () => {
  const result = new FlowCoreWeb().getEngineInfo();
  assert.equal(typeof result.then, 'function');
});

test("web bridge returns a boolean native flag", async () => {
  assert.equal(typeof (await new FlowCoreWeb().getEngineInfo()).native, 'boolean');
});

test("web bridge returns a string platform", async () => {
  assert.equal(typeof (await new FlowCoreWeb().getEngineInfo()).platform, 'string');
});

test("web bridge uses a semantic placeholder version", async () => {
  assert.match((await new FlowCoreWeb().getEngineInfo()).version, /^\d+\.\d+\.\d+$/);
});
