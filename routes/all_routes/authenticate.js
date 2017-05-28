'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../../controllers/authenticateController');

router.post('/', controller.authenticate);

module.exports = router;