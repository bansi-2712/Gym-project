const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
   cartItems:[
    {
        _id:{type:mongoose.Schema.Types.ObjectId,auto:true},
        id:String,
        name:String,
        Price:Number,
        for:String,
        validity:String,
        discription:String,

    }
   ]
})

const Cart = mongoose.model("Cart",CartSchema)

module.exports = Cart
