import './Login.css'
import { useState } from 'react';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div id="log">
            <form id="form">
                <p>UserName:</p>
                <input value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        size={40}/>
                <p>Password:</p>
                <input value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size={40}/>
                <button id="btn-log">Login</button>
            </form>
            <p>Don't have an account yet? <span id='reger'><a style={{textDecoration: 'none', color: 'cadetblue'}} href='register'>Register</a></span></p>
        </div>
    )
}

export default Login;