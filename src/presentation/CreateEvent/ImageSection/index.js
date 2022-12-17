import React from "react";

const index = ({src}) => {
  return (
    <div className="m-5">
      <div className="w-[90%] h-32 bg-black">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default index;
