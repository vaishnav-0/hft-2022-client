import React from 'react'
import coin from "../../Common/icons/coin.svg"
import "./style.css"
export default function PurchaseCoupon({CouponTitle,Amount}){
  return (
    <div  className="PurchaseCouponCard">
        <h4>{CouponTitle}</h4>
      <div>
        <p>{Amount}</p>
        <img src={coin}/>
      </div>   
    </div>
  );
}

