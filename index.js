var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;

var router = express.Router();

app.use('/api', router);
router.get('/products.json', function(req, res) {
    res.json({ result: 'Hello world' });
});

app.listen(port);
console.log('Express.js API started');
