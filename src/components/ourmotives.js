import React from "react";
import { useState } from "react";

export default function OurMotives() {

      const [Heading, setHeading] = useState("OurMission");
     const [Para, setPara] = useState("Simplifying and elevating the crypto experience for all through transparent transactions and innovative solutions. Join us as we redefine the landscape of cryptocurrency, making it accessible, transparent, and innovative for everyone.");

    function OurMission() {

        setHeading("Our Mission")
        setPara("Simplifying and elevating the crypto experience for all through transparent transactions and innovative solutions. Join us as we redefine the landscape of cryptocurrency, making it accessible, transparent, and innovative for everyone.")
    }
    function OurGuarantee() {

        setHeading("Our Guarantee")
        setPara("A commitment to seamless transactions, fair pricing, and satisfaction. Your journey with us is designed to be secure, reliable, and rewarding. Experience the assurance of a trustworthy partner in your crypto endeavors.")
    }
    function OurAdvantage() {

        setHeading("Our Advantage")
        setPara("Discover the Sky Crypto difference with unparalleled efficiency, fair pricing, and a user-centric approach. We redefine your crypto journey by prioritizing convenience and reliability. Join us for a seamless experience that sets us apart in the world of cryptocurrency")
    }

    return(
       <>
        <div className="about-us-links">
         <button id="about-btn" type="button" className="btn btn-warning text-dark" onClick={OurMission}>Our Mission</button>
           <button id="about-btn" type="button" className="btn btn-warning text-dark" onClick={OurGuarantee}>Our Guarantee</button>
             <button id="about-btn" type="button" className="btn btn-warning text-dark" onClick={OurAdvantage}>Our Advantages</button>
        </div>

        <div className="about-us-main-content">
          <h2>{Heading}</h2>
          <p>
         {Para}</p>
        </div></>
    );
    
}
