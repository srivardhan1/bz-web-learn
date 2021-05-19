const mongoose = require('mongoose');
var connectionString="mongodb+srv://Srivardhan:yamahai455@cluster0.guaut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString,{useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.on('connected',function(){
console.log("Database Connected");
})
const courselib=require('./backend/lib/courselib');
courselib.createcourse({coursename:'Meanstack course'},function(err,course){
console.log(course);
})
