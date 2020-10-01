/* eslint-disable import/extensions */
import React, { Component } from 'react';

import HomePage from '../pages/Homepage/HomePage.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}
