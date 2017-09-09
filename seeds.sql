USE `burger_sequelize`;
INSERT INTO `Toppings` (`nameTopping`) VALUES
("guacamole"),
("cheese"),
("bacon"),
("onions"),
("pickles"),
("mayonnaise"),
("mustard"),
("ketchup"),
("lettuce"),
("tomato");

INSERT INTO `Burgers` (`comment`) VALUES
("Medium Please"),
("Cook it however you want I guess"),
("Ehh is this optional?");

INSERT INTO `BurgerToppings` (`BurgerId`, `ToppingNameTopping`) VALUES
(2, "cheese"),
(2, "onions"),
(2, "ketchup"),
(2, "mustard"),
(3, "mayonnaise"),#that's really gross
(1, "cheese"),
(1, "onions"),
(1, "ketchup"),
(1, "mustard");
