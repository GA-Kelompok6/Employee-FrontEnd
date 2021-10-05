import React from "react";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";

export const userData = [
  {
    title: "Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text", //classname
  },
  {
    title: "Log out",
    path: "/",
    icon: <IoIcons.IoIosExit />,
    cName: "nav-text", //classname
  },
];
window.localStorage.clear();