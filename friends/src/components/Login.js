import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiousWithAuth'

const Login = () => {

    const { push } = useHistory()

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
                push('/friends')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="form">
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