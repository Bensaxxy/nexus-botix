/** @format */

import React, { useState } from "react";
import chatbot1 from "/chatbot-icons/chatBot-1.svg";
import chatbot2 from "/chatbot-icons/chatBot-2.svg";
import chatbot3 from "/chatbot-icons/chatBot-3.svg";
import chatbot4 from "/chatbot-icons/chatBot-4.svg";
import chatbot5 from "/chatbot-icons/chatBot-5.svg";
import chatbot6 from "/chatbot-icons/chatBot-6.svg";
import checkbox from "/icons/checkmark.svg";

const ChangeAvatar = () => {
  const [selectedIcon, setSelectedIcon] = useState(chatbot1);
  const [activeIcon, setActiveIcon] = useState(null);
  const [isLogoChanging, setIsLogoChanging] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false); // State to show checkbox

  // Handle icon selection
  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setActiveIcon(icon);
    setShowCheckbox(false); // Reset checkbox visibility when an icon is selected
    setIsLogoChanging(false);
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedIcon(reader.result);
        setActiveIcon(null); // Reset activeIcon for uploaded logo
        setShowCheckbox(true); // Show the checkbox on successful upload
        setIsLogoChanging(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div>
        {/* Display the selected logo with consistent size */}
        <div className="w-[3rem] rounded-md overflow-hidden">
          <img
            src={selectedIcon}
            alt="selected chatbot"
            className="w-full h-full object-contain"
          />
        </div>

        <p
          onClick={() => setIsLogoChanging(!isLogoChanging)}
          className="underline text-black1 text[10px] font-medium mt-2 cursor-pointer"
        >
          Change avatar
        </p>

        {/* Icon Selection Grid */}
        <div
          className={`${
            isLogoChanging
              ? "max-h-[300px]  absolute opacity-100"
              : " absolute max-h-0 opacity-0"
          } overflow-hidden transition-all duration-500 drop-shadow-sm  ease-in-out bg-white p-6 w-full md:max-w-[250px] rounded-lg mt-2`}
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
            {[chatbot1, chatbot2, chatbot3, chatbot4, chatbot5, chatbot6].map(
              (icon, index) => (
                <div
                  key={index}
                  className={`w-[2rem] rounded-md overflow-hidden cursor-pointer duration-300 hover:scale-105 transition-transform ${
                    activeIcon === icon ? "bg-gray4" : ""
                  }`}
                  onClick={() => handleIconSelect(icon)}
                >
                  <img
                    src={icon}
                    alt={`chatbot${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )
            )}
          </div>
          <div className="flex justify-between items-center mt-4">
            <label
              htmlFor="file-upload"
              className="underline text-[12px] font-semibold cursor-pointer"
            >
              Upload Logo
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            {showCheckbox && (
              <img src={checkbox} alt="Upload Successful" className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeAvatar;
