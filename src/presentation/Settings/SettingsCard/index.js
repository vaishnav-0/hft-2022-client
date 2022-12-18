import React from 'react'
import "./style.css"

export default function  SettingsCard({text,last}){
  return (
    <div className="container max-w-md   ">
     <p>{text}</p> 
     <div className='settingsCard'></div>
    </div>
  );
}

