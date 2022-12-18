import React from "react";
import { Link } from "react-router-dom";
import close from "../../Common/icons/close.svg";
const index = () => {
  return (
    <div className="container  mt-12 max-w-md  ">
      <div className="flex flex-row justify-between ">
        <div>
          <h4 className="font-poppins font-extrabold text-[1.7rem]">Wallet</h4>
        </div>
        <div className=" flex flex-row space-x-4">
          <Link to="/" >
            <img src={close} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
