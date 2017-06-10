'use strict';

var express = require('express'); 
var jwt = require('jsonwebtoken');

var models = require('../data/centralMongoDb');
var apiGlobal = require('../common/apiGlobal');
var config = require('../common/config');

function add(req, resp, next) {
    var user = req.body;    

    models.users().find({ email: user.email }, function (err, users) {
        apiGlobal.throwIfExist(err);

        if (users.length == 0) {
            user.password = jwt.sign(user.password, config.secret);
            models.users().create(user, function (err, res) {
                if (err) {
                    resp.json(apiGlobal.mongoDbError(err));    
                } else {
                    resp.json(apiGlobal.execOk("Success."));
                }
            });
        } else {
            resp.json(apiGlobal.execError('E-mail already exists in the database.'));
        }
    })
}

module.exports = {
    add: add
}