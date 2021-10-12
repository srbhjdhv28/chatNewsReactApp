import React, { useState } from 'react';
import './HomePage.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
const HomePage = () => {
    const [isSignIn, setSignIn] = useState(true);

    const signupClickHandler = () => {
        const isSignedIn = !isSignIn;
        setSignIn(isSignedIn);
    }

    return (
        <div className="">
            {isSignIn && <SignIn />}
            {!isSignIn && <SignUp />}
            <div>
                <p><b>OR</b></p>
                <div className="container">
                    <button type="button" onClick={signupClickHandler}>{isSignIn ? 'Create Account' : 'Sign In'}</button>
                </div>
            </div>
            
        </div>
         
    );
};

export default HomePage;
