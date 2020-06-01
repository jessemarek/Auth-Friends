import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiousWithAuth'

const EditFriend = props => {
    const {
        friendData,
        friendsList,
        setFriendsList,
        setIsEditing

    } = props

    const initialFormValues = {
        name: '',
        age: '',
        email: ''
    }

    /******************************** STATE ********************************/
    const [formValues, setFormValues] = useState(initialFormValues)


    /***************************** SIDE EFFECTS *****************************/
    useEffect(() => {
        setFormValues(friendData)
    }, [friendData])


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
            .put(`/api/friends/${friendData.id}`, { ...formValues, id: friendData.id, age: Number(formValues.age) })
            .then(res => {
                setFriendsList(friendsList.map(f => f.id !== friendData.id ? f : { ...friendData }))
                setIsEditing(false)
            })
            .catch(err => console.log(err.response))
    }

    const deleteFriend = e => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`/api/friends/${friendData.id}`)
            .then(res => {
                setFriendsList(friendsList.filter(f => f.id !== friendData.id))
                setIsEditing(false)
            })
            .catch(err => console.log(err.response))
    }

    /********************************* JSX *********************************/
    return (
        <div className="edit-form form">
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

                <button>Update Friend</button>
                <button type="button" onClick={deleteFriend}>Delete Friend</button>
            </form>
        </div>
    )
}

export default EditFriend