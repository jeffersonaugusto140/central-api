'use strict';

var jwt = require('jsonwebtoken');

var models = require('../data/centralMongoDb');
var apiGlobal = require('../../common/apiGlobal');
var config = require('../../common/config');

var TOKEN_TIME_24H = 86400000;

function isValid(user) {
    return user !== null && 
           user !== undefined && 
           user.email !== '' &&
           user.email !== null &&
           user.email !== undefined &&

           user.password !== '' &&
           user.password !== null &&
           user.password !== undefined;
}

function add(user, callback) {
    if (!isValid(user)) {
        callback(apiGlobal.execError('User is not valid.'))
    } else{
        models.users().find({ email: user.email }, function (err, users) {
            apiGlobal.throwIfExist(err);

            if (users.length == 0) {
                user.password = jwt.sign(user.password, config.secret);
                
                models.users().create(user, function (err, res) {
                    if (err) {
                        callback(apiGlobal.execError(err));    
                    } else {
                        callback(apiGlobal.execOk("Success."));
                    }
                });
                
            } else {
                callback(apiGlobal.execError('User already exists in the database.'));
            }
        });
    }
}

function getToken(user, userAuth) {
    var pass = jwt.sign(userAuth.password, config.secret);

    if (user.password != pass) {
        return apiGlobal.execError('Authentication failed. Wrong password.');
    } else{
        var objToken = { user: user, time: Date.now() };

        var token = jwt.sign(objToken, config.secret, { 
            expiresIn: TOKEN_TIME_24H 
        });

        return {
          success: true,
          message: 'Enjoy your token!',
          token: token
        };
    }
}

function resquestToken(userAuth, callback) {
    if (!userAuth) {
        callback(apiGlobal.execError('Authentication failed. User not found.'));
    } else {
        models.users().findOne({ email: userAuth.email }, function (err, user) {
            if (err) {
                callback(apiGlobal.execError('Error on find user.'));
            } else if (!user) {
                callback(apiGlobal.execError('Authentication failed. User not found.'));
            } else {
                callback(getToken(user, userAuth));
            }
        });
    }
}

function findAll(req, callback) {
    var query = models.users().find({}).select({ 'name': 1, 'email': 1, '_id': 0});

    query.exec(function (err, res) {
        apiGlobal.throwIfExist(err);
        callback({users: res});
    });
}

function findCurrent(req, callback) {
    callback({
        name: req.user.name,
        email: req.user.email
    });
}

function update(req, callback) {
    var userId = req.params.id;
    var user = req.body;

    var pass = jwt.sign(user.password, config.secret);

    var userUpdated = { name: user.name, email: user.email, password: pass };

    models.users().update({ _id: userId}, userUpdated, function (err, res) {
        if (err) {
            callback(apiGlobal.execError(err));    
        } else {
            callback(apiGlobal.execOk("Success.", user));
        }
    })
}

module.exports = {
    add: add,
    resquestToken: resquestToken,
    findAll: findAll,
    findCurrent: findCurrent,
    update: update
}