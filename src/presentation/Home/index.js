import React from "react";
import TopButtons from "./TopButtons";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import TopNav from "./TopNav";
const index = () => {
  return (
    <div className="w-[90%] justify-center ml-5 space-y-4">
      <TopNav />
      <TopButtons />
      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
    </div>
  );
};

export default index;
