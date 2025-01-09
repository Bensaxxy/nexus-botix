/** @format */

import React, { useState } from "react";
import Sidebbar from "./sidebar/Sidebbar";
import DashboardContainer from "./sidebar/DashboardContainer";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("overview");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5">
      {/* Pass handleClick and activeItem to Sidebbar */}
      <Sidebbar handleClick={handleClick} activeItem={activeItem} />

      {/* Main content section */}
      <div className="col-span-4">
        {/* Pass activeItem to DashboardContainer */}
        <DashboardContainer activeItem={activeItem} />
      </div>
    </div>
  );
};

export default Dashboard;
