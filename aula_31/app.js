'use strict';

/* O arquivo app.js é o core do nosso sistema. Nele receberemos todos os módulos externos, configuraremos nosso servidor e nossas rotas de acesso. */

/* Na pasta do projeto instale os seguintes módulos:
1) Express: É um framework que auxilia bastante a utilização do node.
npm install --save express
2) Nodemon: Facilita bastante para que o servidor atualize as mudanças automaticamente:
npm install -g nodemon --save
3) Body Parser: Este módulo facilita o recebimento de dados advindos de formulários.
npm install --save body-parser
4) Cors: Oferece as permissões necessárias para trabalhar com requisições na linguagem backend.
npm install --save cors
*/

//Constantes

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
app.use(cors());
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
  res.send('Hello world');
});

app.get('/about', function (req, res) {
  res.send('About');
});

app.get('/contact', function (req, res) {
  res.send('Contact');
});

let port = 3000 || process.env.PORT;
app.listen(port);