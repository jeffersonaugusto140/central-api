'use strict';

var models = require('../data/centralMongoDb')

function findAll(req, resp, next) {
     models.users().find({}, models.getResult(err, resp, function (res) {
         resp.json({users: res});
        }));
}

function add(req, resp, next) {
    var user = req.body;
    models.users().create(user, models.getResult(err, res, function (res) {
        resp.json({user: res});
    }))
}

module.exports = {
    findAll: findAll,
    add: add
}