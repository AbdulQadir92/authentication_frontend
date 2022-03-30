import { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext'


const RegisterPage = () => {
    const { loginUser } = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/accounts/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password1, password2 })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Username already exists') {
                    alert('Username already exists');
                } else if (data.message === 'Passwords do not match') {
                    alert('Passwords do not match');
                } else if(data.message === 'User with this email already exists'){
                    alert('User with this email already exists');
                } else if (data.message === 'User was not created') {
                    alert('Something went wrong. User was not created');
                    setUsername('')
                    setEmail('')
                    setPassword1('')
                    setPassword2('')
                } else {
                    loginUser(e, username, password1)
                }
            })
    }

    return (
        <>
            <h4>Register</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                />
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPassword1(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                />
                <input type="submit" className="form-control" value="Register" />
            </form>
        </>
    );
}

export default RegisterPage