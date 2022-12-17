import { Button } from "antd";

import React from "react";

const index = () => {
  return (
    <div className="space-x-4 items-center">
      <Button
        variant="contained"
        className="rounded-[2rem]"
        
      >
        📢 Popular
      </Button>
      <Button className="rounded-[2rem]" variant="outlined">
        📍Near You
      </Button>
      <Button className="rounded-[2rem]" variant="contained">
        🔥 Hotspots
      </Button>
    </div>
  );
};

export default index;
