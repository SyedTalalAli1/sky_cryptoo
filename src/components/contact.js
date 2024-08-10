import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./contact.css";
import Pf1 from "../images/maham.jpg"
import Pf2 from "../images/rohail.jpg"
import Pf3 from "../images/talal.jpg"

class Contact extends React.Component {
  iconStyle = {
    color: '#ffc107',
    marginRight: '8px',
    fontsize:"30px"
  };

  render() {
    return (
      <div className="contact-us">
        <footer className="footer-section">
          <div className="complaint-form">
            <h3>Help Us Serve You Better</h3>
            <form>
              <label htmlFor="complaint" className="desc">For trading inquiries or suggestions, use the form below. We're dedicated to supporting your trading needs.</label>
              <textarea id="complaint" name="complaint" rows="4" required placeholder="Type a Message"></textarea>

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="yourname@gmail.com" required />

              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" placeholder="+92" required />

              <button type="submit" className="btn btn-warning">Submit</button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>

           
            <div className="contacts">
              <div className="contact-item">
              <FaMapMarkerAlt  className="iconsloc"  /> Address: 2nd Floor, A-352 Blk 15, Block 15 Gulistan-e-Johar,<br/> Karachi, Karachi City, Sindh 75290

            </div>

            <div className="contact-item">
              <FaPhone  className="icons"  /> Phone No : +92 3132456098
            </div>

            <div className="contact-item">
              <FaEnvelope  className="icons"  /> Email: skycrypto@gmail.com
            </div>
            </div>

           <div className="center-prof">
  <div className="contact-item">
    <div className="profile-pic">
      <img className="prof-pic" src={Pf1} alt="Profile" />
      <h1 className="prof_heading">Maham Sultana</h1>
    </div>
    <Link to="https://www.facebook.com/profile.php?id=100081500791046" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="iconsdev" />
    </Link>
    <Link to="https://www.instagram.com/mahamm.__.xx/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="iconsdev" />
    </Link>
    <Link to="https://wa.me/+923132478355" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="iconsdev" />
    </Link>
  </div>

  <div className="contact-item">
    <div className="profile-pic">
      <img className="prof-pic" src={Pf3} alt="Profile" />
      <h1 className="prof_heading">Syed Talal Ali</h1>
    </div>
    <Link to="https://www.facebook.com/Talal.ali11" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="iconsdev" />
    </Link>
    <Link to="https://www.instagram.com/syed_talal_ali" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="iconsdev" />
    </Link>
    <Link to="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="iconsdev" />
    </Link>
  </div>

  <div className="contact-item">
    <div className="profile-pic">
      <img className="prof-pic" src={Pf2} alt="Profile" />
      <h1 className="prof_heading">Rohail</h1>
    </div>
    <Link to="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="iconsdev" />
    </Link>
    <Link to="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="iconsdev" />
    </Link>
    <Link to="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="iconsdev" />
    </Link>
  </div>
</div>

          </div>
        </footer>
      </div>
    );
  }
}

export default Contact;
