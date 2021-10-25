let express = require('express');
let app = express();
let body = require('body-parser');

app.listen(3000, function (req, res) {
  console.log('servidor rodando!!!');
});