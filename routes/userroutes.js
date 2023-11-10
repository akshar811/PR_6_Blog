const { Router } = require("express");
const { signups, signup, loginpage, login } = require("../controller/user.controller");

const Route = Router();

Route.get("/signup",signups)
Route.post("/signup",signup)
Route.get("/login",loginpage)
Route.post("/login",login)



module.exports = Route;
