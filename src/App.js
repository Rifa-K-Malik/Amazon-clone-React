import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Subhdr from './Subhdr';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51KIbhBSJC6VgjbhrzaFJ0ZpZXtjsMujlgUWQsLEePNBniYTDyjpppC3jD0n8J6oitTVzbY1S4POPenk2nxklh9FA0078mbSoTK');

function App() {
  const [{ }, dispatch] = useStateValue();
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

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
