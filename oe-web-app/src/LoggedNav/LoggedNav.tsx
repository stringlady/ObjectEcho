import './LoggedNav.css'
import { BsJournalBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";

function LoggedNav() {
    const userId = localStorage.getItem('userId');
    const handleClick= () => {
        localStorage.clear();
    }
    return(
        <div id='navlinks'>
            <Link style={{ textDecoration: 'none' }} to='/logged/home'><h1><BsJournalBookmark /> ObjectEcho</h1></Link>
            <Link style={{ textDecoration: 'none' }} to='/search'><p id='login'></p><h1>Search</h1></Link>
            <Link style={{ textDecoration: 'none' }} to='/logged/diaries'><h1>My Entries</h1></Link>
            <Link style={{ textDecoration: 'none' }} to={`/profile/${userId}`}><IoPersonCircleOutline size={40} color='cadetblue'/></Link>
            <div id='btn'>
            <Link style={{ textDecoration: 'none' }} to='/'><p onClick={handleClick} id='reg'>Logout</p></Link></div>

        </div>
    )
}

export default LoggedNav;