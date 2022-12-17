import React from "react";
import BottomNav from "../Components/BottomNav";
import TopUser from "./TopUser";
import ProfileTabs from "./ProfileTabs";
const index = () => {
  return (
    <div>
      <TopUser />
      <BottomNav />
      <ProfileTabs />
    </div>
  );
};

export default index;
