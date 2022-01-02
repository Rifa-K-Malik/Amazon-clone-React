import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Subhdr from './Subhdr';
import Checkout from './Checkout';
import Login from './Login';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // Will only run once when app component is loaded 
    auth.onAuthStateChanged(
      authUser => {
        console.log('The User is :', authUser);
        if (authUser) {
          //  User just logged in / user was logged in 
          dispatch(
            {
              type: 'SET_USER',
              user: authUser
            }
          )
        } else {
          //User logged out 
          dispatch(
            {
              type: 'SET_USER',
              user: null
            }
          )
        }
      }
    )
  }, [])
  return (


    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Subhdr />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
