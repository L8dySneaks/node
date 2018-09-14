var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('OMG OMG my first CloudFoundry app and successful pipeline');
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
