'use strict';

var util = require('util');

function execError(message) {
    console.error(message);
    return {
        success: false,
        message: message
    };
}

function execOk(message, value) {
    if (value) {
        return {
            success: true,
            message: message,
            value: value
        };        
    } else {
        return {
            success: true   ,
            message: message
        }; 
    }

}

function throwIfExist(value) {
    console.error(value)
    if (value){
        throw value;
    }
}

function throwError(message) {
    console.error(message);
    throw new Error(message);
}

function dbError(err) {
    console.error(err._message);
    return { message: err._message, error: err.errors };
}

module.exports = {
    util: util,
    
    execOk: execOk,
    execError: execError,
    throwIfExist: throwIfExist,
    throwError: throwError,
    dbError: dbError
};