const express = require("express");
const app = express();
const port = 3000;
app.get("/", function(req, res){
  res.send("<h1>hello world</h1>");
});

app.get("/contact", function(req, res){
  res.send("contact me at : Hieu@#gamil.com")
});
app.listen(port, function(){
  console.log("Server is Started on port :"+ port);
});
