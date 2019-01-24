const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const proxy = express();

proxy.use(bodyParser.json());
proxy.use(bodyParser.urlencoded({ extended: true }));
proxy.use(cors());
proxy.use(morgan('dev'));
proxy.use(express.static(path.join(__dirname, '../public')));

proxy.get('/loaderio-702202d5008e0c736925d460ba7cdc4d.txt', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../loaderio-702202d5008e0c736925d460ba7cdc4d.txt'));
});

module.exports = proxy;
