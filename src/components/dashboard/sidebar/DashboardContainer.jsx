/** @format */

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Heading from "../heading/heading";
import Overview from "../overview/Overview";
import Analytics from "../analytic/Analytics";
import Integrations from "../integrations/Integrations";
import TrainingModule from "../trainingModule/TrainingModule";
import MyChatbots from "../myChatbots/MyChatbots";

const DashboardContainer = ({ activeItem }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation based on the selected sidebar item
  const handleNavigation = (item) => {
    // Navigate to the corresponding route based on the selected item
    navigate(`/${item}`);
  };

  const renderContent = () => {
    switch (activeItem) {
      case "overview":
        return <Overview />;
      case "my-chatbots":
        return <MyChatbots />;
      case "messages":
        return <div>Messages Content</div>;
      case "training":
        return <TrainingModule />;
      case "analytics":
        return <Analytics />;
      case "integrations":
        return <Integrations />;
      case "settings":
        return <div>Settings Content</div>;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <Heading activeItem={activeItem} />
      <div className="p-4">{renderContent()}</div>
    </div>
  );
};

export default DashboardContainer;
