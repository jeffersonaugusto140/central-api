'use strict';

var centralHelper = require('./centralHelper');

function findModel(name) {
    try {
        var path = centralHelper.util.format('../model/%s', name);
        return require(path);
    } catch (error) {
        error.message = centralHelper.util.format('Model %s não encontrada.', name)
        console.log(error.message);
        throw error;
    }
}

module.exports = {
    findModel: findModel
}