const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes.js');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
module.exports.app = app;

app.set('port', process.env.PORT || 3333);

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use(express.static('public'));

app.use('/', router);

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on port', app.get('port'));
}
