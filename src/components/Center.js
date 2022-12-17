import React from "react";

export default function Center({children, style}:{children?: React.ReactNode, style?:React.CSSProperties}){

    return <div style={{display:"flex", justifyContent:"center", alignItems:"center", ...style}}>
        {
            children
        }
    </div>
}