'use strict';

var express = require('express');
var router = express.Router();
var wrapper = require('../../common/wrapperFnController');
var service = require('../../logic/service/userService');

router
  .get('/', wrapper.passRequest(service.findCurrent))
  .get('/findAllUsers', wrapper.passRequest(service.findAll))
  .put('/:id', wrapper.passRequest(service.update))

module.exports = router;
