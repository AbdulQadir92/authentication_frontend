import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let { loginUser } = useContext(AuthContext)
    return (
        <>
            <h4>Login</h4>
            <form onSubmit={loginUser}>
                <input type="text" name="username" className="form-control" placeholder="Enter username" required />
                <input type="password" name="password" className="form-control" placeholder="Enter password" required />
                <input type="submit" value="Login" className="form-control" />
            </form>
        </>
    )
}

export default LoginPage
