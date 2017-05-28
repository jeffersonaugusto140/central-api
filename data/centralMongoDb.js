'use strict';

var db;
var mongoose = require('mongoose'),
    config = require('../common/config'),
    modelHelper = require('../common/modelHelper'),
    Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

function getDB() {
    if (!db){
        db = mongoose.connect(config.database);
    }
    return db;
}

function createSchema(value) {
    return mongoose.Schema(value);
}

function createModel(name, model){
    return getDB().model(name, model);
}

// var testModel = getDB().model('Test', new Schema({ name: String }));

// testModel.create({ name: 'teste' }, function (error, result) {
//     console.log(error);
//     console.log(result);
// })

// testModel.find({}, function(error, result) { 
//     var res = result;
//     var err = error;
//  });

module.exports = {
    database: getDB,
    createSchema: createSchema,
    createModel: createModel,
    users: function(){ 
        return modelHelper.findModel('user'); 
    }
}