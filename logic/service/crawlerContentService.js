'use strict'

var request = require('request');
var fs = require('fs');

function get(options, callback) {
    request
        .get(options.url)
        .on('error', function(err) {
            console.log(err);
            callback({});
        })
        .on('response', function (response) {
            console.log(response.statusCode) // 200 
            console.log(response.headers['content-type'])
            callback({});
        });
}

module.exports = {
    get: get
}