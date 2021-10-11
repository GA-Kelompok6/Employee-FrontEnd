import React, { useState } from 'react'
import mainLogo from '../src/logo.png';
import { Forget2 } from './index'

const ForgetPasswordComponent = () => {
   const [lat, setLat] = useState(null);
   const [lng, setLng] = useState(null);
   const [status, setStatus] = useState(null);

   navigator.geolocation.getCurrentPosition((position) => {
      setStatus(null);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
   })

   return (
      <div className="body">
         <div className="containerForget">
            <div className="formContainer-Forget">
               <form className="formforget" action="#" onsubmit="return false">
                  <img src={mainLogo} alt="" />
                  <h1>Forget Password</h1>
                  Type your email and new password here!
                  <input type="email" placeholder="Email" id="email" style={{ marginTop: '25px' }} />
                  <select type="select" placeholder="Choose Recovery Question" id="question">
                     <option disabled selected>Choose Recovery Question</option>
                     <option value="What Is Your Hobby?">What Is Your Hobby?</option>
                     <option value="What Is Your Dream Job?">What Is Your Dream Job?</option>
                     <option value="What Is The First Name Of Your Best Friend In High School?">What Is The First Name Of Your Best Friend In High School?</option>
                     <option value="What is the name of your favorite pet?">What Is The Name Of Your Favorite Pet?</option>
                  </select>
                  <input type="text" placeholder="Answer The Question For Recovery" id="answer" />
                  <input type="password" placeholder="New Password" id="pass1" />
                  <input type="password" placeholder="Retype New Password" id="pass2" />
                  <input hidden type="text" id="livelocationlat" value={lat} />
                  <input hidden type="text" id="livelocationlong" value={lng} />
                  <button type="submit" onClick={Forget2}>Reset Password</button>
                  <a href="/">Back to Sign In?</a>
               </form>
            </div>
         </div>
      </div>
   )
}

export default ForgetPasswordComponent
