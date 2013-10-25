var MemoryStore = require('./MemoryStore'),
    util = require('./util');
var Session = function () {
    this.sessionStore = new MemoryStore();
    this.sessionId = util.uid(24);
    this.sessionStore.set(this.sessionId, {});
};
Session.prototype = {
    get: function (key, cb) {
        this.sessionStore.get(this.sessionId, function (err, v) {
            cb(v[key]);
        });
    },
    set: function (key, value) {
        this.sessionStore.get(this.sessionId, function (err, v) {
            v[key] = value;
        });
    },
    destroy: function () {
        this.sessionStore.del(this.sessionId);
    }
};
Session.getInstance = function () {
    var instance = new Session();
    this.getInstance = function () {
        return instance;
    };
    return instance;
};
module.exports = Session;
