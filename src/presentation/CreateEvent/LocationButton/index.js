import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const index = ({location}) => {
  return (
    <div>
      <div className="border-spacing-1 bg-slate-50 rounded-lg flex justify-center">
        <LocationOnIcon />
        <h2 className="font-bold "> {location} </h2>
      </div>
    </div>
  );
};

export default index;
