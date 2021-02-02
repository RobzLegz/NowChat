import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css";
import useStateValue from './StateProvider';

const Login = () => {
    
    const [{user}, dispatch] = useStateValue();

    const login = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: "SET_USER",
                user: result.user,
            });
        }).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <img src="https://cdn.dribbble.com/users/31864/screenshots/3666062/free_logos_dribbble_ph.jpg?compress=1&resize=800x600" alt="logo"/>
            <button onClick={login}>Sign In</button>
        </div>
    );
}

export default Login;
