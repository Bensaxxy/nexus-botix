/** @format */

import React from "react";
import ChangeAvatar from "./ChangeAvatar";
import ChatWindowBg from "./ChatWindowBg";
import UserChatMessageBg from "./UserChatMessageBg";
import ChatbotChatMessageBg from "./ChatbotChatMessageBg";
import SendMessageBtn from "./SendMessageBtn";

const Appearances = () => {
  return (
    <div>
      <div className="container bg-gray2 p-4">
        <div className=" bg-gray3 rounded-md p-4">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
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
                  <p className=" text-[12px]">
                    Upload your avatar and set colors
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div className=" flex flex-col gap-2">
                      <ChangeAvatar />
                      <ChatWindowBg />
                    </div>
                    <div>
                      <UserChatMessageBg />
                      <ChatbotChatMessageBg />
                      <SendMessageBtn />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex gap-6 items-center my-24">
                <button className=" py-3 px-8 bg-gray1 rounded-md text-white">
                  Reset appearance
                </button>
                <button className="py-3 px-8 bg-black2 rounded-md text-white flex gap-2 items-center">
                  Save changes <img src="/icons/arrow-right.svg" />
                </button>
              </div>
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
