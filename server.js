var express = require('express')
var api = require('./controllers/api')
var redis_api = require('./controllers/redis_api')
// var upload = require('./controllers/upload')

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs')
app.use(express.static('./assets'))

redis_api(app)
api(app)


// master(app)
// upload(app)


app.listen(3000)

console.log('Running')
