'use strict';

function successFalse(message) {
    return {
        success: false,
        message: message
    };
}

function successTrue(message, value) {
    if (value) {
        return {
            success: false,
            message: message,
            value: value
        };        
    } else {
        return {
            success: false,
            message: message
        }; 
    }

}

module.exports = {
    successTrue: successTrue,
    successFalse: successFalse
}