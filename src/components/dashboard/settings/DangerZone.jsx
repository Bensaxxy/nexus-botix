/** @format */

import React from "react";

const DangerZone = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-gray2 flex flex-col py-8 px-8 rounded-md">
        <img className="w-12" src="/icons/warning.svg" />
        <h1 className=" font-semibold mt-2 text-[18px]">
          Account Deletion Request
        </h1>
        <p className=" mt-2 mb-8">
          Please be aware that deleting your AI Agent is irreversible and will
          result in the permanent removal of all your data, preferences,
          messages, and history with our service.
        </p>
        <div>
          <button className="bg-red-600 hover:bg-red-500 duration-300 py-2 px-5 rounded-lg text-white">
            Delete AI Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default DangerZone;
