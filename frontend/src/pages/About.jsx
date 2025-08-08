import React from 'react'
import Title from '../components/Title'
import { assets } from "../assets/frontend_assets/assets";
import "../css/About.css"
import NewsLetter from "../components/NewsLetter"

const About = () => {
  return (
    <div >
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="about-us-container">
        <div className="about-us-image">
          <img src={assets.about_img} alt="about-image" />          
        </div>
        <div>       
        <p className='about-paragraph'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
        <p className='about-paragraph'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
       </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About
