const express = require('express');
// const morgan = require('morgan');
const path = require('path');
// const cors = require('cors');
const bodyParser = require('body-parser');

const proxy = express();

proxy.use(bodyParser.json());
proxy.use(bodyParser.urlencoded({ extended: true }));
// proxy.use(cors());
// proxy.use(morgan('dev'));
proxy.use(express.static(path.join(__dirname, '../public')));

proxy.get('/loaderio-79b1c5bd469077fb55a899e9d14f4610.txt', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../loaderio-79b1c5bd469077fb55a899e9d14f4610.txt'));
});

module.exports = proxy;
