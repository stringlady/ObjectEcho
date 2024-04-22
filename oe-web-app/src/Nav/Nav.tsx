import './Nav.css'
import { Link } from 'react-router-dom';
import { BsJournalBookmark } from "react-icons/bs";

function Nav() {
    return (
        <div id='navlinks'>
            <h1><BsJournalBookmark /> ObjectEcho</h1>
            <Link style={{ textDecoration: 'none' }} to='/search'><p id='login'></p><h1>Search</h1></Link>
            <div id='flexlife'>
            <div className='btn'>
            <Link style={{ textDecoration: 'none' }} to='/login'><p id='login'>Login</p></Link></div>
            <div id='btn'>
            <Link style={{ textDecoration: 'none' }} to='/register'><p id='reg'>Register</p></Link></div>
            </div>

        </div>
    )
}

export default Nav;