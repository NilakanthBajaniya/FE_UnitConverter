import React, { useState } from 'react';
import { LogIn } from './Server/api';
import Box from '@material-ui/core/Box';



export default function Login(props) {
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();

    const checkLogin = async () => {

        const res = await LogIn(userName, passWord);
        
        if (res['statusCode'] === 200) {
                props.changeState(userName);
        }
        else{

            alert("Username and Password can not be empty!");
        }
    }

    return (
        
        <Box color="text.primary">
        
            <div className="login-wrapper">
                <h1>Login</h1>
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
        </Box>

        
    )
}