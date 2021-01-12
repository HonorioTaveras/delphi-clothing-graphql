/* eslint-disable no-shadow */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// COMPONENTS
import HomePage from '../../pages/Homepage/HomePage';
import ShopPage from '../../pages/Shop/Shop';
import SignInAndSignUp from '../../pages/SignInAndSignUp/SignInAndSignUp';
import CheckoutPage from '../../pages/Checkout/Checkout';

import Header from '../Header/Header';

import { selectCurrentUser } from '../../redux/user/userSelectors';
import { checkUserSession } from '../../redux/user/userActions';

import './App.scss';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
