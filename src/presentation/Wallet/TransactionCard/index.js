import * as React from 'react';
import './style.css'
import coin from "../../Common/icons/coin.svg"


export default function TransactionItem({TransAmount,TransDate}) {

  return (
    <div className='TransactionCardItem'>
        <div>
            <p>{TransAmount}</p>
            <img src={coin}/>
        </div>
        <p>{TransDate}</p>
    </div>
  );
}