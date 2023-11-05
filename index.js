const express = require('express');

const connect = require('./config/db');
const cookies = require("cookie-parser");
const Route = require('./routes/userroutes');
const Fuse = require('fuse.js');

const app = express();
app.use(express.json());
app.use(cookies());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/",Route)


app.get("/", (req, res) => {
    res.send("Welcome to the blog API ");
});

app.listen(8090 , ()=>{
    connect();
    console.log("listening on port 8090");
})
