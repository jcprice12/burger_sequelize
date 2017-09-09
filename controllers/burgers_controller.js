var express = require("express");
var router = express.Router();

// Import models
var db = require("../models");

//helper function to format the array of burgers and their toppings to return back to the client
// function formatBurgers(burgersToppings){
//     for(var i = 0; i < burgersToppings.length; i++){
//         var toppings = burgersToppings[i].toppings;
//         var toppingsArr = toppings.split(',');
//         toppings = [];
//         for(var j = 0; j < toppingsArr.length; j++){
//             var toppingObj = {
//                 "nameToppings" : toppingsArr[j],
//             }
//             toppings.push(toppingObj);
//         }
//         burgersToppings[i].toppings = toppings;
//     }
//     return burgersToppings;
// }

//route for main page (gets burgers and toppings)
router.get("/", function(req, res) {
    // var promises = [];
    // promises.push(burger.getBurgers());
    // promises.push(topping.getToppings());
    // //resolve all promises
    // Promise.all(promises).then(function(result){
    //     var myBurgers = formatBurgers(result[0]);
    //     var hbsObject = {
    //         burgers: myBurgers,
    //         toppings : result[1],
    //     }
    //     console.log(hbsObject);
    //     res.render("index", hbsObject);
    // }, function(err){
    //     res.status(500).send("Error on the server while getting toppings and burgers. Please try again later");
    // });
    res.end();
});

//to update burger (someone ate it)
router.put("/:id", function(req, res) {
    // var id = req.params.id;
    // burger.devourBurger(id)
    // .then(function(data){
    //     console.log(data);
    //     res.redirect("/");
    // }).catch(function(err){
    //     console.log(err);
    //     res.status(500).send("Error updating burger with id: " + id);
    // });
    res.end();
})

//to create a burger
router.post("/", function(req, res){
    // var formData = req.body;
    // console.log(formData);
    // burger.createBurger(formData.burger, formData.toppings)
    // .then(function(data){
    //     console.log(data)
    //     res.json(data);
    // }).catch(function(err){
    //     console.log(err);
    //     res.status(500).send("Error making a burger. Please try again later");
    // });
    res.end();
});

// Export routes for server.js to use.
module.exports = router;