import React from 'react';
import './aboutus.css'
import Img1 from "../images/logobitcoin.png"
import { useState } from 'react';

const AboutUs = () => {

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
  
  return (
    <div className="about-us-container">
      <div className="about-us-header">
         <h1 className="aboutus-title">
            <span className="text-color-about">ABOUT </span>US</h1>
        <p className='about-us-header'>A COMMERCIAL WEBSITE THAT LISTS WALLETS, EXCHANGES AND OTHER BITCOIN RELATED INFO.</p>
      </div>
      
      <div className="about-us-content">
         <div className="about-us-image">
      <div className="image-container">
        <img className='image' src={Img1} alt="About Us Image" />
        <div className="image-details">
          <h2>About Sky Crypto</h2>
          <p>Welcome to Sky Crypto, where simplicity meets sophistication in the realm of Bitcoin transactions. We are your dedicated haven for buying and selling Bitcoins with ease. Deposit funds seamlessly through Visa/MasterCard or bank transfer, unlocking the assurance of instant, fairly priced transactions—no unnecessary complexities, just streamlined service.</p>
        </div>
      </div>
    </div>

        <div className="about-us-links">
         <button id="about-btn" type="button" className="btn btn-warning text-dark" onClick={OurMission}>Our Mission</button>
           <button id="about-btn" type="button" className="btn btn-warning text-dark" onClick={OurGuarantee}>Our Guarantee</button>
             <button id="about-btn" type="button" className="btn btn-warning text-dark" onClick={OurAdvantage}>Our Advantages</button>
        </div>

        <div className="about-us-main-content">
          <h2>{Heading}</h2>
          <p>
         {Para}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
