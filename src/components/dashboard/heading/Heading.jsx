/** @format */

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useBackgroundColor } from "../../../context/BackgroundColorContext";

const Heading = ({ activeItem, toggleSidebar }) => {
  const { bgColor } = useBackgroundColor(); // Get the context
  // Define a title mapping for each item
  const titles = {
    overview: "Overview",
    "my-chatbots": "My Chatbots",
    messages: "Messages",
    training: "Training Module",
    analytics: "Analytics",
    appearances: "Appearances",
    integrations: "Integrations",
    settings: "Settings",
  };

  return (
    <div className=" h-[81px] ">
      <div
        className="container z-50 fixed md:w-full py-7 border-b-2 border-gray4 "
        style={{ backgroundColor: bgColor }}
      >
        <h1 className=" hidden md:block text-[20px] font-semibold">
          {titles[activeItem]}
        </h1>
        <div className=" md:hidden flex justify-between items-center">
          <img src="/Logo.svg" alt="Logo" className="h-8" />
          <RxHamburgerMenu
            onClick={toggleSidebar}
            size={20}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
