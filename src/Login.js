import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider} from './firebase';
import './Login.css';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="https://images.macrumors.com/t/5a3wm8eTIaJUlzJ7qjZ8f85X31I=/400x0/filters:quality(90)/article-new/2018/06/imessage-logo-250x235.jpg?lossy"
                alt=""/>
                <h1>iMessage</h1>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
