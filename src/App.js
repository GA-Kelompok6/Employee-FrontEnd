import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Forget from "./components/forget";
import Admin from "./components/admin";
import Employee from "./components/employee";
import Attendence from "./components/employee";
import AllAttendance from "./components/employee/AllAttendance";
import Profile from "./components/profile";
import Swal from "sweetalert2";
import ListUser from "./components/listuser";
import ChangeLocation from "./components/ChangeLocation/ChangeLocation";

function App() {
   //TokenEmployee
   const tokenHilangEmployee = () => {
      if (localStorage.getItem("token") == null) {
         Swal.fire({
            icon: "error",
            title: "Token Hilang/Token Tidak Ada",
            text: "Silahkan Login Kembali",
            timer: 5000,
         }).then(() => {
            window.location.href = "/";
         });
      } else {
         return <Employee />;
      }
   };

   //TokenAdmin
   const tokenHilangAdmin = () => {
      if (localStorage.getItem("token") == null) {
         Swal.fire({
            icon: "error",
            title: "Token Hilang/Token Tidak Ada",
            text: "Silahkan Login Kembali",
            timer: 5000,
         }).then(() => {
            window.location.href = "/";
         });
      } else {
         return <Admin />;
      }
   };

   //TokenAbsensi
   const tokenHilangAbsensi = () => {
      if (localStorage.getItem("token") == null) {
         Swal.fire({
            icon: "error",
            title: "Token Hilang/Token Tidak Ada",
            text: "Silahkan Login Kembali",
            timer: 5000,
         }).then(() => {
            window.location.href = "/";
         });
      } else {
         return <AllAttendance />;
      }
   };

   //TokenProfile
   const tokenHilangProfile = () => {
      if (localStorage.getItem("token") == null) {
         Swal.fire({
            icon: "error",
            title: "Token Hilang/Token Tidak Ada",
            text: "Silahkan Login Kembali",
            timer: 5000,
         }).then(() => {
            window.location.href = "/";
         });
      } else {
         return <Profile />;
      }
   };

   //TokenHilangUser
   const tokenHilangUser = () => {
      if (localStorage.getItem("token") == null) {
         Swal.fire({
            icon: "error",
            title: "Token Hilang/Token Tidak Ada",
            text: "Silahkan Login Kembali",
            timer: 5000,
         }).then(() => {
            window.location.href = "/";
         });
      } else {
         return <ListUser />;
      }
   };

   //TokenHilangLocatiton
   const tokenHilangLocation = () => {
      if (localStorage.getItem("token") == null) {
         Swal.fire({
            icon: "error",
            title: "Token Hilang/Token Tidak Ada",
            text: "Silahkan Login Kembali",
            timer: 5000,
         }).then(() => {
            window.location.href = "/";
         });
      } else {
         // return <ChangeLocation />;
      }
   };

   return (
      // <h1>H</h1>
      <Router>
         <Switch>
            <Route exact path="/">
               <ChangeLocation />;

               {/* <Login /> */}
            </Route>
            <Route exact path="/forget">
               <Forget />
            </Route>
            <Route exact path="/admin">
               {tokenHilangAdmin}
            </Route>
            <Route exact path="/employee">
               {tokenHilangEmployee}
            </Route>
            {/* <Route exact path="/absensi">
          {tokenHilangAbsensi}
        </Route> */}
            <Route exact path="/profile">
               {tokenHilangProfile}
            </Route>
            <Route exact path="/user">
               {tokenHilangUser}
            </Route>
            <Route exact path="/location">
               {tokenHilangLocation}
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
