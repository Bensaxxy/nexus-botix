/** @format */

import React, { createContext, useState, useContext } from "react";

// Create the context
const BackgroundColorContext = createContext();

// Create a provider component
export const BackgroundColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState("#f1f1f1"); // Default color

  return (
    <BackgroundColorContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

// Custom hook for consuming the context
export const useBackgroundColor = () => useContext(BackgroundColorContext);
