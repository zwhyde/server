module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Soldier',
        {
            cid: {type: DataTypes.INTEGER,comment:"配置ID"},
            name: {type: DataTypes.STRING,comment:"名字"},
            type: {type: DataTypes.INTEGER,comment:"类型"},
            class: {type: DataTypes.STRING,comment:"阶级"},
            amount: {type: DataTypes.INTEGER,comment:"人数"},
            attack: {type: DataTypes.INTEGER,comment:"攻击"},
            defence: {type: DataTypes.INTEGER,comment:"物防"},
            magicDefence: {type: DataTypes.INTEGER,comment:"魔防"},
            hit: {type: DataTypes.INTEGER,comment:"命中"},
            dodge: {type: DataTypes.INTEGER,comment:"闪避"},
            crit: {type: DataTypes.INTEGER,comment:"暴击"},
            tenacity: {type: DataTypes.INTEGER,comment:"韧性"},
            attackType: {type: DataTypes.INTEGER,comment:"攻击属性"},
            attackWay: {type: DataTypes.INTEGER,comment:"攻击方式"},
            attackRange: {type: DataTypes.INTEGER,comment:"攻击范围"},
            features: {type: DataTypes.INTEGER,comment:"特性"},
            desc: {type: DataTypes.STRING,comment:"描述"}
//            soldierLevel: {type: DataTypes.INTEGER},
//            soldierCount: {type: DataTypes.INTEGER}
        },
        {
            timestamps: false
        }, {
            instanceMethods: {

            },
            classMethods: {}
        })
};




