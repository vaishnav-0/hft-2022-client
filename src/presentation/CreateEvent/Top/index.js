import React from "react";
import close from "../../Common/icons/close.svg";
const index = () => {
  return (
    <div className=" ml-4 mr-5">
      <div className="container mt-12 max-w-lg mr-5  ">
        <div className="flex flex-row justify-between ">
          <div>
            <h4 className="font-poppins font-extrabold text-[1.7rem]">
              Create Event
            </h4>
          </div>
          <div className=" flex flex-row space-x-4">
            <img src={close} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
