/** @format */

import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import DashboardContainer from "./sidebar/DashboardContainer";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (item) => {
    setActiveItem(item);
    setIsSidebarOpen(true); // Close the sidebar when an item is selected (mobile only)
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Sidebar and Content */}
      <div className="grid grid-cols-2 md:grid-cols-5">
        <Sidebar
          handleClick={handleClick}
          activeItem={activeItem}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className="col-span-4">
          <DashboardContainer
            toggleSidebar={toggleSidebar}
            activeItem={activeItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
