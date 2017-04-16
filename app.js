const express = require('express');
const port = process.env.PORT || 3000;


var app = express();

// serve up the public folder
app.use(express.static(__dirname + "/app/public"));




app.get("/", function(req, res) {
    res.sendFile('index.html');
    res.send('hi');
});











app.listen(port, function() {
	console.log("server has started on " + port);
});