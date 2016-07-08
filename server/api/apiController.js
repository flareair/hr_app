'use strict';
const fs = require('fs');

let data = require('../data.json');

exports.defaultInfo = (req, res, next) => {
    res.end('Welcome to GAS Club Board Of Shame api');
};

exports.getAll = (req, res, next) => {
    return res.send(data);
};

exports.notFound = (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
};