import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const login =e =>{
    e.preventDefault();
  }
  return (
    <div className="login">
      <div className="login__logo">
      <img
            className="landingpage__logo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          />
      </div>
      <div className="login__content">
        
        <h1>Sign In</h1>

        
     
      <div className="login__enter">
        <input
          className="login__email"
          placeholder="Email or Phone number"
          value={email} onChange = {e=> setEmail(e.target.value)}
        ></input>
        <input className="login__password" placeholder="Password" type="password" value={password} onChange={e=> setPassword(e.target.value)}></input>
        <Link to ="/mainpage">
        <button className="login__button" type="submit" coChange={login}>Sign in</button>
        </Link>
      </div>

      <div className="login__input">
        <input type="checkbox" />
        Remember Me
        <h3>Need help?</h3>
        </div>
        <div className="login__more">
        <p>Login With Facebook</p>
        <h5>New to Netflix? Sign up now.</h5>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>

        </div>

      </div>
     
        
     

      <div className="login__footer">
        <h3 className="loginfooter_question">Questions? Call 000-800-040-1843</h3>
        <div className="loginform__notes">
        <h2>FAQ</h2>
        <h2>Help Center</h2>
        <h2>Terms of use</h2>
        <h2> Privacy</h2>
        <h2>Cookie Preferences</h2>
        <h2>Corporate Information</h2>

        </div>
        
      </div>
    </div>
  );
}

export default Login;
