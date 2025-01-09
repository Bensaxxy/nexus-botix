/** @format */

import React from "react";

const Heading = ({ activeItem, toggleSidebar }) => {
  // Define a title mapping for each item
  const titles = {
    overview: "Overview",
    "my-chatbots": "My Chatbots",
    messages: "Messages",
    training: "Training Module",
    analytics: "Analytics",
    integrations: "Integrations",
    settings: "Settings",
  };

  return (
    <div className="h-[81px]">
      <div className="container fixed w-full py-7 border-b-4 border-gray4 bg-gray2 flex items-center justify-between px-6">
        {/* Title */}
        <h1 className="text-[20px] font-semibold">{titles[activeItem]}</h1>

        {/* Toggle Button */}
        <button
          className="md:hidden bg-gray4 p-2 rounded-md"
          onClick={toggleSidebar}
        >
          <img src="/menu-icon.svg" alt="Toggle Sidebar" className="w-6" />
        </button>
      </div>
    </div>
  );
};

export default Heading;
