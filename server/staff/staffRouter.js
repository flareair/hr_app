'use strict';

const express = require('express');
let router = express.Router();

const staffController = require('./staffController');

/*
    Mount point /pages
*/

router.get('/partials/:name', staffController.renderPartial);


router.get('/partials/directives/:name', staffController.renderDirective);

module.exports = router;
