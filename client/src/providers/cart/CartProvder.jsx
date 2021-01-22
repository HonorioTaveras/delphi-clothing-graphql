import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart } from "./cartUtils";

const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
});
