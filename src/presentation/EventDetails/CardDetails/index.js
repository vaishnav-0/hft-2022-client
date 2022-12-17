import LocationOnIcon from "@mui/icons-material/LocationOn";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";

import map1 from "../../Common/images/maps/map1.jpg";
const index = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <div>
      <div className="flex w-full p-0 m-0 justify-between">
        <Card sx={{ minWidth: 280, maxWidth: 280 }}>
          <CardContent>
            <img src={map1} alt="" />
          </CardContent>
        </Card>
        <div className="flex flex-col space-y-11">
          <Avatar>
            <LocationOnIcon />
          </Avatar>
          <Avatar>
            <FavoriteBorderIcon/>
          </Avatar>
          <Avatar><ShareIcon/></Avatar>
        </div>
      </div>
    </div>
  );
};

export default index;
