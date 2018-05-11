var app = require('express');
var router = app.Router();

var burger = require('../models/burger.js');

/// gathers all information regarding burgers 
router.get('/', function( req, res){
    burger.selectAll(function(data){
        var hbsObjext = {
            burger: data
        };
        console.log(hbsObjext);
        res.render('index', hbsObjext);
    });
});

// creates the burger
router.post("/api/burger",function(req,res ){
    burger.post(req.body, function (result){
        res.json({ id:result.insertid });
        console.log(req.body)
    });
});

// changes the burger 
router.put("/api/burger/:id", function(req, res){

    var condition = " id =" + req.params.id;

    burger.put(condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(202).end();
        }
    });
});// .put

// deeletes the burger 
router.delete("/api/burger/:id", function(req, res){
    var condition = " id = " + req.params.id;

    console.log( "condition", condition);

    burger.deleting( condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(202).end();
        }
    } );
});//.delete


module.exports = router;