var express = require('express');
var app = express();
var moduleTest = require('./module1.js');

// var fs = require('fs');
// var data = require('./data.json');

const port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send(moduleTest.text1);
});


// fs.readFile('./data.json', 'utf-8', (err,data) => {
//   var data = JSON.parse(data);
//   console.log(data.name);
// });


app.use(express.static(__dirname));
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
