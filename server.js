var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/beerlocker');


var app = express();

var router = express.Router();

var port = process.env.PORT || 3000;

router.get('/', function(req, res) {
  res.json({ message: 'Hello world' });
});

app.use('/api', router);

app.listen(port);

console.log('Insert beer on port ' + port);
