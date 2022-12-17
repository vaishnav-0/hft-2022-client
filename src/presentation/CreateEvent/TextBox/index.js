import { Input } from "antd";
import React from "react";

const index = ({ onChange, value }) => {
  return (
    <div className="ml-5">
      <div>
        <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Enter the Event Description" bordered={false} />
      </div>

    </div>
  );
};

export default index;
