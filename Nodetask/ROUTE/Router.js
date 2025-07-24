 const express = require('express')
 const router =  express.Router()
 const {Create_user,Login_user,Me,Get_User,Logout} = require("../Controller/Controller")
 const {isAuth,isAdmin} = require("../Middleware/AuthMiddleware")

 router.post("/Registration",Create_user)
 router.post("/login",Login_user)
 router.get("/me",isAuth,Me)   //PROTECTED ROUTE ONLY LOGIN USER Can access it 
 router.get("/users",isAuth, isAdmin,Get_User)
 router.get("/logout",Logout)




 module.exports = router