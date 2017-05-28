'use strict';

function throwIfExist(value) {
    if (value){
        throw value;
    }
}

function throwError(message) {
    throw new Error(message);
}

module.exports = {
    throwIfExist: throwIfExist,
    throwError: throwError
}