import React from "react";
 

import './Gallary.css'
import Footer from "./Footer";

const Gallary = (props) => {
    return (
        <>
 <div className="card">
        <div className="img-card"><img src={props.img} alt="" className="img" /></div>
       <div className="name"><h3>{props.name}</h3></div>
        <div className="target "><h4>Target:-{props.target}</h4></div><br />
       <div className="dis"><p><span>Description:-</span> <br />
        {props.discription} </p>
    </div>
       </div>
</>

    )
    
     
}
export default Gallary;

      