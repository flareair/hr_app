'use strict';

const express = require('express');
let router = express.Router();

const staffController = require('./staffController');

/*
    Mount point /pages
*/

router.get('/partials/:name', staffController.renderPartial);


module.exports = router;
