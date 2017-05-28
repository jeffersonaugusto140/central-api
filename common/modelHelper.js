'use strict';

var tools = require('./tools');

function findModel(name) {
    try {
        var path = tools.util.format('../model/%s', name);
        return require(path);
    } catch (error) {
        error.message = tools.util.format('Model %s não encontrada.', name)
        console.log(error.message);
        throw error;
    }
}

module.exports = {
    findModel: findModel
}