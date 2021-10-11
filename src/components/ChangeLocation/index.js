import React from 'react'
import ChangeLocation from './ChangeLocation'
import Navbar from '../navsidebar';
import Swal from 'sweetalert2'
import axios from "axios";
import jwt_decode from "jwt-decode";

export default function ChangeOffice() {

   const token = localStorage.getItem("token");
   const user = jwt_decode(token);
   const userId = user.sub;

   const Location = details => {
      alert("HI")
      console.log(details)

      const linkAPIUpdateProfile = `https://arcane-badlands-64583.herokuapp.com/users/update/` + userId;
      const convertData = Object.values(details)
      console.log(convertData)

      const gabunganpanggil = { officeLoc: convertData }

      let config = {
         headers: {
            Authorization: "Bearer " + localStorage.token,
         },
      };
      axios
         .put(linkAPIUpdateProfile, gabunganpanggil, config)
         .then((Response) => {
            console.log(Response);
            Swal.fire({
               icon: 'success',
               title: 'Update Lokasi Kantor Berhasil',
               text: 'Lokasi Kantor Berhasil Di Update'
            })
         })
         .catch((err) => {
            console.log(err);
            Swal.fire({
               icon: 'error',
               title: 'Update Lokasi Kantor Gagal',
               text: 'Lokasi Kantor Gagal Di Update'
            })
         });
   }

   return (
      <div>
         <Navbar />
         <ChangeLocation Location={Location} />
      </div>
   )
}
