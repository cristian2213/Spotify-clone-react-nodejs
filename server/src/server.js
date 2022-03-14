require('dotenv').config();
const http = require('http');
const app = require('./app');

const PORT = process.env.APP_PORT || 8000;
const HOST = process.env.APP_HOST || '127.0.0.1';

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, HOST, () => {
    console.info(`Server's running on the host http://${HOST}:${PORT}`);
  });
}

startServer();
