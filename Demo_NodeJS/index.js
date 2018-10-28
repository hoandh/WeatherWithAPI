var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen("8080");
console.log("Sever waiting for in the port 8080");

app.get("/", function(req, res){
    res.render("homepage");
})