const mongoose = require('mongoose');
courselib=require('./backend/lib/courselib');
var connectionString="mongodb+srv://Srivardhan:yamahai455@cluster0.guaut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString,{useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.on('connected',function(){
console.log("Database Connected");

courselib.getallcourses(function(err,coursesArray){
console.log(coursesArray);
})
/*const courselib=require('./backend/lib/courselib');
courselib.createcourse({coursename:'Meanstack course'},function(err,course){
console.log(course);
})*/
//After connected run this code
courselib.createcourse({coursename:'MEANSTACK Course'},function(err,savedObj){
console.log(savedObj);
})