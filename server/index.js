const express = require('express');
const next = require('next');
const redis = require('redis');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const dev = process.env.NODE_ENV !== 'production';;
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const redisClient = redis.createClient({ host: 'redis' });

redisClient.on("error", function (err) {
  console.log("Error " + err);
});

nextApp.prepare()
  .then(() => {
    const server = express();

    server.get('/redis', (req, res) => {
      redisClient.incr('counter', function(err, reply) {
        res.send('Hello, world\n' + reply);
      });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);

  })
