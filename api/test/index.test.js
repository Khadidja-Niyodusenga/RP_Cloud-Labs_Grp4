const assert = require('node:assert/strict');
const { after, before, test } = require('node:test');
const { createServer } = require('../src');

const server = createServer();
let baseUrl;

before(async () => {
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  });
});

test('GET /health returns a healthy JSON response', async () => {
  const response = await fetch(`${baseUrl}/health`);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).status, 'OK');
});

test('GET / serves the session request form', async () => {
  const response = await fetch(`${baseUrl}/`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
  assert.match(await response.text(), /Request a tool session/);
});

test('POST /sessions records a valid request with a unique id', async () => {
  const payload = { studentId: 'STU-001', tool: 'Database tool' };
  const [first, second] = await Promise.all([
    fetch(`${baseUrl}/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }),
    fetch(`${baseUrl}/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
  ]);
  const firstBody = await first.json();
  const secondBody = await second.json();

  assert.equal(first.status, 201);
  assert.equal(firstBody.session.studentId, payload.studentId);
  assert.equal(firstBody.session.tool, payload.tool);
  assert.equal(firstBody.session.status, 'pending');
  assert.notEqual(firstBody.session.id, secondBody.session.id);
});

test('POST /sessions rejects missing required fields', async () => {
  const response = await fetch(`${baseUrl}/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ studentId: 'STU-001' })
  });

  assert.equal(response.status, 400);
  assert.deepEqual((await response.json()).fields, ['tool']);
});

test('POST /sessions rejects malformed JSON', async () => {
  const response = await fetch(`${baseUrl}/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{invalid'
  });

  assert.equal(response.status, 400);
});
