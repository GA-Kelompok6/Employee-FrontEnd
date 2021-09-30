import React, { useState, Component } from 'react'
import './style.css'
import LoginPage from './LoginPage';
import axios from 'axios';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from '../admin';


export default function Login() {
   // const setUser = useState({ name: "", email: "" });

   const LinkAPI = "https://614d6cc4e3cf1f001712d113.mockapi.io/Users";

   const Login = details => {
      console.log(details);

      axios.get(LinkAPI)
         .then(res => {
            console.log(res.data);
            const myData = res.data;
            let user = myData.filter((item) => item.email === details.email);
            console.log(user);
            if (user.length > 0) {
               if (user[0].pass === details.pass) {
                  
                  if (user[0].role === "admin") {
                     console.log(user[0].role);
                     alert("ADMIN");
                     < Route to="/admin">
                     </ Route >
                  } else {
                     console.log(user[0].role);
                     alert("EMPLOYEE");
                     < Link to="/employee" >
                     </ Link >
                  }
               } else {
                  alert("Pass Salah")
               }
            } else {
               alert("Email Gaada")
            }
         }
         )
   }



   const SignUp = details => {
      console.log(details);

      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!mailformat.test(details.email)) {
         alert("Harap memasukkan email dengan benar")
         return false;
      }

      if (details.pass.length < 6) {
         alert("Password minimal 6 karakter");
         return false;
      }

      if (details.role === "") {
         alert("Harap memilih role");
         return (false)
      }


      axios.get(LinkAPI)
         .then(res => {
            console.log(res.data);
            const myData = res.data;
            let user = myData.filter((item) => item.email === details.email);
            console.log(user);
            if (user.length > 0) {
               alert("Anda sudah memiliki emai. Silahkan login")
            } else {
               axios.post(LinkAPI, details)
                  .then(res => {
                     console.log(res.data);
                  })
                  .catch(error => {
                     console.log(error)
                  })
            }
         })


   }

   return (
      <div>
         <LoginPage Register={SignUp} Login={Login} />
      </div>
   )
}


