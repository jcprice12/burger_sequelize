module.exports = function(sequelize, DataTypes) {
    var BurgerTopping = sequelize.define("BurgerTopping", {

    }, {
        timestamps : false
    });

    return BurgerTopping;
};