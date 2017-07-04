const express = require('express'),
	  path = require('path'),
	  bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


// serve up the public folder
app.use(express.static(path.join(__dirname, "/app/public/")));


app.get("/", function(req, res) {    
    res.render('index');    
});

app.get("/about-us", function(req, res) {    
    res.render('about-us');    
});

// The four countries overview pages
app.get("/overview", function(req, res) {    
    res.render('our-journey');    
});

app.get("/overview/bolivia", function(req, res) {    
    res.render('countries/bolivia');    
});




app.listen(port, function() {
	console.log("server has started on " + port);
});