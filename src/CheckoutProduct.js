import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, price, image }) {

    return (
        <div className="checkoutProduct">
            <div className="img">
                <img className='checkoutProductImage' src={image} alt='' />
            </div>
            <div className='checkoutProduct--info' >
                <p className='checkoutProduct--title'>
                    {title}
                </p>
                <p className='checkoutProduct--price'>
                    <bold>₹</bold>
                    <strong>{price}</strong>
                </p>
                <button className="checkoutProduct--button" >Remove from Cart</button>

            </div>
        </div>

    )
}

export default CheckoutProduct
