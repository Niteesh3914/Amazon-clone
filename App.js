import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51M1bBySAgQDuFKwWNwkmJQFsbmxHaHLNEs64xdKA4zjqoVv7KWr4UlOhM1QkVW3RZqOyQysWxynBM8Edez3EcTAv00J260WrPf');
function App() {
  const [{}, dispatch]= useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        // user just logged in / user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        //use is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (

    <Router>
    <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route path='/orders'
            element={[<Header />, <Orders />]}
          />
          <Route path='/login'
            element={<Login />}
          />
          <Route path='/checkout'
            
            element={[<Header />, <Checkout />]}
           /> 
           <Route path='/payment'
            
            element={[<Header />, 
            <Elements stripe={promise}>  <Payment /> </Elements>]}
           /> 
          <Route path="/" element={[<Header />, <Home/>]}  />
        </Routes>
    </div>
    </Router>

  );
}

export default App;
