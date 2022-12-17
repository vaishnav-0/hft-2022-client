import React from "react";
import CardDetails from "./CardDetails";
import CardSection from "./CardSection";
import CardText from "./CardText";
import Top from "./Top";
const index = () => {
  return (
    <div className="m-5 space-y-6">
      <Top />
      <CardSection />
      <CardDetails />
      <CardText />
    </div>
  );
};

export default index;
