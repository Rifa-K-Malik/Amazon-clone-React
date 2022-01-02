import React from 'react';
import { Link , useHistory} from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';
import { useState } from 'react';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) =>{
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        //firebase
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            //it Successfully Created A New Userwith Email and PAssword
            if(auth){
                history.push('/')
            }
        })
        .catch((error => alert(error.message)))
    }

    return (
        <div className='login'>

            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Logo" />
            </Link>
            <div className='login--container' >
                <h1 className='t-center signin-h1'>Sign-In</h1>
                <form>
                    <h5> E-mail </h5>
                    <input className='input' type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5> Password </h5>
                    <input className='input' type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='sign--buttonn button' >Sign In</button>
                    <p className='f-size12' >
                        By Continuing, you are agreeing to Amazon's Conditions of Use and Privacy Notice, our Cookies otice and our Intrest-ased Ads Notice.
                    </p>
                    <button type='submit' onClick={register} className='button create-button' >Create your Amazon Account</button>
                </form>
            </div>

        </div>
    )
}

export default Login
