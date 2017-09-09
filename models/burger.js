module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        comment : {
            type: DataTypes.STRING,
            allowNull : true,
            validate : {
                len : [0,250]
            }
        },
        dateCreated : {
            type: DataTypes.DATE(6),
            allowNull : false,
            defaultValue : sequelize.literal('CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)')
        }, 
        devoured : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : false
        },
        dateEaten : {
            type: DataTypes.DATE,
            allowNull : true,
            defaultValue : null
        }
    }, {
        timestamps: false
    });

    Burger.associate = function(models){
        Burger.belongsToMany(models.Topping, {
            through: models.BurgerTopping
        });
    }

    return Burger;
};