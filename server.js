const express = require('express');
 
const app = express();

app.use(express.static(__dirname+"/front end"));
 
app.get("/", function(req, res){
let i=__dirname+"/front end/html/site.html";
    res.sendFile(i);   
})
app.get("/resume", function(req, res){
let i=__dirname+"/front end/html/resume.html";
    res.sendFile(i);
})
app.get("/search", function(req, res){
let i=__dirname+"/front end/html/search.html";
    res.sendFile(i);
})
app.get("/colour", function(req, res){
let i=__dirname+"/front end/html/colour.html";
    res.sendFile(i);
})
app.get("/register", function(req, res){
let i=__dirname+"/front end/html/registration.html";
    res.sendFile(i);
})
app.get("/login", function(req, res){
let i=__dirname+"/front end/html/login.html";
    res.sendFile(i);
})
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
