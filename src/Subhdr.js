import React from 'react'
import './Subhdr.css';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Subhdr() {
    return (
        <div className="subheader">
            <div className="subheadertwo">
                <div className="all">
                    <DehazeIcon></DehazeIcon>
                    <span className="span" >All</span>
                </div>
                <div className="ulli" >
                    <ul className="ul">
                        <li>Mobiles</li>
                        <li>Best Sellers</li>
                        <li>Customer Service</li>
                        <li>Fashion</li>
                        <li>Electronics</li>
                        <li>Prime</li>
                        <li>Amazon Pay</li>
                        <li>Today's Deals</li>
                        <li>Computers</li>
                    </ul>
                </div>
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JupiterT1/SWM_1day._CB639891554_.jpg" alt="img" />

            </div>
        </div>
    )
}

export default Subhdr
