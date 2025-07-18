import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import "../css/Header.css"


const Hero = () => {
  return (
    <div className="header">
        <div className="hero-left-section">
          <div className='border-container'>
              <p className='border'></p>
              <p>OUR BESTSELLERS</p>
          </div>
           
            <p className='latest-para'>Latest Arrivals</p>
          <div className='border-container'>
             <p>SHOP NOW</p>
             <p className='border'></p>
          </div>
        </div>
        <div className = "hero-right-section">
            <img src={assets.hero_img} alt="" className="hero-image" />
        </div>
      
    </div>
  )
}

export default Hero
