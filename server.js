var express = require('express');
var app = express();

var converter = require('./app/converter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
  // request
  console.log(
    JSON.stringify({
      headers: req.headers,
      remote: req._remoteAddress,
      url: req.url,
      method: req.method,
      body: req.body
    })
  );
  // response
  res.on('finish', () => {
    console.log(
      JSON.stringify({
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        headers: res._header,
        body: res.send
      })
    );
  });
  next();
});

app.get('/rgbToHex', function (req, res) {
  var red = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue = parseInt(req.query.blue, 10);
  var hex = converter.rgbToHex(red, green, blue);
  res.send(hex);
});

app.get('/hexToRgb', function (req, res) {
  var hex = req.query.hex;
  var rgb = converter.hexToRgb(hex);
  res.send(JSON.stringify(rgb));
});

app.listen(3000, () => {
  console.log(`Server started at http://localhost:3000`);
})