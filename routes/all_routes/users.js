'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../../controllers/userController');

router
  .get('/', controller.findAll)
  .post('/', controller.add);

module.exports = router;
