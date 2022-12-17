import { Input } from "antd";
import React from "react";

const index = () => {
  return (
    <div className="ml-5">
      <div>
        <Input placeholder="Enter the Event Description" bordered={false} />
      </div>
      <button
        type="button"
        class="fixed bottom-12 w-[90%] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[2rem] text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Create event
      </button>
    </div>
  );
};

export default index;
