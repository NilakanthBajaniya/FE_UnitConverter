import React, { useState } from 'react';
import {  useHistory } from 'react-router';
import { LogIn } from './Server/api';


export default function Login() {
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();
    const [message, setMessage] = useState("Please log in");
    const history=useHistory();

    const checkLogin = async () => {

        const isLoggedIn = await LogIn(userName, passWord);
        debugger;
        if (isLoggedIn.status == 200) {
            history.push("/tab");
        }
        else{

            alert("Username and Password can not be empty!");
        }
    }

    return (
        <div className="login-wrapper">
            <h1>{message}</h1>
            <div>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassWord(e.target.value)} />
                </label>
                <div>
                    <button onClick={e => checkLogin()}>Submit</button>
                </div>
            </div>

        </div>
    )
}

function login(username, password) {

}