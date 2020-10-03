import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

// COMPONENTS
import HomePage from '../../pages/Homepage/HomePage';
import ShopPage from '../../pages/Shop/Shop';

import './App.scss';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
