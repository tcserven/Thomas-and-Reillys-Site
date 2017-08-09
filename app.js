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
app.get("/contact-us", function(req, res) {    
    res.render('contact-us');    
});

// The four countries overview pages
app.get("/overview", function(req, res) {    
    res.render('overview');    
});

app.get("/overview/bolivia", function(req, res) {    
    res.render('countries/bolivia');    
});
app.get("/overview/peru", function(req, res) {    
    res.render('countries/peru');    
});
app.get("/overview/ecuador", function(req, res) {    
    res.render('countries/ecuador');    
});
app.get("/overview/colombia", function(req, res) {    
    res.render('countries/colombia');    
});

// city guides
app.get("/city-guides", function(req, res) {    
    res.render('city-guides/city-guide');    
});

app.get("/city-guides/la-paz", function(req, res) {    
    res.render('city-guides/bolivia/la-paz');    
});




// Pages that arent built yet
app.get("/construction", function(req, res) {    
    res.render('construction');    
});


app.listen(port, function() {
	console.log("server has started on " + port);
});