import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"> SkyCrypto</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/market">Market</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="Trade Services" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Trading
        </a>
        <div className="dropdown-menu" aria-labelledby="Trading">
          <a className="dropdown-item" href="#">Spot Trade</a>
          <a className="dropdown-item" href="#">Future Trade</a>
          <a className="dropdown-item" href="#">P2P Exchange</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="Trade Services" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
        </a>
        <div className="dropdown-menu" aria-labelledby="Trading">
          <a className="dropdown-item" href="#">Pay</a>
          <a className="dropdown-item" href="#">Loan</a>
          <a className="dropdown-item" href="#">Charity</a>
        </div>
      </li>
       <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About Us</a>
      </li>
    </ul>
<form className="form-inline my-2 my-lg-0">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
  <button id="btn-submit" className="btn btn-outline-success my-2 my-sm-0 text-dark btn-white" type="submit">Search</button>
</form>

   <Link to="/login">
            <button
              type="button"
              className="btn btn-warning text-dark"
            >
              Get Started
            </button>
          </Link>
  </div>
</nav>
             
        );
    }
}
 
export default Navbar;