const express = require('express');
courselib=require('./backend/lib/courselib');
const app = express();
const mongoose=require('mongoose');
var password=process.env.Mongo_atlas_password;
var connectionString="mongodb+srv://Srivardhan:"+password+"@cluster0.guaut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString,{});
mongoose.connection.on('connected',function(){
console.log("Database Connected");
});

let request=0;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(function(req,res,next){
console.log("req came");
request++;
next();
});
var arr=[{"name":"srivardhan","email":"srivardhanchilukamarri@gmail.com","userid":1}]

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
app.get("/piechart", function(req, res){
let i=__dirname+"/front end/html/piechart.html";
    res.sendFile(i);
})
app.get("/todo", function(req, res){
let i=__dirname+"/front end/html/todo.html";
    res.sendFile(i);
})

app.post("/api/users",function(req,res){
var user=req.body;
arr.push(user);
res.json(arr);
});
app.delete("/api/users/:del",function(req,res){
var user=req.params.del;
for(var i=0;i<arr.length;i++)
{
if(arr[i]==user)
{
arr.splice(i,i);
}
}
});
app.get("/crud", function(req, res){
let i=__dirname+"/front end/html/crud.html";
    res.sendFile(i);
})
app.get('/api/courses',courselib.getallcourses);
app.post('/api/courses',courselib.createcourse);
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
