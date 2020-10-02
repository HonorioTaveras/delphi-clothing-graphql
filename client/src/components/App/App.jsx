/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Homepage/HomePage.jsx';

import './App.scss';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}
