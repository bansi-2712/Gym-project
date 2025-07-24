import React from "react";
import './About.css'
import strgth from '../assets/stengthjpeg.jpeg'
import loss from '../assets/about2peg.jpeg'
import { motion } from "motion/react"
import Footer from "./Footer";


const About = ()=>{
    return(
    <>
           <div className="bannerimg2" >
        <h1 className="tagline">Train Hard <br />Stay Strong</h1>
        </div>
        <div className="program">
              
            {/*----------- strenghthtraining-------------- */}
            <div className="bg">

           <div className="containt">
            <motion.div className="img-cont"
            initial={{  x: -150, opacity: 0  }}
             whileInView={{ x: 0, opacity: 1, scale: 1.05  }}
              transition={{ duration: 1, ease: 'easeOut' }} 
               viewport={{ once: false }}>
                 
                <img src={strgth} alt="strength trainning" className="img1" />
            </motion.div>
             
 
             < motion.div className="txt"
               initial={{ x: 150, opacity: 0  }}
              whileInView={{ x: 0, opacity: 1, scale: 1.05   }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                     viewport={{ once: false }}>
                <h1>Strength-Traning</h1><br />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia velit inventore quas quos sapiente earum placeat voluptas amet, doloremque sunt qui, molestias, id esse libero a obcaecati saepe veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia velit inventore quas quos sapiente earum placeat voluptas amet?</p>
            </ motion.div>
        </div>
         <br /> <br /> <br />  <br /> <br />
        {/*      FATLOSS/WEIGHTLOSS    */}
        
              <div className="containt">
             < motion.div className="txt1"
                initial={{ x: -150, opacity: 0 }}
              whileInView={{  x: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 1, ease: 'easeOut' }}
                     viewport={{ once:false }}>
                <h1>FATLOSS/WEIGHTLOSS</h1> <br />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia velit inventore quas quos sapiente earum placeat voluptas amet, doloremque sunt qui, molestias, id esse libero a obcaecati saepe veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia velit inventore quas quos sapiente earum placeat voluptas amet?</p>
            </ motion.div>
             {/* -----img animation----- */}
             <motion.div className="img-cont"
             initial={{ x: 150, opacity: 0 }}
             whileInView={{  x: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 1, ease: 'easeOut' }} 
               viewport={{ once: false }}>
                
                <img src={loss} alt="strength trainning" className="img1" />
            </motion.div>
            </div>
            

    <br /> <br /> <br />  <br /> <br />
        {/*----- Weight-gain ---------*/}
         
        <div className="containt">
            <motion.div className="img-cont"
             initial={{ x:-150, opacity:0 }}
             whileInView={{ x:0,opacity:1, scale:1.05 }}
              transition={{ duration: 0.8, ease: 'easeOut' }} 
               viewport={{ once: false }}>
              
                <img src={strgth} alt="strength trainning" className="img1" />
            </motion.div>
            < motion.div className="txt"
             initial={{  x:150,opacity:0 }}
              whileInView={{ x:0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                     viewport={{ once:false}}>
                <h1>Weight-gain</h1><br />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia velit inventore quas quos sapiente earum placeat voluptas amet, doloremque sunt qui, molestias, id esse libero a obcaecati saepe veniam Animi mollitia velit inventore quas quos sapiente earum placeat voluptas amet molestias, id esse libero a obcaecati saepe veniam Animi mollitia ?</p>
            </ motion.div>
        </div>
        </div> 
        </div> <br />
<div className="footer">
    <Footer/>
    </div>         

        
         
        

    </>)
}

export default About;