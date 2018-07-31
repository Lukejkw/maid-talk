const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
const port = 3333;
console.log(`Server API listening on port '${port}'`);
app.listen(port);