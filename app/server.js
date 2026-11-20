// Placeholder service: replace with your real Tool-Session Service.
const http = require('http');
http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); return res.end('OK'); }
  res.writeHead(404); res.end();
}).listen(3000, () => console.log('Tool-Session Service on :3000'));
