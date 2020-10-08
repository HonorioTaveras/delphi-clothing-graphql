/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import Logo from '../../assets/crown.svg';

import './Header.scss';

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
