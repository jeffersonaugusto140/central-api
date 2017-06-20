function passBody(fn) {
    return function (req, resp, next) {
        fn(req.body, function (ret) {
            resp.json(ret);    
        });
    }
}

function passRequest(fn) {
    return function (req, resp, next) {
        fn(req, function (ret) {
            resp.json(ret);    
        });
    }
}

module.exports = {
    passBody: passBody,
    passRequest: passRequest
}