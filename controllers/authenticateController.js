'use strict';

var models = require('../data/centralMongoDb');
var apiGlobal = require('../common/apiGlobal');
var jwt = require('jsonwebtoken');
var config = require('../common/config');

var TOKEN_TIME_24H = 86400000;

function validateAutencationUser(user, req, resp) {
    var pass = jwt.sign(req.body.password, config.secret);

    if (user.password != pass) {
        res.json(apiGlobal.execError('Authentication failed. Wrong password.'));
    } else{
        var objToken = { user: user, time: Date.now() };

        var token = jwt.sign(objToken, config.secret, { 
            expiresIn: TOKEN_TIME_24H 
        });

        resp.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
    }
}

function authenticate(req, resp, next) {
    models.users().findOne({ email: req.body.email }, function (err, user) {
        apiGlobal.throwIfExist(err);

        if (!user) {
            resp.json(apiGlobal.execError('Authentication failed. User not found.'));
        } else {
            validateAutencationUser(user, req, resp);
        }
    })
}

function validateMiddleware(req, resp, next) {
    
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                resp.json(apiGlobal.apiError('Failed to authenticate token.'))
            } else {
                req.user = decoded.user;
                next();
            }
        })
    } else {
        return resp.status(403).send(apiGlobal.apiError('No token provided.'));
    }
}

module.exports = {
    authenticate: authenticate,
    validateMiddleware: validateMiddleware
}