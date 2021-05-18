const coursemodel=require('../models/coursemodel');
module.exports.createcourse=function(courseobj,callback){
var course=new coursemodel(courseobj);
course.save(function(err,courseobj){
if(err)
{
console.log("err"+err);
}
else{
callback(err,courseobj);
}
})
}
//module.exports.getallcourses=function(callback){
module.exports.getallcourses=function(req,res){

var query={}

coursemodel.find(query,function(err,courseobjarr){
if(err)
{
//console.log("err"+err);
res.json({error:err});
}
else{
//callback(err,courseobj);
res.json(courseobjarr);
}


})
}