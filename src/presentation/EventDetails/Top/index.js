import React from 'react'
import close from "../../Common/icons/close.svg"
const index = () => {
  return (
    <div className="container m-5 mt-12 max-w-md ">
      <div className="flex flex-row justify-between mr-6">
        <div>
          <h4 className="font-poppins font-extrabold text-[1.7rem]">
            Kovalam Beach
          </h4>
        </div>
        <div className=" flex flex-row space-x-4">
          <img src={close} alt="" />
        </div>
      </div>
    </div>
  );
}

export default index