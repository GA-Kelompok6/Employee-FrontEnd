import React, { useState, useEffect } from "react";
import mainLogo from "../src/logo.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
// import './style.css';

import { useDispatch, useSelector } from "react-redux";
import { loginActions, registerActions } from "../../redux/Actions/user.actions";

export default function LoginPage({ Login, Register }) {
   require("./style.css");

   const dispatch = useDispatch();
   const history = useHistory();
   const user = useSelector((state) => state.User);
   const [Logindetails, setDetails] = useState({ username: "", password: "" });
   const [SignupDetails, setSignupDetails] = useState({
      username: "",
      name: "",
      email: "",
      password: "",
      role: "",
   });
   const [error, setError] = useState(null);

   useEffect(() => {
      if (user.error !== null) {
         setError(user.error);
      }
   }, [user]);

   const submitHandlerLogin = (e) => {
      //   e.preventDefault();
      dispatch(loginActions(Logindetails, e, history));

      if (user.error !== null) {
         setError(user.error);
      }
   };

   const submitHandlerSignup = (e) => {
      dispatch(registerActions(SignupDetails, e, history));

      if (user.error !== null) {
         setError(user.error);
      }
   };

   console.log("state error", user);

   return (
      <div className="body">
         <link
            rel="stylesheet"
            href="//use.fontawesome.com/releases/v5.8.1/css/all.css"
         />
         <div className="container containerforlogin" id="container">
            {/* <!-- Main Start --> */}
            <div className="formContainer signUp">
               <form action="#" onSubmit={submitHandlerSignup}>
                  <h1>Sign Up</h1>
                  <div className="socialMedia">
                     <a href="/" className="social">
                        <i className="fab fa-facebook-f"></i>
                     </a>
                     <a href="/" className="social">
                        <i className="fab fa-google-plus-g"></i>
                     </a>
                     <a href="/" className="social">
                        <i className="fab fa-linkedin-in"></i>
                     </a>
                  </div>
                  Or use email
                  <input
                     type="text"
                     placeholder="Username"
                     id="nameSignup"
                     required
                     value={SignupDetails.username}
                     onChange={(e) =>
                        setSignupDetails({
                           ...SignupDetails,
                           username: e.target.value,
                        })
                     }
                  />
                  <input
                     type="text"
                     placeholder="Name"
                     id="nameSignup"
                     required
                     value={SignupDetails.name}
                     onChange={(e) =>
                        setSignupDetails({
                           ...SignupDetails,
                           name: e.target.value,
                        })
                     }
                  />
                  <input
                     type="email"
                     placeholder="Email"
                     id="emailSignup"
                     required
                     value={SignupDetails.email}
                     onChange={(e) =>
                        setSignupDetails({
                           ...SignupDetails,
                           email: e.target.value,
                        })
                     }
                  />
                  <input
                     type="password"
                     placeholder="Password"
                     id="passSignup"
                     required
                     value={SignupDetails.password}
                     onChange={(e) =>
                        setSignupDetails({
                           ...SignupDetails,
                           password: e.target.value,
                        })
                     }
                  />
                  <div
                     id="radio-button"
                     required
                     value={SignupDetails.role}
                     onChange={(e) =>
                        setSignupDetails({
                           ...SignupDetails,
                           role: e.target.value,
                        })
                     }
                  >
                     <input
                        type="radio"
                        name="role"
                        id="Admin"
                        value="Admin"
                     />
                     <label for="admin">Admin</label>

                     <input
                        type="radio"
                        name="role"
                        id="User"
                        value="User"
                     />
                     <label for="user">User</label>
                  </div>
                  <button type="submit">Sign Up</button>
               </form>
            </div>

            <div className="formContainer login">
               <form
                  action="#"
                  id="loginForm"
                  onSubmit={submitHandlerLogin}
               >
                  <h1>Login</h1>

                  <div className="socialMedia">
                     <a href="/" className="social">
                        <i className="fab fa-facebook-f"></i>
                     </a>
                     <a href="/" className="social">
                        <i className="fab fa-google-plus-g"></i>
                     </a>
                     <a href="/" className="social">
                        <i className="fab fa-linkedin-in"></i>
                     </a>
                  </div>
                  <span>Or use your account </span>
                  <input
                     type="text"
                     placeholder="Username"
                     id="email"
                     name="email"
                     onChange={(e) =>
                        setDetails({
                           ...Logindetails,
                           username: e.target.value,
                        })
                     }
                     value={Logindetails.username}
                  />
                  <input
                     type="password"
                     placeholder="Password"
                     id="pass"
                     name="pass"
                     onChange={(e) =>
                        setDetails({
                           ...Logindetails,
                           password: e.target.value,
                        })
                     }
                     value={Logindetails.password}
                  />
                  <Link to="/forget?#">Forgot your password?</Link>

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
                     <button
                        className="sliderBtn"
                        id="login"
                        onClick={loginBtn}
                     >
                        Login
                     </button>
                  </div>
                  <div className="sliderContainer sliderR">
                     <img src={mainLogo} alt="" />
                     <h1>Sign up</h1>
                     <p>Daftarkan dirimu kalau belum punya akun</p>
                     <button
                        className="sliderBtn"
                        id="signUp"
                        onClick={signUpBtn}
                     >
                        Sign Up
                     </button>
                  </div>
               </div>
            </div>
            {/* <!-- Slider End --> */}
         </div>
      </div>
   );
}
function signUpBtn() {
   const container = document.getElementById("container");
   container.classList.add("active");
}
function loginBtn() {
   const container = document.getElementById("container");
   container.classList.remove("active");
}
