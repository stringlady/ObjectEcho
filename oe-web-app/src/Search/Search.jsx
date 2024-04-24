import './Search.css'
import Nav from '../Nav/Nav';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { remoteHostURL } from '../apiClient';
import LoggedNav from '../LoggedNav/LoggedNav';
import { Link } from 'react-router-dom';

function Search() {
    const [searched, setSearched] = useState([]);
    const [entries, setEntries] = useState([]);
    const token = localStorage.getItem('token');


    useEffect(() => {
        const getEntries = async () => {
            try {
                const res = await axios.get(`${remoteHostURL}/entries`);
                setSearched(res.data);
                setEntries(res.data);
            } catch(err) {
                console.log(err);
            }
        }
     getEntries();   

    }, [])

    const getSearchedList = (value) => {
        if (value.length > 0) {
            let searchArr = [];
            let newVal = value.toLowerCase();
            entries.forEach((e) => {
                if((e.name + e.call + e.description).toLowerCase().includes(newVal)) {
                    searchArr.push(e)
                }
            })
            setSearched(searchArr);
        } else {
            setSearched(entries)
        }
    }
    return(
        <div>
            {token ? <LoggedNav/> : <Nav/>}
            <div id='searchbar'>
            <input id='bar' placeholder='Search' onChange={(e) => getSearchedList(e.target.value)}/>
            <div id="glass"><FaMagnifyingGlass/></div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div id="search">
        {searched.map((s, id) => (
            <Query id={s._id} name={s.name} call={s.call} desc={s.description}/>

            
        ))}
        </div>
        </div>
    )
}

function Query(props) {
    return(
        <div id="query">
            <Link style={{ textDecoration: 'none' }} to={`/details/${props.id}`}><p>{props.name}</p></Link>
            <p>{props.call}</p>
            <p>{props.desc}</p>
        </div>
    )
}

export default Search;