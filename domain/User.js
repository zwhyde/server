module.exports = function (sequelize, DataTypes) {
    return sequelize.define("User", {
            userId:{type:DataTypes.INTEGER, primaryKey: true, unique: false  },
            name: {type: DataTypes.STRING, primaryKey: false, unique: true  },
            password: {type: DataTypes.STRING, primaryKey: false, unique: false  },
            createTime: {type: DataTypes.BIGINT, primaryKey: false, unique: false  },
            loginTime: {type: DataTypes.BIGINT, primaryKey: false, unique: false  },
            isOnline: {type: DataTypes.BOOLEAN, primaryKey: false, unique: false, allowNull: false, defaultValue: false},
        },

        {
            instanceMethods: {

            },
            classMethods: {
                aa:function(){
                    console.log(534534);
                }
            },
            timestamps: false
        },
        {
            timestamps: false
        }
    )
};




