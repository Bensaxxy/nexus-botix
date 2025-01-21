/** @format */

import React from "react";

const AppearancesButton = ({ color }) => {
  return (
    <div>
      <div className="flex gap-6 items-center my-24">
        <button
          className="py-3 px-8 rounded-md text-white"
          style={{ backgroundColor: color }}
        >
          Reset appearance
        </button>
        <button
          className="py-3 px-8 rounded-md bg-gray1 text-white flex gap-2 items-center"
          style={{ backgroundColor: color }}
        >
          Save changes <img src="/icons/arrow-right.svg" />
        </button>
      </div>
    </div>
  );
};

export default AppearancesButton;
