import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <nav>
        <h1>
          Welcome To <span>Bookomari</span>
        </h1>
        <Link to="/home">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/dashboard">DashBoard</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    );
};

export default Header;