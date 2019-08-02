const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname + "/index.html");
});
app.post("/", function(req,res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("The result of calculate is: " + result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname +"/bmicalculator.html");
  console.log(__dirname +"/bmicalculator.html");
});
app.post("/bmicalculator", function(req,res){
  var weight = Number(req.body.w);
  var height = Number(req.body.h);
  var n = weight/(height*height);
  n = Math.floor(n);
  res.send("Your BMI is "+ n);
});

app.listen(port, function(){
  console.log("Server is running on Port : " +port);
});
