/** @format */

import React, { useState } from "react";
import ChangeAvatar from "./ChangeAvatar";
import ChatWindowBg from "./ChatWindowBg";
import UserChatMessageBg from "./UserChatMessageBg";
import ChatbotChatMessageBg from "./ChatbotChatMessageBg";
import SendMessageBtn from "./SendMessageBtn";
import AppearancesButton from "./AppearancesButton";
import TopNavBg from "./TopNavBg";

const Appearances = () => {
  const [buttonColor, setButtonColor] = useState("#607D8B");
  return (
    <div>
      <div className="container bg-gray2 p-4">
        <div className=" bg-gray3 rounded-md p-4">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className=" col-span-2  ">
              <div>
                <div className="bg-gray2 py-4 px-6 rounded-md mb-5">
                  <h1 className=" font-medium text-[16px]">Welcome Message</h1>
                  <p className=" text-[13px]">
                    The introductory message from the chatbot
                  </p>
                  <div className="bg-gray3 px-4 py-3 rounded-md my-6">
                    <h1>Hi, How can I help you today?</h1>
                  </div>
                </div>
                <div className="bg-gray2 py-4 px-6 rounded-md">
                  <h1 className=" font-medium text-[16px]">Branding</h1>
                  <p className=" text-[13px]">
                    Upload your avatar and set colors
                  </p>
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mt-4">
                    <div className=" flex flex-col gap-5">
                      <ChangeAvatar />
                      <ChatWindowBg />
                      <TopNavBg />
                    </div>
                    <div className=" flex flex-col gap-6">
                      <UserChatMessageBg />
                      <ChatbotChatMessageBg />
                      <SendMessageBtn onColorChange={setButtonColor} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Appearances button */}
              <AppearancesButton color={buttonColor} />
            </div>
            {/* side images */}
            <div>
              <img src="/chatbot-image/frame3.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearances;
