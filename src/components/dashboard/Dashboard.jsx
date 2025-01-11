/** @format */

import React, { useState } from "react";
import Sidebbar from "./sidebar/Sidebbar";
import DashboardContainer from "./sidebar/DashboardContainer";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("my-chatbots");

  // Update the active item when a sidebar item is clicked
  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div>
      <div className=" grid grid-cols-2 md:grid-cols-5">
        <Sidebbar handleClick={handleClick} activeItem={activeItem} />
        <div className=" col-span-4">
          <DashboardContainer activeItem={activeItem} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
