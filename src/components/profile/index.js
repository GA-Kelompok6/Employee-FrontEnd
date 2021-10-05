import React from "react";
import Navbar from "../navsidebar/index";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import axios from "axios";

export default function Profile() {
  require("./style.css");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const token = localStorage.getItem("token");

  const user = jwt_decode(token);

  const profileupdate = (userId, token) => {
    const linkAPIProfile = `https://arcane-badlands-64583.herokuapp.com/users/${userId}`;

    axios
      .get(linkAPIProfile, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setUsername(res.data._doc.username);
        setName(res.data._doc.name);
        setPassword(res.data._doc.password);
        setEmail(res.data._doc.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const data = profileupdate(user.sub, token);

  return (
    <>
      <Navbar />
      <form className="profile-container">
        <div className="child-container">
          <h3 className="text-child">Username</h3>
          <input className="username-input" defaultValue={username} />
        </div>
        <div className="child-container">
          <h3 className="text-child">Name</h3>
          <input className="name-input" defaultValue={name} />
        </div>
        <div className="child-container">
          <h3 className="text-child">Password</h3>
          <input className="password-input" defaultValue={password} />
        </div>
        <div className="child-container">
          <h3 className="text-child">Email</h3>
          <input className="email-input" defaultValue={email} />
        </div>
        <div className="child-container">
          <div className="text-container">
            <h3 className="text-child">Role</h3>
          </div>
          <div className="radio-container">
            <input type="radio" value="admin" id="admin" checked="true" />
            <label for="admin">Admin</label>
            <input type="radio" value="user" id="user" />
            <label for="user">User</label>
          </div>
        </div>
        <div className="button-container">
          <button className="save-button">Save</button>
        </div>
      </form>
    </>
  );
}
