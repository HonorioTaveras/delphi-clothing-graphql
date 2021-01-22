/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/CartProvider';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <img className="shopping-icon" src={`/${ShoppingIcon}`} alt="Shopping Icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
