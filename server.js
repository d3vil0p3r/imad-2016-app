var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'style.css'));
});


app.get('/css/normalize.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'style.css'));
});


app.get('/js/feeder.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'feeder.js'));
});

app.get('/js/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'script.js'));
});

app.get('/js/tip.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'tip.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
