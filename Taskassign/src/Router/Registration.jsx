 
import React from "react";
import  {useFormik}  from "formik"
import * as yup from "yup"
import { useNavigate} from 'react-router-dom'
import { axiosapi } from "../CustomAxios";
import {Link} from "react-router-dom"
import './Registration.css'
 


  export const Reg_form = ()=>{
    const navigate = useNavigate();
    const formik =  useFormik({
      initialValues:{
        name:"",
        username:"",
        email:"",
        password:"",
        message:"",
      },
      validationSchema:yup.object({
        name:yup.string().required('name is required'),
        username:yup.string().required('username is required'),
        email:yup.string().email('invalid email').required("email is required"),
        password:yup.string().min(6,"password must be at least 6 characters").required("password is required"),
        message:yup.string().required("message is required")
      }),

      onSubmit: async(values,{resetForm})=>{
        try{
          const res = await axiosapi.post("/Registration",values,{
            withCredentials:true,
          });
          alert(res.data.msg || "registration succesfull");
          resetForm();
          alert("Please login to continue")
          navigate('/login')
        }catch(err){
          alert(err.response?.data?.msg || "registration failed")
        }
      }
    })
     
  
  
 
   

     
    
  

  return (
    <div className="mainform">
      <div className="formmargin">
        <div className="main">
          <form onSubmit={formik.handleSubmit} className="form">
            <h1>Registration Form</h1>
            <div className="name">
              <div className="clm">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  className="input"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                   
                />
                 {formik.touched.name && formik.errors.name && <div className="error">{formik.errors .name}</div>}  
              </div>
              <div className="clm">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  className="input"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                   
                />
                 {formik.touched.username && formik.errors.username  && <div className="error">{formik.errors.username}</div> }
              </div>
            </div>
            <div className="name">
              <div className="clm">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  id="email"
                  autoComplete="off"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                   
                />
                {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
              </div>
              <div className="clm">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  id="password"
                  autoComplete="off"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                   
                />
                {formik.touched.password && formik.errors.password&& <div className="error">{formik.errors.password}</div>}
              </div>
            </div>
            <div className="msg-container">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="msg"
                autoComplete="off"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                 
              ></textarea>
              {formik.touched.message && formik.errors.message && <div className="error">{formik.errors.message}</div>}
              <p className="logtxt">registered alredy?/ <Link className="login" to='/login'>Login</Link></p>  
              <input type="submit" className="sbt" value={formik.isSubmitting? "Submitting...":"submit"}  disabled={formik.isSubmitting}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reg_form;
