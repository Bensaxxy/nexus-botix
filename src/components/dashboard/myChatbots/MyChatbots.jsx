/** @format */

import React from "react";

const MyChatbots = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className=" bg-gray2 border-2 p-4 grid gap-2 rounded-md">
              <img src="/chatbot-icons/chatBot-1.svg" />
              <h1 className=" text-[18px] font-medium mt-4">Nexus bot</h1>
              <p className=" text-[14px]">
                ID: <span>s5qh5yOmipn7e7559ak1</span>{" "}
              </p>
              <p className=" text-[14px]">
                Created: <span>27/11/2024</span>{" "}
              </p>
              <p className=" text-[14px] underline mt-4">View chatbot</p>
            </div>
            <div>
              <div className=" cursor-pointer h-[200px] rounded-md bg-black flex flex-col items-center justify-center">
                <img src="/icons/white-plus.svg" />
                <h1 className=" text-gray3 text-[16px]">Create new Chatbot</h1>
              </div>
            </div>
          </div>
          <a
            className=" text-[18px] font-medium flex items-center gap-2 mt-6"
            href="#"
          >
            Upgrade plan to get more privilages{" "}
            <img src="/social-media-icons/arrow-right.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyChatbots;
