const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"name is required"]
        }, 
        username:{
            type:String,
            required:[true,"username is required"],
            unique:true,
            trim:true
        } ,
        email:{
            type:String,
            required:[true,"email is required"],
            unique:true,
            lowercase:true,
            trim:true,
            match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"email is  not valid"]

        },
        password:{
            type:String,
            required:[true,"password is requires"],
          minlength:[6,"password must be  al least  6 character long"]
       
        },
        message:{
            type:String,
            required:[true,"message is required"],

        },
        role:{
            type:String,
            enum:["user","admin"],
            default:"user"
        }
        
        

    },
    {
        timestamps:true    // need to ask
    }
)

const User = mongoose.model('user',userSchema)
module.exports= User;