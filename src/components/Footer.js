import { Link } from 'react-router-dom';

import foodImg from '../assets/restauranfood.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={foodImg} alt="" height="310px" />
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
        </div>
        <div className="social-links">
          <h4>Social media links</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
