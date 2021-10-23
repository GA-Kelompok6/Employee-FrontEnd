import React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { FaTachometerAlt, FaGem, FaList,FaGithub, FaRegLaughWink, FaHeart, FaUser, FaDoorOpen, FaMapPin } from "react-icons/fa";
import sidebarBg from "./bg4.jpg";
import "react-pro-sidebar/dist/css/styles.css";

const index = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  var token = localStorage.getItem("token");
  var user = jwt_decode(token)
  var role = user.role;

  function CheckRoles(){
    if (role == "Admin"){
      return(
        <>
          <MenuItem icon={<FaTachometerAlt />}>
            <Link to="/employee">
              All Attendance
            </Link>
          </MenuItem>
          <MenuItem icon={<FaUser />}>
            <Link to="/user">
              All User
            </Link>
          </MenuItem>
        </>
      )
    } else {
      return(
        <>
          <MenuItem icon={<FaTachometerAlt />}>
            <Link to="/employee">
              All Attendance
            </Link>
          </MenuItem>
          <MenuItem icon={<FaMapPin />}>
            <Link to="/location">
              Change Location
            </Link>
          </MenuItem>
        </>
      )
    }
  }
  return (
    <ProSidebar image={image ? sidebarBg : false} rtl={rtl} collapsed={collapsed} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar} style={{height:"100vh", position: "sticky", top: "0"}}>
      <SidebarHeader>
        <div style={{padding: "17px 24px 16px 24px", textTransform: "uppercase", fontWeight: "bold", fontSize: 14, letterSpacing: "1px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          G6 Employee Attendance
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          {CheckRoles()}
          <MenuItem icon={<FaDoorOpen />}>
            Log Out
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu title='Extra Menu' icon={<FaRegLaughWink />}>
            <MenuItem>Menu 1</MenuItem>
            <MenuItem>Menu 2</MenuItem>
            <MenuItem>Menu 3</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub style={{color:"white"}} />
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default index;
