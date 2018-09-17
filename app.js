var express = require('express');
var app = express();
var moduleTest = require('./module1.js');
const port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send(moduleTest.text1);
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
