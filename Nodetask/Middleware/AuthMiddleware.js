
const jwt = require("jsonwebtoken")
const User = require("../Schema/Schema")
const isAuth = async(req,res,next)=>{
    try{
    const token =  await req.cookies[process.env.COOKIE_NAME];
    if(!token){
        return res.status(401).json({msg:"Unauthorized:no token found"})
    }
    
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id).select("-password")       
        console.log("decode token  middleware",decoded)
        next();
    }catch(err){
        return res.status(401).json({msg:"Invalid token"})
    }
}
const isAdmin = (req,res,next)=>{
    if(req.user.role !== "admin"){
        return res.status(403).json({msg:"access denied:admin only "});
    }
    next()
}

module.exports = {isAuth,isAdmin}