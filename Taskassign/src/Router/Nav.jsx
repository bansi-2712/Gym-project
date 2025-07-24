import{Link}from 'react-router-dom'
 
import {FaShoppingCart,FaBars ,FaTimes} from 'react-icons/fa'
 
 import './Nav.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
 import UserIcon from '../Router/UserIcon'
 
 
 



const Navbar=()=>{
   const cartItems = useSelector(state=>state.cart.cart || [])
 const [menuOpen ,setMenuopen] = useState(false)
 const togglemenu =()=> setMenuopen(!menuOpen)
    return(
        <>
        
        <div className='mainnav'>
           {/* -------logo -section-------- */}
           <div className='logo'> <h1>FitnessHub</h1>   
            </div>

  <div className="part-container">
     <div className="hamburger" onClick={togglemenu}>
                 {menuOpen ? <FaTimes size={24}/>:<FaBars size={24}/>}
            </div>
              <div className={`navmenu ${menuOpen ? 'active':""}`} > 
                <Link className='link' to='/'onClick={togglemenu}>Home</Link>
                <Link className='link' to='/about'onClick={togglemenu}>About</Link>
                <Link className='link' to='/gallary' onClick={togglemenu}>Gallary</Link>
                <Link className='link' to='/offerlist' onClick={togglemenu}>Offer</Link>
                <Link className='link' to='/registration' onClick={togglemenu}>Registration</Link>
                 <Link className='link' to='/cart' onClick={togglemenu}><FaShoppingCart size={24}/>{cartItems.length>0&&(
                  <span className='cart-badge'>{cartItems.length}</span>
                )}</Link>
                <Link className='link' style={{color: "#f44336"}}> <UserIcon  onClick={togglemenu} className='link'/></Link>
                
                 
                
            
              
             
              
                
              
               
                </div>
                </div>
            
        </div>
        </>
    )
}

export default Navbar;

