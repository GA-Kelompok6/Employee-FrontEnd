import React from "react";
import Navbar from "../navsidebar/index";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import axios from "axios";

export default function Profile() {
  require("./style.css");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

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
        setEmail(res.data._doc.email);
        setRole(res.data._doc.role);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const data = profileupdate(user.sub, token);

  const savedata = (e, userId = user.sub) => {
    e.preventDefault();
    const inputUsername = document.getElementById("username-text").value;
    const inputName = document.getElementById("name-text").value;
    const inputEmail = document.getElementById("email-text").value;
    const inputPassword = document.getElementById("password-text").value;

    console.log(inputUsername, inputName, inputEmail);

    const gabunganedit = { username: inputUsername, password: inputPassword, name: inputName, email: inputEmail, role: role };
    console.log(gabunganedit, userId);

    const linkAPIUpdateProfile = `https://arcane-badlands-64583.herokuapp.com/users/update/` + userId;

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.token,
      },
    };
    axios
      .put(linkAPIUpdateProfile, gabunganedit, config)
      .then((Response) => {
        console.log(Response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <form className="profile-container" onSubmit={savedata}>
        <div className="child-container">
          <h3 className="text-child">Username</h3>
          <input className="username-input" defaultValue={username} id="username-text" />
        </div>
        <div className="child-container">
          <h3 className="text-child">Name</h3>
          <input className="name-input" defaultValue={name} id="name-text" />
        </div>
        <div className="child-container">
          <h3 className="text-child">Password</h3>
          <input className="password-input" type="password" id="password-text" />
        </div>
        <div className="child-container">
          <h3 className="text-child">Email</h3>
          <input className="email-input" defaultValue={email} id="email-text" />
        </div>
        <div className="child-container">
          <div className="text-container">
            <h3 className="text-child">Role</h3>
          </div>
          <div className="radio-container">
            <input name="role" type="radio" value="admin" id="admin" checked="true" />
            <label for="admin">Admin</label>
            <input name="role" type="radio" value="user" id="user" />
            <label for="user">User</label>
          </div>
        </div>
        <div className="button-container">
          <button className="save-button" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
