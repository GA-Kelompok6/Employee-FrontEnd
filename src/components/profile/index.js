import React from "react";
import Navbar from "../navsidebar/index";
import profileupdate from "./profile";
import jwt_decode from "jwt-decode";

export default function Profile() {
  require("./style.css");
  const token = localStorage.getItem("token");
  const user = jwt_decode(token);
  profileupdate(user.sub, token);

  return (
    <>
      <Navbar />
      <form className="profile-container">
        <div className="child-container">
          <h3 className="text-child">Username</h3>
          <input className="username-input" />
        </div>
        <div className="child-container">
          <h3 className="text-child">Name</h3>
          <input className="name-input" />
        </div>
        <div className="child-container">
          <h3 className="text-child">Password</h3>
          <input className="password-input" />
        </div>
        <div className="child-container">
          <h3 className="text-child">Email</h3>
          <input className="email-input" />
        </div>
        <div className="child-container">
          <div className="text-container">
            <h3 className="text-child">Role</h3>
          </div>
          <div className="radio-container">
            <input type="radio" value="admin" id="admin" />
            <label for="admin">Admin</label>
            <input type="radio" value="admin" id="admin" />
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
