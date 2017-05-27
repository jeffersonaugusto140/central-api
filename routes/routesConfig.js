var centralHelper = require('../common/centralHelper');

var routesMap = [
    { routerName: 'users' }
];

var baseApiPath = '/api/v1/';

function init(app) {
    routesMap.forEach(function(item) {
        var path = centralHelper.util.format('%s%s', baseApiPath, item.routerName);
        var routerRequireName = centralHelper.util.format("./%s", item.routerName);

        app.use(path, require(routerRequireName));
    }, this);

}

module.exports = {
    init: init
};