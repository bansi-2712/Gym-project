import Navbar from "./Nav"
import './Footer.css'
import { Link } from "react-router-dom"
import { FaInstagramSquare, FaFacebookMessenger, FaTwitter } from 'react-icons/fa'

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="footer-nav">
                    <h1>Quick Links</h1>
                    <Link className='link1' to='/'>Home</Link>
                    <Link className='link1' to='/about'>About</Link>
                    <Link className='link1' to='/gallary'>Gallary</Link>
                    <Link className='link1' to='/login'>Login</Link>
                    <Link className='link1' to='/registration'>Registration</Link>

                </div>
                <div className="adress">

                    <h1>Address</h1>
                    <p className="p"> 106,SkyLine Building,<br /></p>
                    <p className="p">Sectore-12,GA-Road,<br /></p>
                    <p className="p"> Gandhinagar,382016
                    </p>
                </div>

                <div className="contact-info">
                    <h1>Discover-US</h1>
                    <div className="ic">
                        <FaInstagramSquare className="icon1" />
                        <FaFacebookMessenger className="icon1" />
                        <FaTwitter className="icon1" />
                    </div>
                    <div className="contact">
                        <h1>Email</h1>
                        <p className="contact-p">fitnessHub15@gmail.com</p> <br />
                        <h1>Contact</h1>
                        <p className="contact-p">999-855-8754</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer
