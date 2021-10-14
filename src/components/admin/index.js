import React, { useState } from 'react';
import Aside from './admin';
import Navbar from "../navsidebar";

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div style={{display:"flex"}}>
      <div>
        <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
          <Aside
            image={image}
            collapsed={collapsed}
            rtl={rtl}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
          />
        </div>
      </div>
      <div style={{width:"100%"}}>
        <Navbar />
      </div>
    </div>
  );
}

export default Layout;