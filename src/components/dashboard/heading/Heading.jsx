/** @format */

import React from "react";

const Heading = ({ activeItem }) => {
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
    <div className=" h-[81px]">
      <div className="container fixed w-full py-7 border-b-4 border-gray4 bg-gray2">
        <h1 className="text-[20px] font-semibold">{titles[activeItem]}</h1>
      </div>
    </div>
  );
};

export default Heading;
