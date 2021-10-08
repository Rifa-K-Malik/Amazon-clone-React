import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />
            </Link>
            
            <div className="location">
            <LocationOnOutlinedIcon className="header__location" ></LocationOnOutlinedIcon>
            <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Select Your Location</span>
                </div>
            </div>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" ></SearchIcon>
            </div>
           
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo"> & Order</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </div>

            <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingCartIcon />
                <span className="header__optionLineTwo header__BasketCount" >0</span>
            </div>
            </Link>

        </div>
    )
}

export default Header
