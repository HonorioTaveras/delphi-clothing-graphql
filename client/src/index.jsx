import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import CartProvider from './providers/cart/CartProvder';

import App from './components/App/App';

ReactDOM.render(
  <CartProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </CartProvider>,
  document.getElementById('app'),
);
