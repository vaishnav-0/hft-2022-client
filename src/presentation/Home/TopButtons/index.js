import { Button } from "antd";

import React from "react";

const index = () => {
  return (
    <div className="space-x-4 items-center">
      <Button
        variant="contained"
        className="rounded-[2rem]"
        
      >
        ๐ข Popular
      </Button>
      <Button className="rounded-[2rem]" variant="outlined">
        ๐Near You
      </Button>
      <Button className="rounded-[2rem]" variant="contained">
        ๐ฅ Hotspots
      </Button>
    </div>
  );
};

export default index;
