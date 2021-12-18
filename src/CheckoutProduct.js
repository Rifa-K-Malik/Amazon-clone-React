import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, title, price, image }) {
        const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {

        dispatch( {
            type: "REMOVE_FROM_CART",
            id: id,
        }
        );
   }

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
                <button className="checkoutProduct--button" onClick = {removeFromCart} >Remove from Cart</button>

            </div>
        </div>

    )
}

export default CheckoutProduct
