import './LoggedHome.css';
import LoggedNav from '../LoggedNav/LoggedNav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { remoteHostURL } from '../apiClient';
import Comments from '../Comments/Comments';
import { useNavigate } from 'react-router-dom';

function LoggedHome() {
    const [entries, setEntries] = useState([]);
    const [comment, setComment] = useState({});
    const nav = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('name');
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const fetchEntries = async () => {
            const res = await axios.get(`${remoteHostURL}/entries`, config);
            setEntries(res.data);
            const initialComments = res.data.reduce((acc, entry) => {
                acc[entry.userid] = '';
                return acc;
            }, {});
            setComment(initialComments);
        }


        fetchEntries();
    }, [])

    const handleCommentChange = (id, value) => {
        // Update the comment state for the specific entry
        setComment({ ...comment, [id]: value });
    };

    

    const handleSubmit = async (event, id) => {
        event.preventDefault();
        const username = localStorage.getItem('name');
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
        const res = await axios.post(`${remoteHostURL}/comments`, {
            userid: id,
            entryUserId: userId,
            comment: comment
        }, config)
        window.location.reload();
    } catch (err) {
        console.log(err)
    }
        
    }

    return(
        <div>
            <LoggedNav/>
            <h2 style={{textAlign: 'center'}}>See All Entries from your Peers</h2>
            <div id="enters">
            {entries.map((e) => {
            return (
                <div id="enters-a" key={e.userid}>  
                    <p>{e.username}</p>
                    <p>{e.name}</p>
                    <p>{e.call}</p>
                    <p>{e.description}</p>
                    <p>Comments</p>
                    <Comments id={e.userid}/>
                    <form onSubmit={(event) => handleSubmit(event, e.userid)}>
                    <textarea rows={5}
                            cols={18}
                            value={comment[e.userid]}
                            onChange={(event) => handleCommentChange(e.userid, event.target.value)}/>
                    <br/>
                    <br/>
                    <button type='submit' id="new">Add Comment</button>
                    </form>
                    
                </div>
            );
            })}
            </div>
        </div>
    )
}

export default LoggedHome;