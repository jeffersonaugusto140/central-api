'use strict';

var express = require('express');
var router = express.Router();
var wrapper = require('../../common/wrapperFnController');
var service = require('../../logic/service/userService');

router.post('/', wrapper.passBody(service.add));

module.exports = router;