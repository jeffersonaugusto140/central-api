'use strict';

var centralMondoDb = require('../data/centralMongoDb');

var claimSchema = centralMondoDb.createSchema({ 
    key: String,
    value: String
});

var roleSchema = centralMondoDb.createSchema({ 
    type: String,
    enum: ['admin', 'user_financial'],
    default: ['user_financial']
});

var userSchema = centralMondoDb.createSchema({ 
    name: String, 
    email: String,
    password: String,
    roles: {
        type: [{
            type: String,
            enum: ['admin', 'user_financial']
        }],
        default: ['user_financial']
    },
    claims: [claimSchema]
});

var model = centralMondoDb.createModel('users', userSchema);

module.exports = model;