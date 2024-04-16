import './Login.css'
import { useState } from 'react';
import axios from 'axios';
import { remoteHostURL } from '../apiClient';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${remoteHostURL}/login`, {
                username: username,
                password: password
            });
            localStorage.setItem('userId', response.data.user._id);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('name', response.data.user.username);
            nav('/logged/home');
        } catch(err) {
            console.log(err);
        }
    }
    return(
        <div id="log">
            <form onSubmit={handleSubmit} id="form">
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