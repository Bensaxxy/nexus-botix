/** @format */

import React from "react";
import Heading from "../heading/heading";
import Overview from "../overview/Overview";
import Analytics from "../analytic/Analytics";
import Integrations from "../integrations/Integrations";

const DashboardContainer = ({ activeItem }) => {
  const renderContent = () => {
    switch (activeItem) {
      case "overview":
        return <Overview />;
      case "my-chatbots":
        return <div>My Chatbots Content</div>;
      case "messages":
        return <div>Messages Content</div>;
      case "training":
        return <div>Training Module Content</div>;
      case "analytics":
        <div>
          {" "}
          <Analytics />{" "}
        </div>;
      case "integrations":
        return (
          <div>
            {" "}
            <Integrations />{" "}
          </div>
        );
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
