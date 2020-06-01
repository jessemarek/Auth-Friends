import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiousWithAuth'

const AddFriend = () => {

    const { push } = useHistory()

    const initialFormValues = {
        name: '',
        age: '',
        email: ''
    }

    /******************************** STATE ********************************/
    const [formValues, setFormValues] = useState(initialFormValues)


    /****************************** CALLBACKS ******************************/
    const handleChanges = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends', { ...formValues, age: Number(formValues.age) })
            .then(res => push('/friends'))
            .catch(err => console.log(err.response))
    }

    /********************************* JSX *********************************/
    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        name="name"
                        type="text"
                        onChange={handleChanges}
                        value={formValues.name}
                    />
                </label>

                <label>Age:
                    <input
                        name="age"
                        type="number"
                        onChange={handleChanges}
                        value={formValues.age}
                    />
                </label>

                <label>Email:
                    <input
                        name="email"
                        type="text"
                        onChange={handleChanges}
                        value={formValues.email}
                    />
                </label>

                <button>Add Friend</button>
            </form>

        </div>
    )
}

export default AddFriend