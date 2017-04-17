const express = require('express'),
	  path = require('path');


const port = process.env.PORT || 3000;



var app = express();

// serve up the public folder
app.use(express.static(path.join(__dirname, "/app/public/")));


app.get("/", function(req, res) {    
    res.sendFile(__dirname + "/app/public/" + 'index.html');    
});

app.get("/test2", function(req, res) {
    res.sendFile(__dirname + "/app/public/" + "test2.html");
    
});


app.get("/test", function(req, res) {
    res.sendFile(__dirname + "/app/public/assets/html/" + "test.html");
    
});





app.listen(port, function() {
	console.log("server has started on " + port);
});