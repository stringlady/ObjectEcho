import './Diaries.css'
import LoggedNav from '../LoggedNav/LoggedNav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { remoteHostURL } from '../apiClient';

function Diaries() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [call, setCall] = useState("");
    const [display, setDisplay] = useState("hide");
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const fetchEntries = async () => {
            const res = await axios.get(`${remoteHostURL}/entries/${userId}`);
            setEntries(res.data)
            console.log(res.data)

        }

        fetchEntries();
    }, [])

    const handleClick = () => {
        setDisplay("");
    }

    const handleSubmit = async (event) => {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('name');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        setDisplay("hide");
        try {

        const res = await axios.post(`${remoteHostURL}/entries`, {
            name: name,
            call: call,
            description: desc,
            time: new Date(),
            userid: userId,
            username: username
        }, config)
    } catch(err) {
        console.log(err)
    }
    }

    return(
        <div>
            <LoggedNav/>
            <div id="news"><button onClick={handleClick} id="new">New Entry</button></div>
            <div id={display}>
            <form onSubmit={handleSubmit} id="form">
                <p>Name of Object: </p>
                <input size={40}
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                <p>Call of the object: </p>
                <input size={40}
                        value={call}
                        onChange={(e) => setCall(e.target.value)}/>
                <p>Description of Call: </p>
                <textarea rows={9}
                            cols={40}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}/>
                <br/>
                <br/>
                <button type='submit' id="new">Save</button>
            </form>
            </div>
            <div id='entries'>
            <p>{entries.length} Entries</p>
            <div id="all-entries">
            {entries.map((e) => (
                <div key={e.name} id="one">
                    <p>{e.name}</p>
                    <p>{e.call}</p>
                    <p>{e.description}</p>
                </div>
            ))}
            </div>
            </div>
        </div>
    )
}

export default Diaries;