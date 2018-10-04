// var express = require('express');
// var app = express();
// var moduleTest = require('./module1.js');
fs = require('fs');

// var fs = require('fs');
// var data = require('./data.json');

// const port = process.env.PORT || 3000;
// app.get('/', function (req, res) {
//   res.send(moduleTest.text1);
// });


// fs.readFile('./data.json', 'utf-8', (err,data) => {
//   var data = JSON.parse(data);
//   console.log(data.name);
// });

data = fs.readdirSync('c:/');
console.log('data:', data);

console.log("this comes after");



// app.use(express.static(__dirname));
//
// var messages = [
//   {name: 'Steph', message: 'new app'},
//   {name: 'Jim', message: 'testing new app'}
// ]
//
//
// app.get('/mesages', (req, res) =>{
//   response.send(messages);
// });
//
// app.post('/mesages', (req, res) =>{
//   console.log(req.body);
//   response.sendStatus(200);
// });
//
//
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });
