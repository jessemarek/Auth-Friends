import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiousWithAuth'

const Login = () => {

    const { push } = useHistory()

    const initialCredentials = {
        username: '',
        password: ''
    }

    /******************************** STATE ********************************/
    const [credentials, setCredentials] = useState(initialCredentials)


    /****************************** CALLBACKS ******************************/
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

    /********************************* JSX *********************************/
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