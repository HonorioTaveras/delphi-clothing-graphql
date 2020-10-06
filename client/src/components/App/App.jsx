/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import HomePage from '../../pages/Homepage/HomePage';
import ShopPage from '../../pages/Shop/Shop';
import Header from '../Header/Header';
import SignInAndSignUp from '../../pages/SignInAndSignUp/SignInAndSignUp';
import { auth } from '../../firebase/firebase.utils';

import './App.scss';

export default class App extends Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log('user: ', user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router>
        <div>
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}
