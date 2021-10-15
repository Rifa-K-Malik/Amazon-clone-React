import React from 'react'
import './Subtotal.css'


function Subtotal() {
    return (
        <div className="subtotal">
            <p>SubTotal (2 item): <strong>0</strong> </p>
            <small className="subtotal--gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            <br/>
            <button className="subtotal-button">Proceed to Buy</button>
        </div>
    )
}

export default Subtotal
