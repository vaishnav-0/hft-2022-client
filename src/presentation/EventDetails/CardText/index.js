import { message } from "antd";
import React from "react";
const index = () => {
  const handkeClick = () => {
    message.success("You have successfully registered for the event");
  };
  return (
    <div>
      <p class="mb-3 font-light text-dark-500">
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
      <p class="font-light text-gray-500 dark:text-gray-400">
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease, with a complete audit
        trail for every change.
      </p>
      <button
        onClick={() => {
          handkeClick();
        }}
        type="button"
        class="   fixed bottom-12 w-[90%] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[2rem] text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Take part in event
      </button>
    </div>
  );
};

export default index;
