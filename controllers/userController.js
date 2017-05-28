'use strict';

var express = require('express'); 
var models = require('../data/centralMongoDb');
var apiGlobal = require('../common/apiGlobal');
var jwt = require('jsonwebtoken');
var config = require('../common/config');

function findAll(req, resp, next) {
    models.users().find({}, function (err, res) {
        apiGlobal.throwIfExist(err);
        resp.json({users: res});
    });
}

function findCurrent(req, resp, next) {
    resp.json(req.user);
}

function update(req, resp, next) {
    var userId = req.params.id;
    var user = req.body;

    var pass = jwt.sign(user.password, config.secret);

    var userUpdated = { name: user.name, email: user.email, password: pass };

    models.users().update({ _id: userId}, userUpdated, function (err, res) {
        if (err) {
            resp.json(apiGlobal.mongoDbError(err));    
        } else {
            resp.json(apiGlobal.execOk("Success.", user));
        }
    })
}

module.exports = {
    findCurrent: findCurrent,
    findAll: findAll,
    update: update
}