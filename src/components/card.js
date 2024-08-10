import Img1 from "../images/bgbit.png";
import Img2 from "../images/bgtransaction.png";
import Img3 from "../images/bgtrading.png";
import React from 'react';
import "./card.css";

const Cards = () => {
  const cardsData = [
    {
      title: 'Bitcoin',
      image: Img1,
      description: 'The original and most widely used cryptocurrency.',
    },
    {
      title: 'Transaction',
      image: Img2,
      description: 'Fast and secure transactions using blockchain technology.',
    },
    {
      title: 'Trading',
      image: Img3,
      description: 'Easy and convenient buying and selling of cryptocurrencies.',
    },
  ];

  return (
    <div className="crypto-card-container">
      {cardsData.map((card, index) => (
        <div className="crypto-card" key={index}>
          <div className="card-content">
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
