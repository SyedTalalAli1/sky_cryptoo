import React from "react";
import "./aboutt.css";
import Img1 from "../images/logobitcoin.png";
import { Link } from "react-router-dom";
import Contact from "./contact";

class Aboutt extends React.Component {
  
  state = {
    expertsData: [
      {
        image: "https://i.pinimg.com/736x/32/77/38/327738a1bb090ce425adc0de71523725.jpg",
        title: "Stefan Salvatore",
        profession: "Blockchain Developer",
      },
      {
        image: "https://i.pinimg.com/736x/ac/32/3a/ac323a51c57edc474927a850a58a7dab.jpg",
        title: "Klaus Mikaelson",
        profession: "Cryptocurrency Analyst",
      },
      {
        image: "data:image/jpeg;base64,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",
        title: "Lucien Castle",
        profession: "Smart Contract Engineer",
      },
      {
        image: "https://premiumpaintbynumbers.com/wp-content/uploads/2022/06/Legacies-Hope-Mikaelson-paint-by-number.jpg",
        title: "Hope Mikaelson",
        profession: "Crypto Marketing Specialist",
      },
    ],
  };
  render() {
    return (
      <div className="about-us-page">

         <div className="header">
          <h1 className="title">
            <span className="text-color-about">ABOUT </span>US
          </h1>
          <p className="ab-header">
            A COMMERCIAL WEBSITE THAT LISTS WALLETS, EXCHANGES AND OTHER BITCOIN
            RELATED INFO.
          </p>
        </div>

        <div className="content">
          <div className="image">
            <img className="image" src={Img1}  />
            <div className="details">
              <h2>About Sky Crypto</h2>
              <p>
                Welcome to Sky Crypto, where simplicity meets sophistication in
                the realm of Bitcoin transactions. We are your dedicated haven
                for buying and selling Bitcoins with ease. Deposit funds
                seamlessly through Visa/MasterCard or bank transfer, unlocking
                the assurance of instant, fairly priced transactions—no
                unnecessary complexities, just streamlined service.
              </p>
            </div>
          </div>
        </div>
         <div className="main-container">
          <h4>
            <span className="text-color-about">OUR </span>SUCCESS
          </h4>
      <div className="data-container">
        <h2>100,000 </h2>
        <h3>Total Users</h3>
      </div>

      <div className="data-container">
        <h2>10,000</h2>
        <h3>Daily Transactions</h3>
      </div>

      <div className="data-container">
        <h2>50,000</h2>
        <h3>Active Users</h3>
      </div>

      <div className="data-container">
        <h2>20,000</h2>
        <h3>Transaction Volume</h3>
      </div>

      <div className="button-container">
         <Link to="/login"> <button className="register-button">Register Now</button></Link>
      </div>
    </div>
 <div className="experts-section">
        <h5>
            <span className="text-color-about">OUR </span>EXPERTS
          </h5>
        {this.state.expertsData.map((expert, index) => (
          <div key={index} className="expert-container">
            <img src={expert.image} alt={`Expert ${index + 1}`} />
            <h3>{expert.title}</h3>
            <p>{expert.profession}</p>
          </div>
        ))}
      </div>
      <Contact/>
      </div>
    );
  }
}

export default Aboutt;
