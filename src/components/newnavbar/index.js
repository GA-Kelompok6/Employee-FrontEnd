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

  function checkHeader () {
    if (collapsed == true) {
      console.log(collapsed)
      return (
        <div style={{paddingTop: "17px", paddingBottom: "16px", textAlign: "center", textTransform: "uppercase", fontWeight: "bold", fontSize: 14, letterSpacing: "1px", overflow: "hidden", whiteSpace: "nowrap" }}>
          G6 EA
        </div>
      )
    } else {
      console.log(collapsed)
      return (
        <div style={{padding: "17px 24px 16px 24px", textTransform: "uppercase", fontWeight: "bold", fontSize: 14, letterSpacing: "1px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          G6 Employee Attendance
        </div>
      )
    }
  }
  return (
    <ProSidebar image={image ? sidebarBg : false} rtl={rtl} collapsed={collapsed} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar} style={{height:"100vh", position: "sticky", top: "0"}}>
      <SidebarHeader>
        {checkHeader()}
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          {CheckRoles()}
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default index;
