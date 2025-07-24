 const express = require("express")

const {CreateOrder,GetOrders} = require("../Controller/OderController")
const {isAuth}  =require("../Middleware/AuthMiddleware")

 const router = new express.Router()

 router.post('/Create',isAuth,CreateOrder)
 router.get('/order',isAuth,GetOrders)

 module.exports = router

