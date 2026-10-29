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
