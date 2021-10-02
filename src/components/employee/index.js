import React, { useState, useEffect } from 'react'
import Attendance from './Attendance';
import axios from "axios";
import geolib, { convertDistance } from 'geolib'
import { getDistance } from 'geolib';
import ChangeOffice from './ChangeOffice';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Swal from "sweetalert2";
import Navbar from '../navsidebar/Navbar';
import AllAttendance from './AllAttendance';

export default function Employee() {

   let [loading, setLoading] = useState(true);
   let [color, setColor] = useState("#23C8D4");
   const [done, setDone] = useState(true);
   const override = css`
   display: block;
   margin: 0 auto;
   border-color: red;
   `;

   const [CurrentDate, setCurrentDate] = useState('')

   useEffect(() => {
      var date = new Date().getDate()
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear()
      var hours = new Date().getHours()
      var min = new Date().getMinutes()
      var sec = new Date().getSeconds()

      setCurrentDate(
         date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
      )
      return () => {

      }
   }, [])
   



   const linkAPI = "https://613618d38700c50017ef53e3.mockapi.io/Absensi"

   function CheckLocation() {
      setDone(false);


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

         if (convert < 5) {
            // alert('Jarak anda terlalu jauh, Maks 5 KM')
            Swal.fire({
               icon: 'error',
               title: 'Gagal',
               text: 'Jarak anda terlalu jauh, Maks 5 KM'
            })
            setDone(true);
         } else {
            Location(convert)
         }
      })

   }


   function Location(jarak) {
      if ('geolocation' in navigator) {
         console.log('avail');
         const jarakkecil = parseInt(jarak, 0)
         navigator.geolocation.getCurrentPosition(postition => {
            const loc = { location: [postition.coords.latitude, postition.coords.longitude], tanggalabsen: CurrentDate, jarak: jarakkecil };
            console.log(loc);
            axios.post(linkAPI, loc)
               .then(res => {
                  console.log(res.data);
                  // setLat({ ...lat, location: postition.coords.latitude })
                  // console.log(loc)
                  // console.log(setLat)
                  setDone(true)
                  // alert("Anda sudah absen!");
                  Swal.fire({
                     icon: 'success',
                     title: 'Berhasil',
                     text: 'Anda Berhasil Absen'
                  })


               })
               .catch(error => {
                  console.log(error);
                  setDone(true);
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
      <>
      {!done ? (
         <div style={{position:"fixed", top:"50%", left:"50%", transform: "translate(-50%, -50%)"}}>
            <HashLoader color={color} loading={loading} css={override} size={100} />
         </div>
      ) : (
         <>
         <Navbar />
         <Attendance Attendance={CheckLocation} />
         {/* <ChangeOffice ChangeOffice={Change} /> */}
         {/* <AllAttendance /> */}
      </>
      )}
      </>
   )
}
