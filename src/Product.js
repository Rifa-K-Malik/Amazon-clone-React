import React from 'react'
import './Product.css';

function product() {
    return (
        <div className="product">
            <div className="product--info">
                <p>See U in C</p>
                <p>by Ali Karim Sayed (Author) </p>
                <p className="product--price">
                    <bold>₹</bold>
                    <strong>4424.56</strong>
                </p>
                <img className="product--image" src="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg" alt=""/>
            </div>
            <button className="product--button">Add To Cart</button>
        </div>
    )
}

export default product
