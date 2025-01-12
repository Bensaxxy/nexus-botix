/** @format */

import React from "react";
import Heading from "../heading/heading";
import Overview from "../overview/Overview";
import Analytics from "../analytic/Analytics";
import Integrations from "../integrations/Integrations";
import TrainingModule from "../trainingModule/TrainingModule";
import MyChatbots from "../myChatbots/MyChatbots";

const DashboardContainer = ({ activeItem }) => {
  const renderContent = () => {
    switch (activeItem) {
      case "my-chatbots":
        return <MyChatbots />;
      case "overview":
        return <Overview />;
      case "training":
        return <TrainingModule />;
      case "analytics":
        return <Analytics />;
      case "integrations":
        return <Integrations />;
      case "settings":
        return <div>Settings Content</div>;
      default:
        return <MyChatbots />;
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
