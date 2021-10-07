import React, { useState, Component } from "react";
// import './style.css'
import LoginPage from "./LoginPage";
import axios from "axios";
import AxiosError from "axios";
import { Link, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "../admin";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "../../redux/Actions/user.actions";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);

  // const setUser = useState({ name: "", email: "" });
  require("./style.css");
  // const jwt_decode =  require('jwt-decode')

  // const Login = details => {
  //    // console.log(details);

  //    axios.post(LinkAPI, details)
  //       .then(
  //          (res) => {
  //             console.log(res);
  //             localStorage.setItem("token", res.data);
  //             var decoded = jwt_decode(localStorage.getItem("token"));
  //             console.log(decoded.role)
  //             if (decoded.role === "Admin") {
  //                window.location.replace("./admin");
  //             } else if (decoded.role === "User") {
  //                window.location.replace("./employee");
  //             }

  //          }).catch(err => {
  //             console.log(err)
  //          })
  // }

  // const SignUp = (details, e) => {
  //    console.log(details);

  //    if (details.username.length < 3) {
  //       alert("Username minimal 3 karakter");
  //       return false;
  //    }

  //    if (details.name.length < 3) {
  //       alert("Name minimal 3 karakter");
  //       return false;
  //    }

  //    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //    if (!mailformat.test(details.email)) {
  //       alert("Harap memasukkan email dengan benar");
  //       return false;
  //    }

  //    if (details.password.length < 6) {
  //       alert("Password minimal 6 karakter");
  //       return false;
  //    }

  //    if (details.role === "") {
  //       alert("Harap memilih role");
  //       return false;
  //    }

  //    dispatch(registerActions(details, e, history));
  //    if (details.error !== null) {
  //       setError(details.error);
  //    }
  // };

  return (
    <div>
      <LoginPage />
    </div>
  );
}
