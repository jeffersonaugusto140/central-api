'use strict';

var models = require('../data/centralMongoDb');
var tools = require('../common/tools');
var jwt = require('jsonwebtoken');
var config = require('../common/config');

var successFalse = { success: false, message: 'Authentication failed.' };
var TOKEN_TIME_24H = 86400000;

function getReturnError(message) {
    console.error('Authentication failed. User not found.');
    return successFalse;
}

function getErrorAuthenticationFailedWrongPassword() {
    return successFalse;
}

function updateLastToken(user, token) {
    var claimsResult = user.claims.filter(function(item){
        return item.key === 'lastToken';
    });

    if (claimsResult && claimsResult.length > 0) {
        var index = user.claims.indexOf(claimsResult);
        user.claims.slice(index, 1);
    } 
    
    user.claims.push({
        key: 'lastToken',
        value: token
    });

    models.users().update({ _id: user._id}, user, function (err, res) {
        tools.validator.throwIfExist(err);
    })
}

function validateAutencationUser(user, req, resp) {
    if (user.password != req.body.password) {
        res.json(getReturnError('Authentication failed. Wrong password.'));
    } else{
        var token = jwt.sign(user, config.secret, { 
            expiresIn: TOKEN_TIME_24H 
        });

        user = updateLastToken(user, token);

        resp.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
    }
}

function authenticate(req, resp, next) {
    models.users().findOne({ email: req.body.email }, function (err, user) {
        tools.validator.throwIfExist(err);

        if (!user) {
            resp.json(getReturnError('Authentication failed. User not found.'));
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
                resp.json(tools.returnApi.successFalse('Failed to authenticate token.'))
            } else {
                req.user = decoded._doc;
                next();
            }
        })
    } else {
        return resp.status(403).send(tools.returnApi.successFalse('No token provided.'));
    }
}

module.exports = {
    authenticate: authenticate,
    validateMiddleware: validateMiddleware
}