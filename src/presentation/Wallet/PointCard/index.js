import React from 'react'
import coin from "../../Common/icons/coin.svg"
import './style.css'
const index = () => {
  return (
    <div className="pointCard">
      <div>
        <p>450</p>
        <img src={coin}/>
      </div>
      <div>
        <p>Received</p>
      </div>
    </div>
          
          
  );
}

export default index