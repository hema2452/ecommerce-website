import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import "../css/Footer.css"

const Footer = () => {
  return (
    <div>
    
    <div className='footer'>
        <div className="logo-details">
            <img src={assets.logo} alt="logo-image" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, rem?</p>
        </div>
        <div className='company-items'>
            <p>Company</p>
            <ul>        
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy</li>
            </ul>

        </div>
    
        <div className='get-in-touch'>
            <p >GET IN TOUCH</p>
            <p>+91-123-456-9087</p>
            <p>contact@forever.com</p>  
        </div>    
      
    </div>
          <div>
            <hr />
            <p className='copy-right'>Copyright-All Right Reserved</p>       
        </div>
    </div>

   
  )
}

export default Footer
