var express = require('express');
var bodyP = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle dat parsing 
app.use(bodyP.urlencoded({ extended: true }));

// parsing application/json
app.use(bodyP.json());

// set handlebars 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ default: "main" }));
app.set("view engine", "handlebars");

// setting up static server 
app.use(express.static(path.join(__dirname, "/public")));

// importing routes and giving server access to them 
var routes = require('./controllers/burgers_controller');

app.use(routes);

// having server listen 
app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`);
});