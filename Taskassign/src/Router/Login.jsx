import React from "react";
import './Login.css'
import { useAuth } from "./Authcontext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup'
import { axiosapi } from "../CustomAxios";

 


const Log_form = ()=>{
    const {setUser} = useAuth()
    const navigate = useNavigate()
      
    const formik = useFormik({
        initialValues:{
            identifier:"",
            password:""
        },
        validationSchema:yup.object({
            identifier:yup.string().required("username or email is required"),
            password:yup.string().required("password is required")
        }),
        onSubmit:async(values)=>{
            try{
                const res = await axiosapi.post('/login',values,{
                    withCredentials:true,
                })
                setUser(res.data.user);
                alert(res.data.msg || "login succesfull");

                if(res.data.user.role === 'admin'){
                    navigate('/admindashboard')
                }else{
                    navigate('/user-dashboard')
                }
            }catch(err){
                alert(err.response?.data?.msg ||err?.message || "something went wrong")
            }
        }
    })
      
    return(
        <>
         <div className="login-form">
             
            <div className="logmargin"> 
            <form onSubmit={formik.handleSubmit} className="form1">
                <h1>Login</h1>
                  <label htmlFor="identifier" className="lable">Username/Email</label>
                  <input type="text" name="identifier"  id="identifier" autoComplete="off" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.identifier}className="input1" />
                  {formik.touched.identifier && formik.errors.identifier && <div className="error">{formik.errors.identifier}</div> } 
                
                <label htmlFor="password" className="lable">Password</label>
                  <input type="password" name="password" id="password" autoComplete="off" onChange={formik.handleChange}
                   onBlur={formik.handleBlur} value={formik.values.password} className="input1" />
                  {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>} 
                  <button type="submit" className="sbmit"  disabled={formik.isSubmitting}>{formik.isSubmitting? "Logging in...":"Login"}</button>
               
            </form>
            </div>
         </div>
        </>
    )
}
export default Log_form;