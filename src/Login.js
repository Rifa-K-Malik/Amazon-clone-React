import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className='login'>

            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Logo" />
            </Link>
            <div className='login--container' >
                <h1 className='t-center signin-h1'>Sign-In</h1>
                <form>
                    <h5> E-mail </h5>
                    <input className='input'  type="text" />

                    <h5> Password </h5>
                    <input  className='input' type="password" />

                    <button className='sign--buttonn button' >Sign In</button>
                    <p className='f-size12' >
                        By Continuing, you are agreeing to Amazon's Conditions of Use and Privacy Notice, our Cookies otice and our Intrest-ased Ads Notice.
                    </p>
                    <button className='button create-button' >Create your Amazon Account</button>
                </form>
            </div>

        </div>
    )
}

export default Login
