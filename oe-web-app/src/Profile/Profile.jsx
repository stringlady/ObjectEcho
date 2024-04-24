import './Profile.css'
import Nav from '../Nav/Nav';
import LoggedNav from '../LoggedNav/LoggedNav';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { remoteHostURL } from '../apiClient';
import Comments from '../Comments/Comments';

function Profile() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const {id} = useParams();
    const [entries, setEntries] = useState([]);
    const [user, setUser] = useState({
        _id: '',
        username: '',
        firstname: '',
        lastname: '',
        password: ''
      });

    const { _id, username, firstname, lastname, password } = user;
    const [name, setUsername] = useState('');
    const [fn, setFn] = useState('');
    const [ln, setLn] = useState('');
    const [pass, setPass] = useState('');
    const [hide, setHide] = useState('hide');
    const [butHide, setBH] = useState('');


    useEffect(() => {
        const getEntries = async () => {
            try {
                const res = await axios.get(`${remoteHostURL}/entries/${id}`);
                setEntries(res.data);

                
            } catch (err) {
                console.log(err)
            }
        }
        const getUser = async () => {
            try {
                const res = await axios.get(`${remoteHostURL}/users/${id}`);
                setUser(res.data);

                setUsername(res.data.username);
                setFn(res.data.firstname);
                setLn(res.data.lastname);
                setPass(res.data.password);

            } catch(err) {
                console.log(err)
            }
        }

        getEntries();
        getUser();
    }, []);

    const handleClick = () => {
        setBH('hide');
        setHide('');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const updatedUser = { username: name, firstname: fn, lastname: ln, password: pass };
            await axios.put(`${remoteHostURL}/users/${userId}`, updatedUser);
            setBH('');
            setHide('hide');
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }
    console.log(user);
    return (
        <div>
            {token ? <LoggedNav/> : <Nav/>}
            <div id="prof">
                <h1>Profile</h1>
                {userId === id ? 
                <div id="prof">
                    <h2>Username: {username}</h2>
                    <h2>First Name: {firstname}</h2>
                    <h2>Last Name: {lastname}</h2>
                    <h2>Password: {password} </h2>
                    <div id={butHide}><button onClick={handleClick} id="new">Update</button></div>
                    <br/>
                    <div id={hide}>
                    <form onSubmit={(e) => handleSubmit(e)} className="prof1">
                        <p>Username: </p>
                        <input
                        value={name}
                        onChange={(e) => setUsername(e.target.value)}/>
                        <p>First Name: </p>
                        <input
                        value={fn}
                        onChange={(e) => setFn(e.target.value)}/>
                        <p>Last Name: </p>
                        <input
                        value={ln}
                        onChange={(e) => setLn(e.target.value)}/>
                        <p>Password: </p>
                        <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}/>
                        <br/>
                        <br/>
                        <button type='submit' id="new">Update</button>
                    </form>
                    </div>
                </div>
                 : 
                 <div id="prof">
                    <h2>{username}</h2>
                    <h2>{entries.length} Entries</h2>
                    <div id="prof">
                    {entries.map((e, idx) => (
                        <div id="pro" key={idx}>
                            <p>{e.name}</p>
                            <p>{e.call}</p>
                            <div id="des"><p>{e.description}</p></div>
                            <p>Comments</p>
                            <Comments id={e.userid}/>
                        </div>
                    ))}
                    </div>
                </div>}
                
            </div>
        </div>
    )
}

export default Profile;