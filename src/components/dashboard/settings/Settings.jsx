/** @format */

import React, { useState } from "react";
import General from "./General";
import DangerZone from "./DangerZone";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("General"); // Default section

  return (
    <div className="container bg-gray2 p-4">
      <div className="bg-gray3 rounded-md p-4">
        {/* Buttons */}
        <div className="w-full max-w-[250px] rounded-md px-2 py-3 flex justify-center items-center gap-10 bg-gray2">
          <div>
            <button
              className={`${
                activeSection === "General"
                  ? "font-semibold py-2 px-4 rounded-md bg-gray3"
                  : ""
              }`}
              onClick={() => setActiveSection("General")}
            >
              General
            </button>
          </div>
          <div>
            <button
              className={`${
                activeSection === "DangerZone"
                  ? "font-semibold py-2 px-4 rounded-md bg-gray3"
                  : ""
              }`}
              onClick={() => setActiveSection("DangerZone")}
            >
              Danger Zone
            </button>
          </div>
        </div>

        {/* Content Rendering */}
        <div className="mt-4">
          {activeSection === "General" && <General />}
          {activeSection === "DangerZone" && <DangerZone />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
