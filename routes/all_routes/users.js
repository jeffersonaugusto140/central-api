'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../../controllers/userController');

router
  .get('/', controller.findCurrent)
  .get('/findAllUsers', controller.findAll)
  .put('/:id', controller.update)

module.exports = router;
