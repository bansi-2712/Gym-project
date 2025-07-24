 require('dotenv').config()
  //this import doten pagae and 2nd  tells it to read your.env file and loAD IT  INTO PROCESS.ENV
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
 const CoOkieParser = require('cookie-parser')
const UserRoute = require("./ROUTE/Router")
const OrderRoute = require("./ROUTE/OrderRoute")
const CartRoute = require("./ROUTE/CartRoute")



const app = express();
 app.use(helmet())
//  app.use(helmet({
//   contentSecurityPolicy: false, //  during deployment if Disable this only if your app breaks from CSP rules
// }));


require('./Database')
console.log("index.js running")
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',').map(O=>O.trim());
 app.use(cors({
    origin: (origin,callback)=>{
       console.log("Incoming origin:", origin);
      if(!origin || allowedOrigins.includes(origin)){
         callback(null ,true)
      }else{
         callback(new Error(`cors blocked by policy${origin}`))
      }
    },
    credentials:true,
    optionsSuccessStatus:200
 }))
 app.use(CoOkieParser())
 app.use(express.json())
 app.use("/api",UserRoute)
 app.use("/api",OrderRoute)
 app.use("/api/cart",CartRoute)

 
const PORT = process.env.PORT || 5000
//  app.get('/',(req,res)=>{
//     res.send("server started")
//  })

 app.listen(PORT,()=>console.log(`server just has started on port ${PORT} `))
