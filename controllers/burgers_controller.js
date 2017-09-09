var express = require("express");
var router = express.Router();

// Import models
var db = require("../models");

//helper function to format the array of burgers and their toppings to return back to the client
function formatBurgers(burgers){
    for(var i = 0; i < burgers.length; i++){
        burgers[i].dataValues.Toppings = formatToppings(burgers[i].dataValues.Toppings);
        burgers[i] = burgers[i].dataValues;
    }
    return burgers;
}
//helper function to format the Toppings
function formatToppings(toppings){
    for(var i = 0; i < toppings.length; i++){
        toppings[i] = toppings[i].dataValues;
    }
    return toppings;
}

//route for main page (gets burgers and toppings)
router.get("/", function(req, res) {
    var promises = [];
    var getBurgersPromise = db.Burger.findAll({
        include : [{
            model : db.Topping,
            through : {
                attributes : ['nameTopping']
            } 
        }]
    });
    var getToppingsPromise = db.Topping.findAll({
        //don't really have any where conditions or joins to perform
    });
    promises.push(getBurgersPromise);
    promises.push(getToppingsPromise);
    //resolve all promises
    Promise.all(promises).then(function(result){
        var myBurgers = result[0];
        var myToppings = result[1];
        var hbsObject = {
            burgers: formatBurgers(myBurgers),
            toppings : formatToppings(myToppings),
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    }, function(err){
        res.status(500).send("Error on the server while getting toppings and burgers. Please try again later");
    });
});

//to update burger (someone ate it)
router.put("/:id", function(req, res) {
    var id = req.params.id;
    db.Burger.update({
        devoured : true,
        dateEaten : new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        where : {
            "id" : id,
        }
    }).then(function(data){
        console.log(data);
        res.redirect("/");
    }).catch(function(err){
        console.log(err);
        res.status(500).send("Error updating burger with id: " + id);
    });
})

//to create a burger
router.post("/", function(req, res){
    var formData = req.body;
    console.log(formData);
    db.Burger.create(formData.burger).then(function(myBurger){
        myBurger.setToppings(formData.toppings).then(function(data){
            console.log(data);
            res.json(data);
        }).catch(function(err){
            console.log(err);
            res.status(500).send("Error making a burger. Please try again later");
        });
    }).catch(function(err){
        console.log(err);
        res.status(500).send("Error making a burger. Please try again later");
    });
});

// Export routes for server.js to use.
module.exports = router;