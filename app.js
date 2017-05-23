const express = require('express'),
	  path = require('path'),
	  bodyParser = require('body-parser');


const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



// serve up the public folder
app.use(express.static(path.join(__dirname, "/app/public/")));


app.get("/", function(req, res) {    
    res.render('index');    
});

app.get("/about-us", function(req, res) {    
    res.render('about-us');    
});




app.listen(port, function() {
	console.log("server has started on " + port);
});