import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { userData } from "./UserData";
// import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [userbar, setUserbar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const showUserbar = () => setUserbar(!userbar);
  require('./Navbar.css')
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
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
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="spanSidebar">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav className={userbar ? "user-menu active" : "user-menu"}>
          <ul className="nav-menu-items" onClick={showUserbar}>
          <li className="navbar-toggle">
              <Link to="#" className="menu-bars-right">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {userData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="spanSidebar">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
