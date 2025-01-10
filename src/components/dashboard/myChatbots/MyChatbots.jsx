/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const MyChatbots = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleCreateChatbotClick = () => {
    // Navigate to the next page (replace '/create-chatbot' with the actual route)
    navigate("/create-chatbot");
  };
  return (
    <div>
      <div className="container bg-gray2 p-4">
        <div className="bg-gray3 rounded-md p-4">
          <div className=" my-4">
            <h1 className=" font-bold text-[28px]">Build your AI Agents</h1>
            <p>
              Craft customized AI Agents for your business and customer support.
            </p>
          </div>
          <div
            onClick={handleCreateChatbotClick}
            className=" cursor-pointer w-[220px] h-[200px] rounded-md bg-black flex flex-col items-center justify-center"
          >
            <img src="/icons/white-plus.svg" />
            <h1 className=" text-gray3 text-[16px]">Create new Chatbot</h1>
          </div>
          <a className=" font-medium flex items-center gap-2 mt-6" href="#">
            Upgrade plan to get more privilages{" "}
            <img src="/social-media-icons/arrow-right.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyChatbots;
