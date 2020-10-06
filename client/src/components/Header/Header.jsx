/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Logo from '../../assets/crown.svg';

import './Header.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={Logo} alt="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
