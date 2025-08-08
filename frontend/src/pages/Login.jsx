import React, { useState } from 'react'
import Title from "../components/Title"

const Login = () => {
  const [currentState, setCurrentState] = useState("LOGIN")
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <Title text1={currentState}/>
      <form onSubmit={handleSubmit}>
        <div>
          {currentState === "LOGIN" ? "" : <input type="text" name="fullname" id="fullname" placeholder='Name'/>}
          <br />
          <input type="email" name="email" id="email" placeholder='Email'/>
          <br />
          <input type="password" name="password" id="password" placeholder="Password"/>
        </div>
        <div>
          {currentState === "LOGIN" ? <a href="">Forgot Your Password</a> : ""}
          {
            currentState === "LOGIN" ? 
            <p onClick={()=> setCurrentState("SIGNUP")}>Create a New account <a href="#">SIGNUP</a></p> :
            <p onClick={()=> setCurrentState("LOGIN")}>Already have an Account <a href="#">LOGIN</a></p>

          }



        </div>

        <button>{currentState === "LOGIN" ? "SignIn" : "SignUp"}</button>

        
        
      </form>
    </div>
  )
}

export default Login
