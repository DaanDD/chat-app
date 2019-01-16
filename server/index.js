const express = require('express');
const redis = require('redis');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const client = redis.createClient({ host: 'redis' });

client.on("error", function (err) {
  console.log("Error " + err);
});

// App
const app = express();
app.get('/', (req, res) => {
  client.incr('counter', function(err, reply) {
    res.send('Hello, world\n' + reply);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
