import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="app-navigation">
      <ul>
        <Link to="/">Home</Link>
        <a href="#about-section">About</a>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reservations</Link>
        <Link to="/order-online">Order Online</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
  );
};

export default Nav;
