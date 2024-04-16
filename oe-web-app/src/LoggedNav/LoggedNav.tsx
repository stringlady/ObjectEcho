import './LoggedNav.css'
import { BsJournalBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function LoggedNav() {
    const handleClick= () => {
        localStorage.clear();
    }
    return(
        <div id='navlinks'>
            <Link style={{ textDecoration: 'none' }} to='/logged/home'><h1><BsJournalBookmark /> ObjectEcho</h1></Link>
            <Link style={{ textDecoration: 'none' }} to='/logged/diaries'><h1>My Entries</h1></Link>
            <div id='flexlife'>
            <div id='btn'>
            <Link style={{ textDecoration: 'none' }} to='/'><p onClick={handleClick} id='reg'>Logout</p></Link></div>
            </div>

        </div>
    )
}

export default LoggedNav;