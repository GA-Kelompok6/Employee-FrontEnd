import React, { useState, useEffect } from 'react'
import Attendance from './Attendance';
import axios from "axios";
import geolib, { convertDistance } from 'geolib'
import { getDistance } from 'geolib';
import ChangeOffice from './ChangeOffice';

export default function Employee() {




   const linkAPI = "https://614d6cc4e3cf1f001712d113.mockapi.io/location"

   function CheckLocation() {


      navigator.geolocation.getCurrentPosition(postition => {
         // Search Long, Lang
         const my_coords = { latitude: postition.coords.latitude, longitude: postition.coords.longitude }
         const kantor_coords = { latitude: -6.990638, longitude: 110.423667 }
         // const kantor_coords = { latitude: -7.376397, longitude: 110.440711 }

         // 1000 buat akurasi
         let distance = getDistance(my_coords, kantor_coords, 1)
         console.log(distance);

         // Convert to KM
         let convert = convertDistance(distance, 'km');
         console.log(convert)

         if (convert > 5) {
            alert('Jarak anda terlalu jauh, Maks 5 KM')
         } else {
            Location()
         }
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
                  alert("Anda sudah absen!");

               })
               .catch(error => {
                  console.log(error);
               })
         })


      } else {
         console.log('not avail');
      }
   }

   function Change(details) {
      alert(details.address);

   }


   return (
      <Attendance Attendance={CheckLocation} />
      // <ChangeOffice ChangeOffice={Change} />
   )
}
