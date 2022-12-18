import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../Components/BottomNav";
const index = () => {
  return (
    <div className="flex flex-1 object-bottom mb-3">
      <Outlet></Outlet>
      <BottomNav />
    </div>
  );
};

export default index;
