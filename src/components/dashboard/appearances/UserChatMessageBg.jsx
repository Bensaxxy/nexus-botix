/** @format */

import React from "react";

const UserChatMessageBg = () => {
  return (
    <div>
      <div className="w-full">
        <p className=" text-black1 text-[14px] mb-2">
          User chat message background
        </p>
        <div className="flex">
          <div className=" rounded-s-md h-10 w-12 bg-white"></div>
          <div className=" bg-[#E7E7E7] rounded-e-md flex items-center gap-5">
            <input
              placeholder="#fffff"
              className=" bg-transparent h-10 pl-4 outline-none"
              type="text"
            />
            <img src="/icons/arrow-down.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatMessageBg;
