'use strict';

var express = require('express'); 
var models = require('../data/centralMongoDb');
var tools = require('../common/tools');

function findAll(req, resp, next) {
    models.users().find({}, function (err, res) {
        tools.validator.throwIfExist(err);
        resp.json({users: res});
    });
}

function add(req, resp, next) {
    var user = req.body;

    models.users().find({ email: user.email }, function (err, users) {
        tools.validator.throwIfExist(err);

        if (users.length == 0) {
            models.users().create(user, function (err, res) {
                tools.validator.throwIfExist(err);
                resp.json({user: res});
            });
        } else {
            tools.returnApi.successFalse('E-mail already exists in the database.');
        }
    })

}

module.exports = {
    findAll: findAll,
    add: add
}