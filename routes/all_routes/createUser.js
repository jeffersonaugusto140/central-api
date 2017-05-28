'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../../controllers/createUserController');

router.post('/', controller.add);

module.exports = router;