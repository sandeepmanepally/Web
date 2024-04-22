const express = require("express");
const bodyParser = require("body-parser");
const server = express();

server.set('view engine','ejs');
server.use(bodyParser.urlencoded({extended:false}))

const PORT = 3000;

server.get("",(req,res)=>{
    res.render("index")
})

server.get("/login",(req,res)=>{
    res.render("login");
})

server.get("/home",(req,res)=>{
    res.send("HOME PAGE");
})

server.post("/login",(req,res)=>{
    var name =  req.body.name;
    var password = req.body.pass;
    if(name == "sandeep" && password == "pass"){
        res.render("secret",{username:name});
    }
    else{
        res.send("wrong details")
    }
})


server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})