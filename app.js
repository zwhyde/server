var async = require('async'),
    WebSocket = require('faye-websocket'),
    http = require('http'),
    util = require('./util'),
    Session = require('./Session'),
    fs = require('fs'),
    path = require('path');
var App = module.exports = {};
App.stack = [];

//开始处理链
App.process = function (req, res) {
    var first = [function (cb) {
        cb(null, req, res)
    }];
    this.stack = first.concat(this.stack);
    var resultHander = function (err, result) {
    };
    async.waterfall(this.stack, resultHander);
    this.process = function () {
        async.waterfall(this.stack, resultHander);
    };
    return this;
};
App.use = function (fn) {
    if ('function' == typeof fn) {
        this.stack.push(fn);
    }
    return App;
};
App.connect = function (request, socket, body) {
    var self = this;
    var webSocket = new WebSocket(request, socket, body);

    var req = new Request(), res = new Response();
    req.session = new Session();
    res.socket = webSocket;
    res.put = function (value) {
        this.socket.send(JSON.stringify(value));
    };

    webSocket.on('open', function (event) {
        console.log('open', event.type);
    });
    webSocket.on('message', function (event, ws) {
        console.log('message', JSON.parse(event.data));
        console.log('message', event.data);
        req.data = event.data;
        self.process(req, res);
    });
    webSocket.on('close', function (event) {
        console.log('close', event.type);
    });
};
App.listen = function (port) {
    var self = this;
    var server = http.createServer();
    server.on('upgrade', function (request, socket, body) {
        if (WebSocket.isWebSocket(request)) {
            self.connect(request, socket, body);
        }
    });
    server.listen(port);
};

var Request = function () {
};
var Response = function () {
};

App.middleware = {
    //数据转换
    dataCanvtor: function (req, res, next) {
        var data = JSON.parse(req.data);
        req.data = data.data;
        req.protocol = data.protocol;
        next(null, req, res);
    },
    //异步调用handler
    invockHandler: function (req, res) {
        process.nextTick(function () {
            App.requestHandler(req.protocol).call(null, req, res, function (result) {
                out(req, res, result);
            });
        });
        function out(req, res, result) {
            if (result)
                res.put(result);
        }
    }
};
App.requestHandler = function (name) {
    return this.handlers[name] || function () {
    };
};
App.loadHandlers = function () {
    var self = this;
    self.handlers = self.handlers || {};
    fs.readdirSync('./handlers').forEach(function (fileName) {
        if (!/\.js$/.test(fileName)) return;
        var name = path.basename(fileName, '.js');
        if (!/Handler$/.test(name)) return;
        var handler = require('./handlers/' + fileName);
        self.handlers[handler.protocol] = handler;
    });
};
App.loadDomains = function () {

};
App.loadServices = function () {

};
App.loadHandlers();
App
    //可以写middleware进行扩展 如:log
    .use(App.middleware.dataCanvtor)
    .use(App.middleware.invockHandler)
    .listen(3000);

