import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import "../css/OurPolicy.css"

const OurPolicy = () => {
  return (
    <div className = "policy-container">
        <div className ="policy-card">
            <img src = {assets.exchange_icon} alt="exchange-icon" />
            <p>Easy Exchange Policy</p>
            <p>We offer hassle free exchange policy</p>
        </div>
        <div className = "policy-card">
            <img src = {assets.quality_icon} alt="quality-icon" />
            <p>7 Days Return Policy</p>
            <p>We provide 7 days free return policy</p>

        </div>
        <div className = "policy-card">
            <img src = {assets.support_img} alt= "support-icon" />
            <p>Best Customer Support</p>
            <p>We provide 24/7 customer support</p>
        </div>
  
    </div>
  )
}

export default OurPolicy
