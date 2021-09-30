import React, { useState } from 'react'
import mainLogo from '../src/logo.png';
import { Link } from "react-router-dom";
import axios from 'axios';
// import './style.css';

export default function LoginPage({ Login, Register }) {
   require('./style.css')

   const [Logindetails, setDetails] = useState({ email: '', pass: '' });
   const [SignupDetails, setSignupDetails] = useState({ name: '', email: '', pass: '', role: '' })

   const submitHandlerLogin = e => {
      e.preventDefault();

      Login(Logindetails);
   }

   const submitHandlerSignup = e => {
      e.preventDefault();

      Register(SignupDetails);
   }

   return (
      <div>
         <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.8.1/css/all.css" />
         <div className="container" id="container">
            {/* <!-- Main Start --> */}
            <div className="formContainer signUp">
               <form action="#" onSubmit={submitHandlerSignup}>
                  <h1>Sign Up</h1>
                  <div className="socialMedia">
                     <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                     <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                     <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  Or use email
                  <input type="text" placeholder="Name" id="nameSignup" required value={SignupDetails.name} onChange={e => setSignupDetails({ ...SignupDetails, name: e.target.value })} />
                  <input type="email" placeholder="Email" id="emailSignup" required value={SignupDetails.email} onChange={e => setSignupDetails({ ...SignupDetails, email: e.target.value })} />
                  <input type="password" placeholder="Password" id="passSignup" required value={SignupDetails.pass} onChange={e => setSignupDetails({ ...SignupDetails, pass: e.target.value })} />
                  <div id="radio-button" required value={SignupDetails.role} onChange={e => setSignupDetails({ ...SignupDetails, role: e.target.value })}>
                     <input type="radio" name="role" id="admin" value="admin" />
                     <label for="admin">Admin</label>

                     <input type="radio" name="role" id="user" value="user" />
                     <label for="user">User</label>
                  </div>

                  <button type="submit">Sign Up</button>
               </form>
            </div>

            <div className="formContainer login">
               <form action="#" id="loginForm" onSubmit={submitHandlerLogin}>
                  <h1>Login</h1>

                  <div className="socialMedia">
                     <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                     <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                     <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <span>Or use your account </span>
                  <input type="email" placeholder="E mail" id="email" name="email" onChange={e => setDetails({ ...Logindetails, email: e.target.value })} value={Logindetails.email} />
                  <input type="password" placeholder="Password" id="pass" name="pass" onChange={e => setDetails({ ...Logindetails, pass: e.target.value })} value={Logindetails.pass} />
                  <Link to="/forget">
                     Forgot your password?
                  </Link>

                  <button type="submit">Login</button>
               </form>
            </div>
            {/* <!-- Main End --> */}

            {/* <!-- Slider Start --> */}
            <div className="slider">
               <div className="sliders">
                  <div className="sliderContainer sliderL">
                     <img src={mainLogo} alt="" />

                     <h1>Welcome Back!</h1>
                     <p>Silahkan login kalau sudah punya akun</p>
                     <button className="sliderBtn" id="login" onClick={loginBtn}>Login</button>
                  </div>
                  <div className="sliderContainer sliderR">
                     <img src={mainLogo} alt="" />
                     <h1>Sign up</h1>
                     <p>Daftarkan dirimu kalau belum punya akun</p>
                     <button className="sliderBtn" id="signUp" onClick={signUpBtn}>Sign Up</button>
                  </div>
               </div>
            </div>
            {/* <!-- Slider End --> */}
         </div>
      </div>
   )
}
function signUpBtn() {
   const container = document.getElementById("container");
   container.classList.add("active");
}
function loginBtn() {
   const container = document.getElementById("container");
   container.classList.remove("active");
}