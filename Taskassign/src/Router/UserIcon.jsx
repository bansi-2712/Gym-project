
import { useEffect, useRef, useState } from "react";
import {FaUserCircle} from "react-icons/fa"
import { useSelector } from "react-redux"
import { replace, useNavigate } from "react-router-dom";
import './UserIcon.css'
import { axiosapi } from "../CustomAxios";
import {useAuth} from '../Router/Authcontext'




const UserIcon = ()=>{
    // const user = useSelector((state)=>state.auth.user);
    const {user,setUser} = useAuth();
    // console.log("user on refresh",user)
    const navigate = useNavigate()
    const [showDetail ,setshowDetail]=useState(false)
    const dropdownref = useRef()

    //cloce drop down if click out side 
    useEffect(()=>{
      const handleClickOutside = (event)=>{
        if(dropdownref.current && !dropdownref.current.contains(event.target)){
          setshowDetail(false)
        }
      };
      document.addEventListener("mousedown",handleClickOutside)
      return()=>{
        document.removeEventListener("mousedown",handleClickOutside)
      }
    },[])
    if(!user){
      
        return null
    }
    const handleiconClick = ()=>{
      setshowDetail((prev)=>!prev)
    };
    const handleDashboardRedirect= ()=>{ 
      console.log("redirecting for user",user)
      console.log("userrole", user.role)
      if(!user) return ;
      const path = user.role === 'admin'? '/admindashboard':'/user-dashboard';
      setTimeout(()=>{
        navigate(path)
      },50)
        // if(user.role === 'admin'){
        //     navigate('/admindashboard') ,{replace:true}
        // }
        // else{
        //     navigate('/user-dashboard'),{replace:true}
        // }
        // setTimeout(()=>setshowDetail(false),100)
        setshowDetail(false)
        
}
 const handleLogout = async()=>{
  try{
    await axiosapi.get('/logout', {withCredentials:true});
    setUser(null);
    navigate('/login')
  }catch(err){
    console.error("logout failed:", err)
    alert("logout failed")
  }
 }
    return(
        <>

        <div className="user-icon-container"
        ref={dropdownref}
          // onMouseEnter={()=>setshowDetail(true)} 
          //    onMouseLeave={()=>setshowDetail(false)}
             >
          
            <FaUserCircle size={30} className="user-icon" onClick={handleiconClick} style={{cursor:"pointer"}}
               />
                {showDetail &&(
                      <div className="user-dropdown">
                        <p><strong>Name:</strong>{user.name}</p>
                        <p><strong>Email:</strong>{user.email}</p>
                        <p><strong>Role:</strong>{user.role}</p>
                        <button onClick={handleDashboardRedirect}>Dashboard</button> <br />
                         <button onClick={handleLogout} className="logout-btn">Logout</button>
                      </div>   
                )}
        </div>
    
        </>
    )




}
export default UserIcon;
