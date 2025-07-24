import { useEffect, useState } from 'react'
import {lazy ,Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Routes,Route, Navigate}from 'react-router-dom'
const Home  = lazy (()=>import('./Router/Home'))
const About  = lazy (()=>import('./Router/About'))
const Gallary = lazy (()=>import ('./Router/Gallary'))
const Log_form = lazy (()=>import('./Router/Login'))
const Reg_form  = lazy (()=>import('./Router/Registration'))
const Navbar = lazy (()=>import('./Router/Nav'))
import Api from './Router/Gymapi'
const OfferList   = lazy (()=>import('./Router/Offerlist'))
const Cart = lazy (()=> import ('./Router/Cart'))
const AdminDashboard = lazy (()=>import('./Router/Admindashboard'))
import ProtectedAdminRoute from './Router/ProtectAdminRoute'
import LoadCartOnMount from './Router/LoadCartOnMount'
 
import { axiosapi } from './CustomAxios'
 
import { useAuth } from './Router/Authcontext'
 const UserDashboard = lazy (()=>import('./Router/UserDashboard'))

 

 

function App() {
  
  const {setUser} = useAuth()

  useEffect(()=>{
    const fetchUser =  async()=>{
      try{
        const res = await axiosapi.get("/me",{withCredentials:true});
        setUser(res.data.user)  // update context
      }catch(err){
      setUser(null)  
      }
    }
    fetchUser()
  },[])
   

  return (
    <>
    <LoadCartOnMount/>
    <Navbar/>
    <Suspense fallback={<div style={{ color: 'white' }}>Loading...</div>}>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='gallary' element={ <div className="card-container"> 
     {console.log("API length is:", Api.length)} 
     {Api.map((item,index)=>{
      return(
        
      <Gallary
        key={index}
        img={item.img}
        name={item.name}
        target={item.target}
        discription={item.discription}
        />
        
      )
     })}
     </div>} />
     <Route path='offerlist' element={<OfferList/>}/>
     {/* <Route path='offerlist' element={<Cart/>}/> */}
      <Route path='login' element={<Log_form/>}/>
      <Route path='registration' element={<Reg_form/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='admindashboard' element={
        <ProtectedAdminRoute>
        <AdminDashboard/>
        </ProtectedAdminRoute> 
         
      }/>
      <Route path='*' element={<Navigate to= "/login"/>}/>
      <Route path='user-dashboard' element={<UserDashboard/>}/>
          
    </Routes>
        </Suspense>
      
      
    </>
  )
}

export default App
