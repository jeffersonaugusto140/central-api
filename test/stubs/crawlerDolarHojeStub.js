'use strict'

var fs = require('fs'),
    path = require('path');

function getContent(options, callback) {        
    if (options === null || options === undefined || !options.url) {
        callback({
            success: false,
            content: ''
        });
    } else {
        var pathRelative = './../pages/cot-dolarhoje/index.html';
        pathRelative = path.join(__dirname, pathRelative);
        var string = fs.readFile(pathRelative, 'utf8', function (err, text) {
            if (err) {
                callback('');
            } else {
                callback(text);
            }
        });
    }
}

module.exports = {
    crawlerContentServiceStub: function (source) {
        return Object.assign(
            source, {
                get: getContent
        });
    }
}