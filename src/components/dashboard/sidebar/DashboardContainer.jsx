/** @format */

import React from "react";
import Heading from "../heading/heading";
import Overview from "../overview/Overview";
import Integrations from "../integrations/Integrations";
import Analytics from "../analytic/Analytics";

const DashboardContainer = ({ activeItem }) => {
  const renderContent = () => {
    switch (activeItem) {
      case "overview":
        return (
          <div>
            <Overview />
          </div>
        );
      case "my-chatbots":
        return <div>My Chatbots Content</div>;
      case "messages":
        return <div>Messages Content</div>;
      case "training":
        return <div>Training Module Content</div>;
      case "analytics":
        return (
          <div>
            {" "}
            <Analytics />{" "}
          </div>
        );
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
        return <div>Overview Content</div>;
    }
  };

  return (
    <div>
      <Heading activeItem={activeItem} />
      <div>{renderContent()}</div>
    </div>
  );
};

export default DashboardContainer;
