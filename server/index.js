const express = require('express');
const next = require('next');
const chat = require('../lib/chat');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const dev = process.env.NODE_ENV !== 'production';;
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare()
  .then(() => {
    const server = express();

    server.get('/api/messages', (req, res) => {
      chat.fetchMessages().then((messages) => {
        res.send(messages);
      });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);

  })
