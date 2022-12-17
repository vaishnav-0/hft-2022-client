import React from "react";
import group2 from "../../Common/icons/group2.svg";
import profile from "../../Common/icons/profile.svg";
const index = () => {
    return (
    <div className="flex justify-between">
      <div className="flex space-x-2">
        <img src={profile} alt="profileimage" />
        <p>Najid Navas</p>
      </div>
      <div className="flex space-x-2">
        <img src={group2} alt="group2" />
        <p>2k</p>
      </div>
    </div>
  );
};

export default index;
