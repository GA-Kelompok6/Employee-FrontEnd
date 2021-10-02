import React, { useState, Component } from 'react'
// import './style.css'
import LoginPage from './LoginPage';
import axios from 'axios';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from '../admin';


export default function Login() {
   // const setUser = useState({ name: "", email: "" });
   require('./style.css')

   const LinkAPI = "https://arcane-badlands-64583.herokuapp.com/home/login";
   const LinkAPIRegister = "https://arcane-badlands-64583.herokuapp.com/home/register";

   const Login = details => {
      // console.log(details);

      axios.post(LinkAPI, details)
         .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data);
         })
         .catch(error => {
            console.log(error)
         })
   }



   const SignUp = details => {
      console.log(details);

      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!mailformat.test(details.email)) {
         alert("Harap memasukkan email dengan benar")
         return false;
      }

      if (details.password.length < 6) {
         alert("Password minimal 6 karakter");
         return false;
      }

      if (details.role === "") {
         alert("Harap memilih role");
         return (false)
      }

      axios.post(LinkAPIRegister, details)
         .then(res => {
            console.log(res.data);
         })
         .catch(error => {
            console.log(error)
         })


   }

   return (
      <div>
         <LoginPage Register={SignUp} Login={Login} />
      </div>
   )
}


