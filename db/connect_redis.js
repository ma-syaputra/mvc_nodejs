
var redis = require('redis');
var client = redis.createClient({
	host : '127.0.0.1',
	port : '6379',
	database : 'db0'
});

client.on("error", function (err) {
    console.log("Error " + err);
});

module.exports = client;