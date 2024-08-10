import React from "react";
import "./slider.css";
import { Link } from "react-router-dom";

class Image extends React.Component {
  render() {
    return (
      <div className="bg-color">
        <div className="head-center">
          <h1 className="head-title">
            <span className="yellow-text">Elevate</span> Your Crypto
            <br /> Experience With{" "}
            <span className="yellow-text">SkyCrypto</span>
          </h1>
          <p className="head-subtitle">
            Discovering new oceans requires the courage to lose sight
            <br /> of familiar shores and venture into the unknown{" "}
          </p>
         <Link to="/about">
            <button
              id="btn-gett"
              type="button"
              className="btn btn-warning text-dark"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Image;
