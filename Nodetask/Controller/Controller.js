 const User = require('../Schema/Schema')
 const bcrypt = require('bcrypt')
 const jwt = require('jsonwebtoken')
  
 const Create_user = async (req ,res)=>{
    try{
         const {name,username,email,password,message} = req.body
         
        //  if(email || username){
        //     return res.status(400).json({msg:"email or username is alredy exists"})
        //  }
        
        const existinguser = await  User.findOne({$or:[{email},{username}]})
        if (existinguser){
            return res.status(400).json({msg:" email or username  is  already exists"})
        }
        const salt  =  await bcrypt.genSalt()
        const Hashedpassword = await bcrypt.hash( password , salt)

        const newUser = new User({
            name,username,email,password:Hashedpassword,message
        })
        const SaveUser = await newUser.save()
        console.log("saveuser", SaveUser)
        res.status(200).json({msg:"Registration succesfull" })

    }catch(err){
        console.log("registration err",err)
        res.status(404).json({msg:"registration failed",error:err.message})
    }
 }
 const Login_user = async(req,res)=>{
    try{
        const { identifier,password} = req.body;
        console.log("login",identifier,password)
        if(!identifier || !password){
            return res.status(400).json({msg:"all feild are required"})
        }
        const user = await User.findOne({$or:[{email:identifier},{username:identifier}]})

        if(!user){
            return res.status(400).json({msg:"user is not found"})
        }
        const ismatch = await bcrypt.compare(password,user.password)
        if(!ismatch){
            return res.status(400).json({msg:"password does not match"})
        }
        const token = jwt.sign({
            _id:user._id,
            username:user.username,
            email:user.email,
         
            role:user.role
        },process.env.JWT_SECRET,{expiresIn:'1d'})

        // set token in htttp only cookie
        res.cookie(process.env.COOKIE_NAME,token,{
            httpOnly:true,
            secure:process.env.COOKIE_SECURE === 'true',
            sameSite:"Strict",
            maxAge:parseInt(process.env.COOKIE_EXPIRE)
        });
        const {password:_, ...userData} = user._doc;
        res.status(200).json({msg:"login sucessfully", user:userData})
    }catch(err){
            console.error("login error",err)
            res.status(500).json({msg:"login failed",error:err.message})
    }
 }
 const Me = async(req,res)=>{
    try{
        //req.user  was added in is AUTH IN MIDDLEWARE
        const  user = await User.findById(req.user._id).select('-password')
        if(!user){
            return res.status(404).json({msg:"user is not found"})
        }
        res.status(200).json({user})
    }catch(err){
        res.status(500).json({msg:"failed to fetch user",error:err.message})
    }
 }
 const Get_User = async(req,res)=>{
    try{
        const getuser = await User.find({},'-password')   //fetch all user except password
        res.status(200).json({users:getuser})
    }catch(error){
        res.status(500).json({msg:"failed to fetcdh user",error:error.message})
    }
 }
 const Logout = (req,res)=>{
    res.clearCookie(process.env.COOKIE_NAME,{
        httpOnly:true,
        secure:process.env.COOKIE_SECURE === "true",
        sameSite:"Strict"
    })
    res.status(200).json({msg:"Logout Succesfully"})
 }


 module.exports = {Create_user,Login_user,Me,Get_User,Logout}