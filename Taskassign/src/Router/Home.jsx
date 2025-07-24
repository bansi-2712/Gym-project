import React from "react";
// import homeimg from '../assets/homepage.jpg'
import './Home.css'
import gymimg from '../assets/gym-workout-.png'
import {FaDumbbell,FaFistRaised} from 'react-icons/fa'
import Footer from "./Footer";

 

const Home  =()=>{
    return(
        <>
        {/* ---BANNER DESIGN---- */}
      <div className="bannerimg" >
        <h1 className="tagline">Get Fit & Healthy</h1>
        </div>
        {/* -----SQAURE---- */}
        <div className="square-container">
          <div className="squareinfo">
            <h1>MODERN EQUIPMENT</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat nam explicabo delectus! Animi facilis obcaecati distinctio, laborum tempora rerum officia aperiam nulla dolores quae nemo ipsum impedit dolor ea?</p>
            
            </div>
          <div className="squareinfo">
            <h1>PROFFESONAL TRAINER</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat nam explicabo delectus! Animi facilis obcaecati distinctio, laborum tempora rerum officia aperiam nulla dolores quae nemo ipsum impedit dolor ea?</p>
          </div>
          <div className="squareinfo">
            
            <h1>HEALTHY DIET PLAN</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat nam explicabo delectus! Animi facilis obcaecati distinctio, laborum tempora rerum officia aperiam nulla dolores quae nemo ipsum impedit dolor ea?</p>
          </div>
        </div> <br /> <br />
         {/*/---------3rd  steps---------- */}
        <div className="img-container">
          <div className="contentimg">
           <div className="div-img">
            <img src={gymimg} alt="" className="img" />
           </div>
          </div>
          <div className="content">
            <div className="contentdiv">
            <div className="content-info">
              <FaDumbbell style={{fontSize:'30px',color:'black'}} className="icon"/>
              <h2>Weight Training</h2>
              
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, suscipit modi laborum fuga rerum repudiandae delectus expedita aliquid deleniti amet, dolore atque asperiores voluptatem repellat possimus placeat, corporis quis non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, asperiores, dolorem magni ea
              </p>
            </div>
            <div className="content-info">
           <FaFistRaised style={{fontSize:'30px',color:'black'}} className="icon"/>
              <h2>General Fitness</h2>
               <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, suscipit modi laborum fuga rerum repudiandae delectus expedita aliquid deleniti amet, dolore atque asperiores voluptatem repellat possimus placeat, corporis quis non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, asperiores, dolorem magni ea
              </p>
            </div>
          </div>
          </div>
        </div> <br /> <br />
<div className="footerhome">
  <Footer/>
</div>
       
        </>
    )
}
export default Home;