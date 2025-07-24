import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, SetCart } from '../redux/CartSlice'
import { FaDollarSign, FaCartPlus ,FaRegArrowAltCircleRight, FaArrowAltCircleRight ,} from 'react-icons/fa'
import { Card, CardText } from 'react-bootstrap'
import {axiosapi} from "../CustomAxios"
import './Offerlist.css'
import { useNavigate } from "react-router-dom";
import {useAuth} from './Authcontext'
import GoogleReviews from "./Googlereview";
 


const offers = [
  {
     name: 'Silver Membership', Price:49,
    for:"Perfect for beginners and those returning to training",
     validity:'valid for 12 months',
    discription: 'Unlimited access to yoga classis ,27/7 Gym Access ,Use Of Locker and Showers'
  }, ,
  {
     name: 'Golden Membership', Price:99,
     for:'Ideal for advanced trainner',
     validity:'valid for 12 months',
    discription: 'Unlimited access to yoga classis ,27/7 Gym Access ,Use Of Locker and Showers, Weekday Pool Access'
  },

  {
    name: 'Patenium  Membership', Price:199,
    for:'Perfect for commited trainers',
    validity:'valid for 12 months',
    discription: 'Unlimited access to yoga classis,27/7 Gym Access ,Use Of Locker and Showers Access to Pool 7days a week 12% off on All the store Products,Free Gym T-shirt'
  },
]

const OfferList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const user = useSelector(state=>state.auth.user)
  const { user } = useAuth();  
  const cartItems = useSelector(state => state.cart.cart || [])
  const handletocart =async (offer) => {
if(!user){
  alert("please register or login to add items in cart")
  navigate('/registration')
  return
}



    const exists  = cartItems.find(item=>item.id === offer.name);
    if(exists){
      alert("items alredy in cart")
      return
    }
    dispatch(AddToCart(offer))
  try{
    const updatedCart = [...cartItems,offer];
    const res = await  axiosapi.post("/cart/add",{cartItems:updatedCart},{
      withCredentials:true,
    })
    if(res.status === 200 ){
      const getRes = await axiosapi.get("/cart/me",{withCredentials:true})
    dispatch(SetCart(getRes.data.cartItems));
    alert("item added in cart sucessfully")}
    else{
      throw new Error("failed to add to backend ")
    }
  }catch(error){
    console.error("Add to cart error",error.message)
    alert("failed to add item into cart")
  }
  }



  return (

    <>
       <h1 className="heading">Choose Your Pricing plan</h1> 
    <br />
    <div className="style-div">  
      
       </div>
     
      <div className="main-cart-container">
       
     

      {offers.map((offer) => ( 
        <div className="cart-container1"  key={offer.id || offer.name}  >
 
              <Card style={{ width: '18rem' }} className="card" >
                <Card.Body className="card-body">
                  <Card.Title className="title"
                  ><FaDollarSign size={28} />
                  {offer.Price}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted name "><h1>{offer.name} </h1></Card.Subtitle>
                  <CardText className="for"> 
             
                     <span><FaArrowAltCircleRight  size={15}/> </span>  
                    {offer.for} 
                  </CardText>
                  <CardText className="validity">
                       {offer.validity}
                  </CardText> <br />
                   <button onClick={() => handletocart(offer)}  className="btn">
                   
                    <FaCartPlus size={24} /> 
                    
                  <h5 >subscribe</h5> </button> <br />
                  
                  <Card.Text className="dis">
                     <span><FaArrowAltCircleRight  size={15}/> </span> 
                     {offer.discription}  
                  </Card.Text>
                  
                  
                 
                </Card.Body>
              </Card>
              </div>
              
 ))}

  </div>
   <br />

  
  <div className="review-container"> 
     <h1 >
    Our Client Review
   </h1> <br />
    
 
  <React.Suspense fallback={<p>Loading reviews...</p>}></React.Suspense>
  <GoogleReviews/>

  

  </div>
   

    </>
    
  )
}

export default OfferList;

