import './Register.css'
import { useState } from 'react';
import axios from 'axios';
import { remoteHostURL } from '../apiClient'


function Register() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${remoteHostURL}/login`, {
                username: username,
                firstname: firstName,
                lastname: lastName,
                password: password
            });
            console.log(response);
        } catch(err) {
            console.log(err);
        }
    }
    return(
        <div id="log1">
            <form onSubmit={handleSubmit} id="form">
                <p>First Name</p>
                <input value={firstName}
                        onChange={(e) => setFirst(e.target.value)}
                        size={40}/>
                <p>Last Name</p>
                <input value={lastName}
                        onChange={(e) => setLast(e.target.value)}
                        size={40}/>
                <p>UserName</p>
                <input value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        size={40}/>
                <p>Password:</p>
                <input value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size={40}/>
                <p>Confirm Password</p>
                <input value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        size={40}/>
                <button type='submit' id="btn-log">Register</button>
            </form>

            <p>Have an account already? <span id='reger'><a style={{textDecoration: 'none', color: 'cadetblue'}} href='/login'>Login</a></span></p>
        </div>
    )
}

export default Register;