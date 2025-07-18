import { useState } from 'react';
import "../css/NewsLetter.css"

const NewsLetter = () => {
  const [email, setEmail] = useState("")
  function handleSubmit(e){
    e.preventDefault();
    setEmail("");
  }

  return (
    <div className = "news-letter">
      <h2>Subscribe now & get 20% off</h2>
      <p>Become our Loyal customer and enjoy more benefits</p>
      <form onSubmit={handleSubmit} className="form-container">        
        <input type="email" name="email" id="email" placeholder='Enter you email' value={email} onChange={(e)=> setEmail(e.target.value)}  required/>
        <button className= "subscribe-button" > SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetter
