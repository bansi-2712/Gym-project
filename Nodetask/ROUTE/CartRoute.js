const express = require("express")
const router = express.Router()

const {isAuth} = require("../Middleware/AuthMiddleware")

const {CreateCart,GetCart,RemoveCart} = require("../Controller/CartController")

router.post("/add",isAuth,CreateCart);
router.get("/me",isAuth,GetCart)
router.delete("/remove/:id",isAuth,RemoveCart)



module.exports = router

