import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let { loginUser } = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Enter username" required style={{ display: 'block', marginBottom: '10px', padding: '5px' }} />
                <input type="password" name="password" placeholder="Enter password" required style={{ display: 'block', marginBottom: '10px', padding: '5px' }} />
                <input type="submit" style={{ display: 'block', marginBottom: '10px', padding: '5px' }} />
            </form>
        </div>
    )
}

export default LoginPage
