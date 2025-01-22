/** @format */

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useBackgroundColor } from "../../../context/BackgroundColorContext";

const TopNavBg = () => {
  const { setBgColor } = useBackgroundColor(); // Get the context
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("#ffffff");

  const predefinedColors = [
    "#ffffff",
    "#FFD700",
    "#FF6B6B",
    "#4CAF50",
    "#2196F3",
    "#9C27B0",
    "#FF9800",
    "#795548",
    "#607D8B",
    "#F06292",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      setBgColor(value); // Update global state
    }
  };

  const handleColorSelect = (color) => {
    setInputValue(color);
    setBgColor(color); // Update global state
    setIsOpen(false);
  };
  return (
    <div>
      <div className="w-full">
        <p className=" text-black1 text-[14px] mb-2">Top Nav background</p>
        <div className="flex">
          <div
            className=" rounded-s-md h-10 w-12"
            style={{ backgroundColor: inputValue }}
          ></div>
          <div className=" bg-[#E7E7E7] rounded-e-md flex items-center gap-5">
            <input
              value={inputValue}
              onChange={handleInputChange}
              placeholder="#fffff"
              className=" bg-transparent text-black1 h-10 pl-4 outline-none"
              type="text"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="pr-4 hover:opacity-75"
            >
              <img
                src="/icons/arrow-down.svg"
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute mt-2 p-4 bg-white rounded-md shadow-lg border border-gray-200 z-10">
          <div className="grid grid-cols-5 gap-2 mb-4">
            {predefinedColors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorSelect(color)}
                className="w-8 h-8 rounded-md relative flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                {color === inputValue && (
                  <FaCheck className="text-white" size={16} />
                )}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <input
              type="color"
              value={inputValue}
              onChange={(e) => handleColorSelect(e.target.value)}
              className="w-full h-10 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavBg;
