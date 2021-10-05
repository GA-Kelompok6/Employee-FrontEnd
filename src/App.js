import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Forget from "./components/forget";
import Admin from "./components/admin";
import Employee from "./components/employee";
import Attendence from "./components/employee";
import ChangeOffice from "./components/employee/ChangeOffice";
import AllAttendance from "./components/employee/AllAttendance";
import Profile from "./components/profile";

function App() {
  return (
    // <h1>H</h1>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/forget">
          <Forget />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/employee">
          <Employee />
        </Route>
        <Route exact path="/absensi">
          <AllAttendance />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
