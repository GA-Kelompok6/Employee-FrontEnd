import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const userData = [
   {
      title: "Log out",
      path: "/",
      icon: <IoIcons.IoIosExit />,
      cName: "nav-text", //classname
   },

];
window.localStorage.clear();
