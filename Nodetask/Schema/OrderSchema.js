const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true,
    },
    cartItems:[
        {
            id:String,
            name:String,
            price:Number,
            for:String,
            validity:String,
            description:String

        }
    ],
    totalAmount:{
      type:Number,
      required:true
    },
    paymentMode:{
        type:String,
        enum:["cod","online"],
        required:true,
    },
    paymentStatus:{
        type:String,
        enum:["pending","paid"],
        default:"pending",
    },
    orderStatus:{
        type:String,
        enum:["Processing","complate","cancelled"],
        default:"Processing",
    }
   
},
 {timestamps:true})


 
  const Order = mongoose.model("Order",orderSchema)
  module.exports = Order
