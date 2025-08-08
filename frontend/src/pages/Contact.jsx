import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import "../css/Contact.css"

const Contact = () => {
  const handleForm = (e) => {
    e.preventDefault;
  }
  return (
    <div>
      <Title text1="CONTACT" text2="US"/>
      <div className="contact-us-container">
        <div>
          <img src={assets.contact_img} alt="contact-image"/>
        </div>
        <div>
          <form action={handleForm}>
            <input type="text" name="firstname" id="firstname" placeholder="Fullname"/>
            <br />
            <input type="email" name="email" id="email" placeholder="Email"/>
            <br />
            <input type="tel" name="number" id="number" placeholder="Enter you number" />
            <br />
            <textarea name="message" id="message" rows={5} cols={25} placeholder='Enter your message'></textarea>
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Contact
