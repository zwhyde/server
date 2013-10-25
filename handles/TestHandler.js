var Protocol = require('../Protocol');
var TestHandler = module.exports = function (req, res, next) {
    console.log("========");
    console.log(req.data);
    console.log({protocol: Protocol.RESPONSE_LOGIN_SUCCESS, data: req.data});
    next({protocol: Protocol.RESPONSE_LOGIN_SUCCESS, data: req.data});
};
TestHandler.protocol = Protocol.REQUEST_LOGIN;
