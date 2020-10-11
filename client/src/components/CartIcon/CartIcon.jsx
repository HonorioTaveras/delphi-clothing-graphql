import React from 'react';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = () => (
  <div className="cart-icon">
    <img className="shopping-icon" src={ShoppingIcon} alt="Shopping Icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
