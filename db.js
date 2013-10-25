var config = require('./config/db.json'),
    Sequelize = require('sequelize'),
    fs = require('fs'),
    path = require('path'),
    orm = new Sequelize(config.database, config.username, config.password, config);
var db = module.exports = {};

db.init = function () {
    var domainDir = path.normalize(__dirname + '/domain/');
    //读取domain
    fs.readdirSync(domainDir).forEach(function (fn) {
        if (!/\.js$/.test(fn)) return;
        var name = path.basename(fn, '.js');
        orm.import(domainDir + name);
        db.__defineGetter__(name, function () {
            return orm.model(name);
        })
    });

};
db.sync = function () {
    this.init();
    orm.sync();
};
db.createChain = function () {
    return new Sequelize.Utils.QueryChainer;
};
db.init();

var Hero = db.Hero,
    Skill = db.Skill,
    Soldier = db.Soldier,
    Role = db.Role,
    User = db.User;
User.hasMany(Role, {foreignKey: "userId"});
Role.hasMany(Hero, {foreignKey: "roleId"});
Hero.hasMany(Skill, {foreignKey: "heroId"});
Hero.hasMany(Soldier, {foreignKey: "heroId"});


var program = require('commander');
function sync(name) {
    console.log('开始同步...');
    var s;
    if (name == 'all') {
        s = orm.sync({force: true});
    } else {
        s = orm.model(name).sync({force: true});
    }
    s.success(function () {
        console.log('同步成功！')
    }).error(function (err) {
            console.log('同步失败！');
            console.log(err);
        });
    return "";
}
program.version('0.0.1')
    .option('-s, --sync [type]', '同步数据库')
    .parse(process.argv);

if (program.sync) {
    sync(program.sync)
}
