import { Link } from 'react-router-dom';

import foodImg from '../assets/restaurant-food.jpg';

const Footer = () => {
  return (
    <footer className="footer content-container">
      <img src={foodImg} alt="image" height="310px" />
      <div className="footer-navigation">
        <div className="doormat-links">
          <h4>Doormat navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="menu">Menu</Link>
          <Link to="reservation">Reservation</Link>
          <Link to="order-online">Order online</Link>
          <Link to="login">Login</Link>
        </div>
        <div className="contact-links">
          <h4>Contacts</h4>
          <span>Address</span>
          <span>Phone number</span>
          <span>Email</span>
        </div>
        <div className="social-links">
          <h4>Social media links</h4>
          <Link
            to="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Link>
          <Link
            to="http://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link
            to="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link
            to="http://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiktok
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
