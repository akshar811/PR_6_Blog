const { Router } = require("express");
const { createBlog, craeteblogform, blogs, blog, deleteblog, editblog, singleblog, likeblog, comment, search } = require("../controller/user.controller");
const { authorize, isAuthenticated } = require("../middlewares/auth");
const Routers = Router();
 
Routers.post("/create",createBlog)
Routers.get("/create", craeteblogform)

Routers.get("/blogs",blogs)
Routers.get("/", blog);

Routers.delete("/delete/:id",authorize,deleteblog);

Routers.patch("/edit/:id",authorize,editblog);

Routers.get("/singleBlog/:id",singleblog);

Routers.patch("/like/:id",isAuthenticated,likeblog);

Routers.patch("/comment/:id",isAuthenticated,comment);

Routers.get("/search",search);

module.exports = Routers