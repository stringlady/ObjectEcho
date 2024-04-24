import './Detail.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { remoteHostURL } from '../apiClient';
import Nav from '../Nav/Nav';
import LoggedNav from '../LoggedNav/LoggedNav';
import Comments from '../Comments/Comments';
import { Link } from 'react-router-dom';

function Details() {
    let { id } = useParams();
    const [entries, setEntries] = useState([]);
    const [comment, setComment] = useState("");
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getEntry = async () => {
            try {
                const res = await axios.get(`${remoteHostURL}/entries/id/${id}`);
                setEntries(res.data);
                

            } catch(err) {
                console.log(err);
            }
        }
        getEntry();
    }, [id])
    const handleSubmit = async (event, id) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        try {
        const res = await axios.post(`${remoteHostURL}/comments`, {
            userid: id,
            entryUserId: userId,
            comment: comment
        })
        window.location.reload();
    } catch (err) {
        console.log(err)
    }
}

    return (
        <div>
            {token ? <LoggedNav/> : <Nav/>}
            <div id="details">
            <h1>{entries.name}</h1>
            <h2>Provided by: <Link style={{ textDecoration: 'none', color: 'cadetblue' }} to={`/profile/${entries.userid}`}>{entries.username}</Link></h2>
            <h2>Call: {entries.call}</h2>
            <div id="desci">
            <h2>Description: </h2>
            <div className='desc'>
            <p>{entries.description}</p>
            </div>
            </div>
            <h2>Comments</h2>
            <Comments id={entries.userid}/>
            </div>
            {token ? <form id="must" onSubmit={(event) => handleSubmit(event, entries.userid)}><textarea 
            rows={5}
            cols={18}
            value={comment}
            onChange={(e) => setComment(e.target.value)}/>
            <br/>
                    <br/>
                    <button type='submit' id="new">Add Comment</button>
            </form>
            :
            <div id="must"><p>Must be logged in to comment</p></div>}
        </div>
    )
}

export default Details;