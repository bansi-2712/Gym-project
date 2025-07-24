 
 import {useDispatch,useSelector} from "react-redux"
 import {RemoveFromCart, SetCart} from '../redux/CartSlice'
 import {Card, CardText, Modal, ModalHeader,Button} from 'react-bootstrap'
 import {FaDollarSign,FaMinusSquare,FaArrowAltCircleRight} from 'react-icons/fa'
 import BuyNowModal, {} from '../Router/BuyNowModel'
 import {useAuth} from './Authcontext'
 

 import './Cart.css'
import { useState } from "react"
import { axiosapi } from "../CustomAxios"
import { Navigate } from "react-router-dom"
// import { selectClasses } from "@mui/material"


 const Cart = ()=>{

    const cartItems = useSelector(state=>state.cart.cart || [])
    const dispatch = useDispatch()
      const { user } = useAuth();
    // console.log(cartItems)
   
   const totalAmount = cartItems.reduce((sum,item)=> {
       const price = Number(item.Price);
       return sum+(isNaN(price)? 0:price)
   },0)

   const [ShowPaymentOptions,setShowPaymentOptions] = useState(false);
   const [SelectedItems , SetSelectedItems]=useState(null)
   //handle buynow button
   const handleBuyNow = async(mode)=>{

  
    if(!user){
        alert("please login to place an order")
        Navigate("/login")
         return
    }
    if(!SelectedItems || SelectedItems.length === 0) return;

    const itemsToBuy = Array.isArray(SelectedItems)? SelectedItems:[SelectedItems];
    const total = itemsToBuy.reduce((sum,item)=>{
        const price = Number(item.Price)
        return sum+ (isNaN(price)?0:price)
    },0)
    console.log("items", itemsToBuy)
    console.log("total amount", total)
    try{
        const res = await axiosapi.post("/Create",{
            cartItems:itemsToBuy,
            totalAmount:total,
            paymentMode:mode,
             paymentStatus:mode === "cod"?"pending":"paid"
        },{
            withCredentials:true
        })
        alert(res.data.message)
      setShowPaymentOptions(false)
      SetSelectedItems(null)
    }catch(error){
        console.error("order failed",error.response.data || error.message);
        alert("order failed")
    }
   }
   const handleRemove  = async(itemId)=>{
    try{
        const res = await axiosapi.delete(`/cart/remove/${itemId}`,{
            withCredentials:true,
        });
        dispatch(SetCart(res.data.cartItems))
        alert("items removed fromcart")
    }catch(err){
        console.error("error removing items",err.message)
        alert("failed to remove items")
    }
   }

    return(
        <>
     <div className="cartt-container">
      <h1 className="heading-txt">Your Selected Plan</h1>
      <h5 className="i-txt">Items in your cart:{cartItems.length}</h5>
       <h2>TotalAmount:{totalAmount}</h2>
      

        {cartItems.length>1 &&(
             <button className="btn1"  onClick={()=>{
                SetSelectedItems(cartItems);
                setShowPaymentOptions(true)
             }}
              >
                Buy all 
               
                
             </button>
        )}
     
       { cartItems.length === 0 ? <p>No membership plans added to your cart yet. </p>:(
        cartItems.map((item,index)=>(
          
            
    <div className="Removecart-container" key={item._id || `${item.id}-${index}`}>
        

 
 <Card style={{width:'18rem'}}  className="cart-card-container">
      <Card.Body className="card-body1">
        <Card.Title className="title1"> <FaDollarSign size={24}/>{item.Price}</Card.Title>
         <Card.Subtitle className="mb-2 text-muted name1">{item.name}</Card.Subtitle>
         <CardText className="cart-valid"> 
            {item.validity}
         </CardText>  
         <CardText className="cart-for"> 
            
            <span> <FaArrowAltCircleRight/> </span>
                {item.for} 
             
              
         </CardText> 
         <br />
          
        <Card.Text className="dis">
            <span><FaArrowAltCircleRight/> </span>

         {item.discription}
        </Card.Text >
        <div className="btn">
         <button onClick={()=>handleRemove(item._id)} className="btn1"><FaMinusSquare size={20}/> <h3>Remove</h3></button>
      
        <button className="btn1" onClick={()=>{SetSelectedItems(item);setShowPaymentOptions(true)}}>BUYNOW</button>
         
         
          
         </div>
      </Card.Body>
      </Card>
     
      
   
                </div>

                
                 
        ))
       )}

 <BuyNowModal
          open={ShowPaymentOptions}
          handleClose={()=>{setShowPaymentOptions(false) ; SetSelectedItems(null)}}
          handleBuyNow={handleBuyNow}
          selectedItems={SelectedItems}
          />
     </div>

        
        </>
    )
 }

export default Cart

