import React from "react";


export default function Heading(props) {
    return(
       <div style={{backgroundColor:"black"}}>
         <div className="container" style={{backgroundColor:"black"}}>
            <h1 className="title">
            <span className="text-color-about">{props.fh} </span>{[props.sh]}
          </h1>
        </div>
       </div>
    );
}


