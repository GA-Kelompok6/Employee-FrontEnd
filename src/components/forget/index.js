import React from 'react'
import ForgetPassword from './ForgetPage';
import axios from 'axios'
import Swal from 'sweetalert2'
import { convertDistance, getDistance } from 'geolib';
export const Forget2 = () => {
   Forget()
}

const forget = () => {
   require("./style.css")
   return (
      <div>
         <ForgetPassword />
      </div>
   )
}

function Forget() {
   if (Forget) {
      let emailInput = document.getElementById("email").value;
      let passInput = document.getElementById("pass").value;
      let questionInput = document.getElementById("question").value;
      let answerInput = document.getElementById("answer").value;
      let liveLat = document.getElementById("livelocationlat").value;
      let liveLong = document.getElementById("livelocationlong").value;


      function ClearText() {
         document.getElementById("email").value = "";
         document.getElementById("pass").value = "";
         document.getElementById("answer").value = "";
         document.getElementById("question").value = "Choose Recovery Question";
      }

      axios.get(
         "https://613618d38700c50017ef53e3.mockapi.io/UserAdmin"
      )
         .then((response) => {
            console.log(response.data);
            const myData = response.data;
            let user = myData.filter((item) => item.email === emailInput);

            console.log(user);
            if (user.length > 0) {
               if (user[0].email === emailInput) {
                  if (user[0].answerrecovery === answerInput && user[0].questionrecovery === questionInput) {
                     if (passInput === "" || passInput === null) {
                        //alert("Harap memasukkan password");
                        Swal.fire({
                           icon: 'error',
                           title: 'Oops...',
                           text: 'Harap Memasukkan Password'
                        })
                        return false;
                     } else {
                        if (passInput.length < 6) {
                           //alert("Password minimal 6 karakter");
                           Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: 'Password Minimal 6 Karakter'
                           })
                           document.getElementById("pass").value = "";
                           return false;
                        }
                     }
                     const getUserID = user[0].id;
                     const changePassword = { password: passInput, location: [liveLat, liveLong] };
                     console.log(getUserID, changePassword);

                     const lokasi_sekarang = { latitude: liveLat, longitude: liveLong }
                     const lokasi_kantor = { latitude: -7.376397, longitude: 110.40711 };
                     let distancestowork = getDistance(lokasi_sekarang, lokasi_kantor, 1000);
                     let convertdistance = convertDistance(distancestowork, "km");
                     console.log(convertdistance)

                     if (convertdistance < 10) {
                        axios.put(
                           "https://613618d38700c50017ef53e3.mockapi.io/UserAdmin/" +
                           getUserID,
                           changePassword
                        );

                        user[0].password = passInput;
                        //alert("Password Berhasil Diganti, Silahkan Login Kembali");
                        Swal.fire({
                           title: 'Berhasil Ganti',
                           text: 'Password Berhasil Diganti, Silahkan Login Kembali',
                           icon: 'success',
                           timer: 2000
                        })
                           .then(ClearText())
                           .then(function () {
                              window.location = "/";
                           });
                     } else {
                        Swal.fire({
                           icon: 'error',
                           title: 'Oops...',
                           text: 'Alamat Anda Ke Kantor Kejauhan',
                           timer: 2000
                        })
                     }

                     console.clear();
                     //window.location.href ="/"
                  } else {
                     //alert("Email Tidak Ditemukan Atau Jawaban Recovery Salah");
                     Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email Tidak Ditemukan Atau Jawaban/Pertanyaan Recovery Salah'
                     })
                     console.clear();
                     ClearText();
                  }
               }
            } else {
               //alert("Email Tidak Ditemukan Atau Jawaban Recovery Salah");
               Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Email Tidak Ditemukan Atau Jawaban/Pertanyaan Recovery Salah'
               })
               console.clear();
               ClearText();
            }
         })



      // fetch("https://613618d38700c50017ef53e3.mockapi.io/UserAdmin")
      //   .then((response) => response.json())
      //   .then((result) => {
      //     let user = result.filter((item) => item.email === emailInput);
      //     console.log(user);
      //     if (user.length > 0) {
      //       if (user[0].email === emailInput) {
      //         if (passInput === "" || passInput === null) {
      //           alert("Harap memasukkan password");
      //           return false;
      //         } else {
      //           if (passInput.length < 6) {
      //             alert("Password minimal 6 karakter");
      //             document.getElementById("pass").value = "";
      //             return false;
      //           }
      //         }
      //         const getUserID = user[0].id;
      //         const changePassword = { password: passInput };
      //         console.log(getUserID, changePassword);

      //         axios.put(
      //           "https://613618d38700c50017ef53e3.mockapi.io/UserAdmin/" +
      //             getUserID,
      //           changePassword
      //         );

      //         user[0].password = passInput;
      //         alert("Password Sudah Diganti");
      //         //console.clear();
      //       }
      //     } else {
      //       alert("Email tidak ditemukan");
      //     }
      //   });
   }
}

export default forget
