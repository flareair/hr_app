'use strict';
const fs = require('fs');

let data = '';

if (process.env.NODE_ENV === 'test') {
    data = require('../test_data.json');
} else {
    data = require('../data.json');
}



exports.defaultInfo = (req, res, next) => {
    res.end('Welcome to GAS Club Board Of Shame api');
};

exports.getAll = (req, res, next) => {
    if (!data) {
        let err = new Error('Cant get mock data');
        err.status = 500;
        return next(err);
    }

    return res.send(data);
};

exports.notFound = (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
};