import React, { useState, useEffect } from 'react'
import axios from "axios";
import jwt_decode from "jwt-decode";
import Location from "./index"

export default function ChangeLocation({ Location }) {
   require("./style.css")

   const [LongLang, setLocation] = useState({ long: "", lang: "" });
   const [longitude, setLongitude] = useState("");
   const [latitude, setLatitude] = useState("");

   const token = localStorage.getItem("token");
   const user = jwt_decode(token);
   useEffect(() => {
      const profileupdate = (userId, token) => {
         const linkAPIProfile = `https://arcane-badlands-64583.herokuapp.com/users/` + userId;

         axios
            .get(linkAPIProfile, {
               headers: {
                  Authorization: "Bearer " + token,
               },
            })
            .then((res) => {
               console.log(res)
               setLongitude(res.data._doc.officeLoc[0]);
               setLatitude(res.data._doc.officeLoc[1]);
            })
            .catch((err) => {
               console.log(err);
            });
      };
      const data = profileupdate(user.sub, token);
   },[])

   const submitHandlerLocation = e => {
      e.preventDefault();

      // console.log(LongLang);
      Location(LongLang);
      
   }

   return (
      <div>
         {/* <h1>H!</h1> */}
         <div style={{ textAlign: "center" }}>
            <br />
            <h2>Change Office Location</h2>
         </div>

         <form action="#" className="profile-container" onSubmit={submitHandlerLocation}>
         <div className="child-container">
            <h3 className="text-child">Longitude</h3>
            <input type="text" className="username-input" id="Longtitude" defaultValue={longitude} 
               onChange={(e) => setLocation({
               ...LongLang,
               long: e.target.value,
               })} placeholder="Input Your Longitude" required />
         </div>
         <div className="child-container">
            <h3 className="text-child">Latitude</h3>
            <input type="text" className="name-input" id="Latitude" defaultValue={latitude} 
            onChange={(e) =>
               setLocation({
                  ...LongLang,
                  lang: e.target.value,
               })} placeholder="Input Your Latitude" required />
         </div>
         <button type="submit">Change Location</button>
         </form>
      </div>
   )
}
