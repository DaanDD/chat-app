const WebSocket = require('ws');

const wsServer = new WebSocket.Server({ port: 8081 });

wsServer.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received', message);
  });

  ws.on('error', (err) => console.error(err));
});
