import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiousWithAuth'

const Login = props => {

    const initialCredentials = {
        username: '',
        password: ''
    }

    const [credentials, setCredentials] = useState(initialCredentials)

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/protected')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="login-form">
            <form onSubmit={onSubmit}>
                <label>Username:
                <input
                        name="username"
                        type="text"
                        onChange={handleChanges}
                        value={credentials.username}
                    />
                </label>

                <label>Password:
                <input
                        name="password"
                        type="password"
                        onChange={handleChanges}
                        value={credentials.password}
                    />
                </label>

                <button>Login</button>

            </form>
        </div>
    )
}

export default Login