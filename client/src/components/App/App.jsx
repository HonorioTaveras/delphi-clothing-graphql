import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// COMPONENTS
import HomePage from '../../pages/Homepage/HomePage';
import ShopPage from '../../pages/Shop/Shop';
import SignInAndSignUp from '../../pages/SignInAndSignUp/SignInAndSignUp';
import CheckoutPage from '../../pages/Checkout/Checkout';
import Header from '../Header/Header';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import CurrentUserContext from '../../contexts/currentUser/currentUser';

import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({currentUser: userAuth});
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
          <CurrentUserContext.Provider value={currentUser}>
            <Header />
          </CurrentUserContext.Provider>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
