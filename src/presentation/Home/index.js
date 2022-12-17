import React from "react";
import search from "../Common/icons/search.svg";
const index = () => {
  return (
    <div className="container m-7 mt-12">
      <div className="flex flex-row justify-between">
        <div className="left-0">
          <h4 className="font-poppins font-extrabold text-[1.7rem]">BeClean</h4>
        </div>
        <div className="mt-1 flex flex-row space-x-4">
          <img src={search} alt="" />
          <div className="rounded-[1.4rem] bg-[#3F63F4] ">
            <h2 className="p-2 font-poppins font-bold text-[1.4rem]">400</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
