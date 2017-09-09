module.exports = function(sequelize, DataTypes) {
    var Topping = sequelize.define("Topping", {
        nameTopping : {
            type : DataTypes.STRING,
            primaryKey : true,
            validate : {
                len : [1,250]
            }
        }
    }, {
        timestamps : false
    });

    Topping.associate = function(models) {
        Topping.belongsToMany(models.Burger, {
            through: "BurgerTopping"
        });
    }

    return Topping;
};