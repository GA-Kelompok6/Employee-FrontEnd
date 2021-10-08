import React from 'react'
import ForgetPassword from './ForgetPage';
import axios from 'axios'
import Swal from 'sweetalert2'
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
      let passInput1 = document.getElementById("pass1").value;
      let passInput2 = document.getElementById("pass2").value;
      let questionInput = document.getElementById("question").value;
      let answerInput = document.getElementById("answer").value;
      let liveLat = document.getElementById("livelocationlat").value;
      let liveLong = document.getElementById("livelocationlong").value;


      function ClearText() {
         document.getElementById("email").value = "";
         // document.getElementById("pass").value = "";
         document.getElementById("answer").value = "";
         document.getElementById("question").value = "Choose Recovery Question";
      }

      axios.get(
         "https://arcane-badlands-64583.herokuapp.com/forget/forget/"
      )
         .then((response) => {
            const myData = response.data;
            let user = myData.filter((item) => item.email === emailInput);

            if (user.length > 0) {
               if (user[0].email === emailInput) {
                  if (user[0].answer === answerInput && user[0].question === questionInput) {
                     if (passInput1 === "" || passInput1 === null) {
                        //alert("Harap memasukkan password");
                        Swal.fire({
                           icon: 'error',
                           title: 'Oops...',
                           text: 'Harap Memasukkan Password'
                        })
                        return false;
                     } else {
                        if (passInput1.length < 6) {
                           //alert("Password minimal 6 karakter");
                           Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: 'Password Minimal 6 Karakter'
                           })
                           document.getElementById("pass1").value = "";
                           document.getElementById("pass2").value = "";
                           return false;
                        }
                     }
                     if (passInput2 === "" || passInput2 === null){
                        //alert("Harap memasukkan password");
                        Swal.fire({
                           icon: 'error',
                           title: 'Oops...',
                           text: 'Harap Memasukkan Password'
                        })
                        return false;
                     } else {
                        if (passInput1 === passInput2){
                           const getUserID = user[0]._id;
                           const changePassword = { password: passInput2 };
                           console.log(getUserID)

                           axios.put(
                              "https://arcane-badlands-64583.herokuapp.com/forget/update/" +
                              getUserID,
                              changePassword
                           );

                           user[0].password = passInput2;
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

                           console.clear();
                           //window.location.href ="/"
                        } else {
                           Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: 'Password Harus Sama'
                           })
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
   }
}

export default forget
