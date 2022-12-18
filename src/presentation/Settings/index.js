import React from "react";
import SettingsCard from "./SettingsCard";
import Top from "./Top";
const index = () => {
  return (
    <div className="container m-5 mt-12 ">
      <Top />
        <div>
            <SettingsCard text="Verify as Admin"/>
            <SettingsCard text="Verify as an organisation"/>
       
            <SettingsCard text="Logout"/>
        </div>
    </div>
  );
};

export default index;
