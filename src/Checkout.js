import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
      <div className="checkout--left">
          <img className="checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />
        <div>
          <h3 className="checkout--title">Your Shopping Details</h3>
          {/* Cart Item here */}
          {/* Cart Item here */}
        </div>
      </div>

      <div className="checkout--right">
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout
