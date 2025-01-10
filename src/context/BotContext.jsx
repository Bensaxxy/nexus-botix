/** @format */
import React, { createContext, useState, useContext } from "react";

const BotContext = createContext();

export const useBotDetails = () => {
  return useContext(BotContext);
};

export const BotProvider = ({ children }) => {
  const [botDetails, setBotDetails] = useState({
    botName: "",
    useCase: "",
    industry: "",
    infoSource: "",
  });

  return (
    <BotContext.Provider value={{ botDetails, setBotDetails }}>
      {children}
    </BotContext.Provider>
  );
};
