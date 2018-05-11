var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burger', function(res){
            cb(res);
        });
    },
    post: function(value, cb){
        orm.post('burger',  value, function(res){
            cb(res);
        });
    },
    put: function(selected, cb){
        orm.put('burger', selected,  function(res){
            cb(res);
            console.log("omdels touched");
        });
    },
    deleting: function(selected, cb){
        orm.deleting('burger', selected, function(res){
            cb(res);
        });
    }
};
module.exports = burger;