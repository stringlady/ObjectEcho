import { useState, useEffect } from "react";
import axios from "axios";
import { remoteHostURL } from "../apiClient";

function Comments({id}) {
    const [newComment, setNew] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
    
            try {
                const res = await axios.get(`${remoteHostURL}/comments/${id}`);
                setNew(res.data)
            } catch(err) {
                console.log(err)
            }
            
        }
        fetchComments();
    }, [id])

    return(
        <div>
            {newComment.map((c, index) => (
                <p key={index}>{c.comment}</p>
            ))}
        </div>
    )
}

export default Comments;