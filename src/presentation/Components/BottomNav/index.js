import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import * as React from "react";
import { useState } from "react";
import camera from "../../Common/icons/camera.svg";
import home from "../../Common/icons/home.svg";
import usersquare from "../../Common/icons/usersquare.svg";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <div className="fixed bottom-0">
      <Box sx={{ width: 400 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<img src={camera} alt="camera" />} />
          <BottomNavigationAction icon={<img src={home} alt="home" />} />
          <BottomNavigationAction icon={<img src={usersquare} alt="userSquare" />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}
