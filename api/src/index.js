const fs = require('fs');
const http = require('http');
const path = require('path');
const { randomUUID } = require('crypto');

const PORT = process.env.PORT || 3000;
const MAX_BODY_BYTES = 10 * 1024;
const frontendPath = path.join(__dirname, '..', 'public', 'index.html');
const sessions = [];

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

async function readJsonBody(req) {
  if (!req.headers['content-type']?.toLowerCase().includes('application/json')) {
    const error = new Error('Content-Type must be application/json');
    error.statusCode = 415;
    throw error;
  }

  const chunks = [];
  let size = 0;

  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      const error = new Error('Request body is too large');
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    const error = new Error('Request body must be valid JSON');
    error.statusCode = 400;
    throw error;
  }
}

async function handleRequest(req, res) {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/health' && req.method === 'GET') {
    sendJson(res, 200, {
      status: 'OK',
      message: 'RP-Cloud Labs API is running'
    });
    return;
  }

  if (url.pathname === '/sessions' && req.method === 'POST') {
    let body;
    try {
      body = await readJsonBody(req);
    } catch (error) {
      sendJson(res, error.statusCode || 400, { error: error.message });
      return;
    }

    const studentId = typeof body.studentId === 'string' ? body.studentId.trim() : '';
    const tool = typeof body.tool === 'string' ? body.tool.trim() : '';
    const missingFields = [];
    if (!studentId) missingFields.push('studentId');
    if (!tool) missingFields.push('tool');

    if (missingFields.length) {
      sendJson(res, 400, {
        error: 'studentId and tool are required',
        fields: missingFields
      });
      return;
    }

    const session = {
      id: randomUUID(),
      studentId,
      tool,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    sessions.push(session);

    sendJson(res, 201, {
      status: 'success',
      message: 'Tool session request received',
      session
    });
    return;
  }

  if (url.pathname === '/' && req.method === 'GET') {
    fs.readFile(frontendPath, (error, html) => {
      if (error) {
        console.error('Unable to load the frontend:', error);
        sendJson(res, 500, { error: 'Unable to load the frontend' });
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    });
    return;
  }

  sendJson(res, 404, { error: 'Route not found' });
}

function createServer() {
  return http.createServer((req, res) => {
    handleRequest(req, res).catch((error) => {
      console.error('Request failed:', error);
      if (!res.headersSent) {
        sendJson(res, 500, { error: 'Internal server error' });
      } else {
        res.destroy(error);
      }
    });
  });
}

if (require.main === module) {
  createServer().listen(PORT, '0.0.0.0', () => {
    console.log(`RP-Cloud Labs API listening on port ${PORT}`);
  });
}

module.exports = { createServer };
