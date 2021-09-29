import React, { useState } from 'react'
import Attendance from './Attendance';
import axios from "axios";
// import geolib from 'geolib'
// import { getDistance } from 'geolib';

export default function Employee() {

   const linkAPI = "https://614d6cc4e3cf1f001712d113.mockapi.io/location"

   function CheckLocation() {
      navigator.geolocation.getCurrentPosition(postition => {
         const lat1 = 40.7143528;
         const long1 = -74.0059731;
         // const lat2= 
         console.log(lat1);
         console.log(long1);

         // geolib.getPreciseDistance(
         //    { latitude: 51.5103, longitude: 7.49347 },
         //    { latitude: "51° 31' N", longitude: "7° 28' E" }
         // );

      })
   }


   function Location() {
      if ('geolocation' in navigator) {
         console.log('avail');
         navigator.geolocation.getCurrentPosition(postition => {
            const loc = { location: [postition.coords.latitude, postition.coords.longitude] };
            console.log(loc);
            axios.post(linkAPI, loc)
               .then(res => {
                  console.log(res.data);
                  // setLat({ ...lat, location: postition.coords.latitude })
                  // console.log(loc)
                  // console.log(setLat)

               })
               .catch(error => {
                  console.log(error);
               })
         })


      } else {
         console.log('not avail');
      }
   }


   return (
      <Attendance Attendance={CheckLocation} />
   )
}
