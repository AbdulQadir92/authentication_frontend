import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Header = () => {
    let { user, logoutUser } = useContext(AuthContext);
    return (
        <div style={{ marginBottom: '20px', borderBottom: '1px solid lightgrey' }}>
            <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
            {user ? (
                <button onClick={logoutUser}>Logout</button>
            ):(
                <>
                    <Link to="/register" style={{ marginRight: '20px' }}>Register</Link>
                    <Link to="/login">Login</Link>
                </>
            )}

            {user && <p>Hello, {user.username}</p>}
        </div>
    )
}

export default Header
