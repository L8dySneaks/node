var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('New test on Monday');
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
