import React from "react";
import './footer.css'
import { FaCcAmex, FaCcMastercard, FaCcVisa, FaPaypal } from 'react-icons/fa';

class Footer extends React.Component {
    state = {  } 
    render() { 
        return (
             <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h2>OUR COMPANY</h2>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>HELP & SUPPORT</li>
            <li>FAQ</li>
            <li>REGISTER</li>
            <li>LOGIN</li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>CONTACT US</h2>
          <p>www.skycrypto.com</p>
          <p>+923132467944</p>
          <p>Karachi Lahore</p>
          <p>Mon-Fri<br></br>08:AM ⇾ 05:PM</p>
        </div>

        <div className="footer-column">
          <h2>STATISTICS</h2>
          <div className="users">
        <h2>100,000 </h2>
        <h3>Total Users</h3>
      </div>

      <div className="users">
        <h2>10,000</h2>
        <h3>Daily Transactions</h3>
      </div>

      <div className="users">
        <h2>50,000</h2>
        <h3>Active Users</h3>
      </div>

      <div className="users">
        <h2>20,000</h2>
        <h3>Transaction Volume</h3>
      </div>
        </div>

        <div className="footer-column">
          <h2>SUPPORTED PAYMENT METHODS</h2>
           <div className="payment-icons">
         <FaCcAmex style={{color:"#ffc107", fontSize:'40px', marginRight:"17px"}} />
        <FaCcMastercard style={{color:"#ffc107",fontSize:"40px", marginRight:"17px"}}  />
        <FaCcVisa style={{color:"#ffc107", fontSize:"40px", marginRight:"17px"}} />
        <FaPaypal style={{color:"#ffc107",fontSize:"40px", marginRight:"17px"}} />
          </div>
        </div>
      </div>
    </footer>
        );
    }
}
 
export default Footer;