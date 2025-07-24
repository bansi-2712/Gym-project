 import React, { createContext, useContext, useEffect, useState } from "react";
 import {axiosapi} from '../CustomAxios'

 const AuthContext = createContext();
 export const  AuthProvider = ({children})=>{
  const [user ,setUser] = useState(null);
  const[loading , setLoading] = useState(true)

  useEffect(()=>{
    const fetchUser = async()=>{
      try{
        const res = await axiosapi.get("/me",{withCredentials:true})
        setUser(res.data.user)
      }catch(err){
        setUser(null)
      }
      finally {
      setLoading(false);  // ✅ MUST add this
    }
    }
    fetchUser()
  },[])

  return(
      <AuthContext.Provider value={{user,setUser,loading}}>
        {children}

      </AuthContext.Provider>
  )
 }
 export const useAuth = ()=> useContext(AuthContext)