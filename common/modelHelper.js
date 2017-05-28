'use strict';

var apiGlobal = require('./apiGlobal');

function findModel(name) {
    try {
        var path = apiGlobal.util.format('../model/%s', name);
        return require(path);
    } catch (error) {
        error.message = apiGlobal.util.format('Model %s não encontrada.', name)
        console.log(error.message);
        throw error;
    }
}

module.exports = {
    findModel: findModel
}