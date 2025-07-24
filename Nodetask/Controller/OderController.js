  const Order = require("../Schema/OrderSchema")

  const CreateOrder = async (req ,res)=>{
    try{
        const {user , cartItems,totalAmount,paymentMode,paymentStatus,orderStatus} = req.body

        if(!cartItems || !Array.isArray(cartItems)||cartItems.length === 0){
            return res.status(400).json({error:"total amount and payment mode are required"})
            
        }
        const newORDER = new Order ({
            user:req.user._id || req.user.id,
            cartItems,
            totalAmount,
            paymentMode,
            paymentStatus:paymentMode === "cod"?"pending":"paid",

        })
        console.log("Creating Order With:");
       console.log("User:", req.user);
       console.log("Body:", req.body);

        await newORDER.save();
        res.status(201).json({
            success:true,
            message:"Order Placed Sucessfully",
            order:newORDER,
        })

    }catch(error){
    console.error("Order Creation Failed",error)
    res.status(500).json({error:error.message})
    }
}

const GetOrders = async (req,res)=>{
    try{
        console.log(" User from middleware:", req.user); // check if this logs correctly
        const userId = req.user._id 
        console.log("fetching order for user",userId)
        const orders = await Order.find({user:userId}).sort({createdAt:-1}).populate('user','name email');
        console.log("orderr found",orders.length)
        res.status(200).json({
            success:true,
            orders,
        });
    }
    catch(error){
        console.error("error fetching user orders",error)
        res.status(500).json({error:"server error"})
    }
}



module.exports = {CreateOrder,GetOrders}





 