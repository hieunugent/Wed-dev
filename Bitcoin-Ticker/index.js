const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req,res){
  res.sendFile(__dirname +"/index.html");
});
app.post("/", function(req,res){
  // console.log(req.body.crypto);
  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  console.log(crypto);
  console.log(fiat);
  var cryptofulln = "";
  if (crypto === "BTC"){
    cryptofulln = "Bitcoin";
  }
  else if(crypto === "ETH" ){
    cryptofulln = "Etherium";
  }
  else{
    cryptofulln = "Litecoin";
  }
  var amount = req.body.amount;
  var options={
    url: "https://apiv2.bitcoinaverage.com/convert/global",
    method: "GET",
    qs: {
      from: crypto,
      to: fiat,
      amount: amount

    }
  };
  request(options,function(error, response, body){
  var data = JSON.parse(body);
  var price = data.price;// converse json data to js object.
  console.log(price);

  res.send("<h1> The price of "+cryptofulln+" is " + price + " " + fiat + "</h1>");
  });
});
app.listen(3000, function(){
  console.log("Server is runnig on port 3000");
});
