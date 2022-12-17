import React from "react";
import Celebrities from "../../Common/icons/Celebrities.svg";
import Group from "../../Common/icons/Group.svg";
import Heart from "../../Common/icons/heart.svg";
import "./style.css";
const index = () => {
  return (
    <div className="w-100 content-center justify-center ">
      <div id="base_card">
        <div id="content_card">
          <div>
            <p>Kovalam Beach</p>
            <img src={Celebrities} alt="celibreties" />
          </div>
          <div>
            <div>
              <img src={Group} alt="another" />
              <p>naajidnavas</p>
            </div>
            <div>
              <img src={Group} alt="another" />
              <p>2k</p>
              <img src={Heart} alt="another" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
