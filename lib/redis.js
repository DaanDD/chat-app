const redis = require('redis');

const client = redis.createClient({ host: 'redis' });

client.on("error", function (err) {
  console.log("Error " + err);
});
