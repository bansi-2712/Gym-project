const Cart = require('../Schema/CartShema')

const CreateCart = async(req,res)=>{
    const userId =req.user._id   // coming from middlesqwareis auth

    const { cartItems} =req.body;
    try{
         const existing = await Cart.findOne({user:userId})


         if(existing){
         existing.cartItems  =cartItems;
         await existing.save()
         }else{
            await Cart.create({user:userId,cartItems})
         }
         res.status(200).json({message:"Cart saved Succesfully"})
    }catch(err){
        console.error("cart error",err)
        res.status(500).json({error:"Failed to save cart"})
    }
};
const GetCart = async(req,res)=>{
    const userId = req.user._id;     ///✅ This line gets the user's _id from the JWT token, which was extracted using the isAuth middleware.We need this so we can save the cart per user.
    console.log("get-cart-for-user",userId)
    try{
        const cart = await Cart.findOne({user:userId})

        if(!cart){
            return res.json({cartItems:[]})
}
     res.status(200).json({cartItems:cart.cartItems})
    }catch(error){
        console.log("cart-get-error",error)
        res.status(500).json({error:"failed to fetch cart"})
    }

};

const RemoveCart = async(req,res)=>{
    try{
         
        const userId= req.user._id;
        const itemId = req.params.id 

        const cart = await Cart.findOne({user:userId})
        if(!cart){
            return res.status(404).json({message:" cart is not found "})
        }
            // we are fitering out the itme using id
            cart.cartItems = cart.cartItems.filter(
                (item)=> item._id.toString() !== itemId
            )
            await cart.save()
            return res.status(200).json({
                message:"Item remved succesfully",
                cartItems:cart.cartItems
            })
    }catch(error){
        console.error("remove-cart",error)
        res.status(500).json({message:"internal server error"})
    }
}

module.exports = {CreateCart,GetCart,RemoveCart}
