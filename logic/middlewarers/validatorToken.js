'use strict';

var models = require('../data/centralMongoDb');
var apiGlobal = require('../../common/apiGlobal');
var jwt = require('jsonwebtoken');
var config = require('../../common/config');

function validate(req, resp, next) {    
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                resp.json(apiGlobal.execError('Failed to authenticate token.'))
            } else {
                req.user = decoded.user;
                next();
            }
        })
    } else {
        return resp.status(403).send(apiGlobal.execError('No token provided.'));
    }
}

module.exports = {
    validate: validate
}