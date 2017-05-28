'use strict';

var centralMondoDb = require('../data/centralMongoDb');

var claimSchema = centralMondoDb.createSchema({ 
    key: String,
    value: String
});

var userSchema = centralMondoDb.createSchema({ 
    name: String, 
    email: String,
    admin: Boolean ,
    password: String, 
    claims: [claimSchema]
});

var model = centralMondoDb.createModel('users', userSchema);

module.exports = model;