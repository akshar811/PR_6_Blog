const { Router } = require("express");
const { signups, signup, loginpage, login, createBlog, craeteblogform, blogs, blog, deleteblog, editblog, singleblog, likeblog, Comment, comment, search } = require("../controller/user.controller");
const { authorize, isAuthenticated } = require("../middlewares/auth");

const Route = Router();

Route.get("/user/signup",signups)
Route.post("/user/signup",signup)
Route.get("/user/login",loginpage)
Route.post("/user/login",login)

 
Route.post("/blog/create",createBlog)
Route.get("/blog/create", craeteblogform)

Route.get("/blog/blogs",blogs)
Route.get("/blog/", blog);

Route.delete("/blog/delete/:id",authorize,deleteblog);

Route.patch("/blog/edit/:id",authorize,editblog);

Route.get("/blog/singleBlog/:id",singleblog);

Route.patch("/blog/like/:id",isAuthenticated,likeblog);

Route.patch("/blog/comment/:id",isAuthenticated,comment);

// Route.get("/blog/search",search);


module.exports = Route;
