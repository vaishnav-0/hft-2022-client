import React from "react";
import LocationButton from "./LocationButton";
import ImageSection from "./ImageSection";
import TextBox from "./TextBox";
import Top from "./Top";
const index = () => {
  return (
    <div className="space-y-5 " >
      <Top />
          <LocationButton />
          <ImageSection />
          <TextBox/>
    </div>
  );
};

export default index;
