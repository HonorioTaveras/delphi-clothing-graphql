import React from 'react';
import ReactDOM from 'react-dom';

import CartProvider from './providers/cart/CartProvider';

import App from './components/App/App';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('app'),
);
