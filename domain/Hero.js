module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Hero", {
//            userId: {type: DataTypes.INTEGER, comment: "用户ID"},
//            heroCId: {type: DataTypes.INTEGER,comment:"用户ID"},
//            roleId: {type: DataTypes.INTEGER, comment: "角色ID"},
            cid: {type: DataTypes.INTEGER, comment: "英雄配置ID"},
            soldierId: {type: DataTypes.INTEGER, comment: "兵种ID"},
            name: {type: DataTypes.STRING, comment: "名字"},
            star: {type: DataTypes.INTEGER, comment: "星级"},
            Influence: {type: DataTypes.STRING, comment: "政治影响力"},
            leadership: {type: DataTypes.STRING, comment: "统御力"},
            amount: {type: DataTypes.INTEGER, comment: "人数"},
            g_amount: {type: DataTypes.INTEGER, comment: "成长人数"},
            attack: {type: DataTypes.INTEGER, comment: "攻击"},
            g_attack: {type: DataTypes.INTEGER, comment: "成长攻击"},
            defence: {type: DataTypes.INTEGER, comment: "物理防御"},
            g_defence: {type: DataTypes.INTEGER, comment: "成长物理防御"},
            magicAttack: {type: DataTypes.INTEGER, comment: "魔法攻击"},
            magicDefence: {type: DataTypes.INTEGER, comment: "魔法防御"},
            g_magicDefence: {type: DataTypes.INTEGER, comment: "成长魔法防御"},
            quality: {type: DataTypes.INTEGER, comment: "品质", defaultValue: 1},
            intelligence: {type: DataTypes.STRING, comment: "资质"},
            avatar: {type: DataTypes.STRING, comment: "头像",defaultValue: '1'},
            desc: {type: DataTypes.STRING, comment: "英雄简介"},

            level: {type: DataTypes.INTEGER, comment: "等级", defaultValue: 0},
            maxLevel: {type: DataTypes.INTEGER, comment: "最大等级", defaultValue: 0},
            status: {type: DataTypes.INTEGER, defaultValue: "0", comment: "状态 0:闲置 1:值守"},
            exp: {type: DataTypes.INTEGER, defaultValue: 0, comment: "经验值"},

            activeSkill: {type: DataTypes.INTEGER, defaultValue: 0, comment: "主动技能"},
            passiveSkill1: {type: DataTypes.INTEGER, defaultValue: 0, comment: "被动技能1"},
            passiveSkill2: {type: DataTypes.INTEGER, defaultValue: 0, comment: "被动技能2"}
        },
         {
            instanceMethods: {

            },
            classMethods: {}
        })
};




