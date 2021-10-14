import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { FaTachometerAlt, FaGem, FaList,FaGithub, FaRegLaughWink, FaHeart, FaUser, FaDoorOpen } from "react-icons/fa";
import sidebarBg from "./bg2.jpg";
import "react-pro-sidebar/dist/css/styles.css";

const index = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar image={image ? sidebarBg : false} rtl={rtl} collapsed={collapsed} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar} style={{height:"100vh"}}>
      <SidebarHeader>
        <div style={{padding: "24px", textTransform: "uppercase", fontWeight: "bold", fontSize: 14, letterSpacing: "1px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          Employee Attendance
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}>
            All Attendance
          </MenuItem>
          <MenuItem icon={<FaUser />}>
            All User
          </MenuItem>
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
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              Dashboard GA
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default index;
