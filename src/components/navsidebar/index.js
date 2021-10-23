import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { userData } from "./UserData";
import jwt_decode from "jwt-decode";
// import "./Navbar.css";
import { IconContext } from "react-icons";
import Switch from 'react-switch';

function Navbars({ collapsed, rtl, image, handleToggleSidebar, handleCollapsedChange, handleRtlChange, handleImageChange }) {
  const [sidebar, setSidebar] = useState(false);
  const [userbar, setUserbar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const showUserbar = () => setUserbar(!userbar);
  require("./Navbar.css");

  function CallSidebarButton(){
    if (collapsed == true){
      handleCollapsedChange(false)
    } else {
      handleCollapsedChange(true)
    }
  }

  function ClearLocal(){
    window.localStorage.clear();
  }

  var token = localStorage.getItem("token");
  var user = jwt_decode(token)
  var role = user.role;
//   console.log(role)
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={CallSidebarButton} />
          </Link>
          <Link to="#" className="menu-bars" style={{ paddingRight: "30px" }}>
            <FaIcons.FaUser onClick={showUserbar} />
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if(item.role == role){
               //   console.log("masuikkk "+item.role)
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="spanSidebar">{item.title}</span>
                  </Link>
                </li>
              )
            };
            }
            )
         }
          </ul>
        </nav>

        <nav className={userbar ? "user-menu active" : "user-menu"}>
          <ul className="nav-menu-items" onClick={showUserbar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars-right">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/profile">
                <CgIcons.CgProfile />
                <span className="spanSidebar">Profile</span>
              </Link>
            </li>
            <li className="nav-text" onClick={ClearLocal} >
              <Link to="/">
                <IoIcons.IoIosExit />
                <span className="spanSidebar">Log Out</span>
              </Link>
            </li>
            {/* {userData.map((item, index) => {
              // Caranya gimanaaaa???
              // window.localStorage.clear();
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="spanSidebar">{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbars;
