var express = require('express');
var app = express();

//เรียกใช้folder public
app.use(express.static('public'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
