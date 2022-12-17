import React from "react";
import Top from "./Top/index.js"
import PointCard from "./PointCard/index.js"
import TabSwitcher from "./TabSwitcher/index.js"
import "./style.css"

const index = () => {
  return (
    <div className="m-5 space-y-6">
      <Top/>
      <div className="PointCardWrapper">
        <PointCard/>
        <PointCard/>
        <PointCard/>
      </div>
      <TabSwitcher/>
    </div>
  );
};

export default index;
