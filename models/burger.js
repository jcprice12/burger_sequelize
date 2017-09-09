module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        comment : {
            type: DataTypes.STRING,
            allowNull : true,
            defaultValue : "",
            validate : {
                len : [0,250]
            }
        },
        dateCreated : {
            type: DataTypes.DATE,
            defaultValue : sequelize.literal('NOW()'),
            allowNull : false
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