import React, { useState } from "react";
import TableUser from "./TableUser";
import Navbar from "../navsidebar";
import NewSideBar from '../newnavbar';

export default function Index() {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    // setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div>
      <div style={{display:"flex"}}>
        <div>
          <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
            <NewSideBar
              image={image}
              collapsed={collapsed}
              rtl={rtl}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
            />
          </div>
        </div>
        <div style={{width:"100%"}}>
        <Navbar 
          image={image}
          toggled={toggled}
          collapsed={collapsed}
          rtl={rtl}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
          handleRtlChange={handleRtlChange}
          handleImageChange={handleImageChange} 
        />
        <TableUser />
        </div>
      </div>
    </div>
  );
}
