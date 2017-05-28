'use strict';

var express = require('express');
var router = express.Router();
var tools = require('../common/tools');
var authenticateController = require('../controllers/authenticateController');

var routesMap = [
    { routerName: 'users' }
];

var baseApiPath = '/api/v1/';

function initRoutes(app, arrayRoutesMap) {
    arrayRoutesMap.forEach(function(item) {
        var path = tools.util.format('%s%s', baseApiPath, item.routerName);
        var routerRequireName = tools.util.format("./all_routes/%s", item.routerName);

        app.use(path, require(routerRequireName));
    }, this);
}

function init(app) {
    initRoutes(app, [ { routerName: 'authenticate' } ])

    app.use(authenticateController.validateMiddleware);

    initRoutes(app, routesMap);
}

module.exports = {
    init: init
};