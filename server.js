// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
const logger = require('morgan');
const path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"))

// Static directory
app.use(express.static("public"));
// require("./routes/html_routes.js")(app);
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start express server
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});