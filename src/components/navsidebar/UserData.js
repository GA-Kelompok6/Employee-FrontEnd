import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";

export const userData = [
  {
    title: "Profile",
    path: "/",
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