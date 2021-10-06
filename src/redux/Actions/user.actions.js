import axios from "axios";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const GET_ERROR = "GET_ERROR";
export const ATTENDANCE = "ATTENDANCE"

export const setRegister = (data) => {
   return {
      type: REGISTER,
      payload: data,
   };
};

export const setLogin = (data) => {
   return {
      type: LOGIN,
      payload: data,
   };
};

export const getError = (data) => {
   return {
      type: GET_ERROR,
      payload: data,
   };
};

export const registerActions = (values, e, history) => (dispatch) => {
   e.preventDefault();

   if (values.username.length < 3) {
      alert("Username minimal 3 karakter");
      return false;
   }

   if (values.name.length < 3) {
      alert("Name minimal 3 karakter");
      return false;
   }


   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   if (!mailformat.test(values.email)) {
      alert("Harap memasukkan email dengan benar");
      return false;
   }

   if (values.password.length < 6) {
      alert("Password minimal 6 karakter");
      return false;
   }

   if (values.role === "") {
      alert("Harap memilih role");
      return false;
   }

   console.log("tes param", values);

   return axios
      .post(
         "https://arcane-badlands-64583.herokuapp.com/home/register",
         values
      )
      .then((response) => {
         console.log("res", response);
         localStorage.setItem("token", response.data);

         dispatch(setRegister);
         history.push("/");
         alert("Pendaftaran berhasil");
         values = "";
      })
      .catch((error) => {
         console.log(error);
      });
};

export const loginActions = (values, e, history) => {
   return (dispatch) => {
      e.preventDefault();
      console.log("tes param", values);

      return axios
         .post(
            "https://arcane-badlands-64583.herokuapp.com/home/login",
            values
         )
         .then((response) => {
            console.log("res", response.data);
            if (response.data !== undefined) {
               console.log("token ada");

               dispatch(setLogin(response.data));
               history.push("/employee");
               localStorage.setItem("token", response.data);
            }
         })
         .catch((error) => {
            console.log(error);
            dispatch(getError(error.response.data));
         });
   };
};