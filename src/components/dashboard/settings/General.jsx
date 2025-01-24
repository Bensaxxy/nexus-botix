/** @format */

import React from "react";

const General = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
      {/* Ai Agent Name */}
      <div className=" bg-gray2 flex flex-col py-4 px-8 rounded-md">
        <h1 className=" font-semibold text-[18px]">AI Agent Name </h1>
        <p className=" mt-1 mb-9 text-[15px]">Enter a name for your AI Agent</p>
        <input
          className=" bg-white rounded-md py-3 outline-none px-4"
          type="text"
          placeholder="e.g Eagle Eye"
        />
      </div>
      <div></div>
      <div className=" bg-gray2 flex flex-col py-4 px-8 rounded-md">
        <h1 className=" font-semibold text-[18px]">Team Members </h1>
        <p className=" mt-1 mb-9 text-[15px]">
          Team members have full access to your chatbot but not your account or
          billing details.
        </p>
        <div className=" flex items-center gap-4">
          <input
            className=" bg-white w-full rounded-md py-3 outline-none px-4"
            type="text"
            placeholder="Enter email to add a team member"
          />
          <img className="w-8 cursor-pointer" src="icons/plus-icon.svg" />
        </div>
        <p className=" mt-4 mb-4 text-[15px] text-black1">
          No team members are available
        </p>
      </div>
    </div>
  );
};

export default General;
