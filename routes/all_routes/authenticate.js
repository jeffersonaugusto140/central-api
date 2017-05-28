'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, resp, next) {
  resp.json({users: [{name: 'Timmy'}]});
});

module.exports = router;