const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URL,{
    dbName:'GYMDB'
}).then(()=>{
    console.log("data base connected sucesfully")
}).catch((err)=>{
    console.log('database connection error:',err.message)
})
// const MONGO_URL = process.env.MONGODB_URL
// mongoose.connect( MONGO_URL,
//     {useNewUrlParser:true,useUnifiedTopology:true})
// mongoose.connection.on("connected",()=>{
//     console.log("database connected sucessfully")
// })

// mongoose.connection.on( "error",(err)=>{
//     console.log("database connection on",err)
// })

 
