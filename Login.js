
import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate} from "react-router-dom"
import { auth }  from './firebase';

function Login() {
    const navigate=useNavigate();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .auth(auth => {
            navigate('/');
        })
        .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=> {
            //it successfully create new user with email and password
                console.log(auth);
                if(auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
    }   
     
  return (
    <div className='login'>
        <Link to='/'>
         <img className='login__logo'
         src='https://i2.wp.com/animationvisarts.com/wp-content/uploads/2020/12/amazon-logo-2012.jpg?w=400&ssl=1' />
        </Link>
        <div className="login__container">
            <h3>Sign-in</h3>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange=
                    {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} 
                    onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn}
                    className='login__signInButton'>Sign-in</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register}
                className='login__registerButto n'
                >Create Your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
