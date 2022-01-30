import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
 
  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        //stripe expect total amount in base currencies like Rupees to paise
        url: `/payments/create?total=${getCartTotal(cart)* 100}`
      });
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  },[cart])

  const handleSubmit = async (event) => {
      event.preventDefault();
      setProcessing(true);

     const payload = await stripe.confirmCardPayment(clientSecret, {
       payment_method: {
         card: elements.getElement(CardElement)
       }
    }).then( ({paymentIntent}) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false)

        history.replace('/orders')
    })
  };


    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    return (
        <div className='payment' >
            <div className='payment-container' >
                {/* Delivery Address  */}
                <div className='payment-section' >
                    <div className='payment-title'>
                        <h3>Delivery Address:</h3>
                    </div>
                    <div className='payment-address'>
                        <p className='mr' >{user?.email}</p>
                        <p className='mr' >Flat 301, Hiranandani</p>
                        <p className='mr' >Andheri, India</p>
                    </div>
                </div>
                {/* Cart Review  */}
                <div className='payment-section' >
                    <div className='payment-title'>
                        <h3>Rewiew Your Item In Cart</h3>
                    </div>
                    <div className='payment-items'>
                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment Gateway  */}
                <div className='payment-section' >
                    <div className='payment-title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment-detail' >
                        {/* Strips Secret Code  */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment--priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p className='mt-2'>Subtotal ({cart.length} items):<strong>{value}</strong> </p>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button className='mt-2 buynow' disabled={processing || disabled || succeeded} >
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors  */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
