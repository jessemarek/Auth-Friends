import React from 'react'

const Friend = props => {

    const {
        data,
        setEditData,
        setIsEditing

    } = props

    const editFriend = e => {
        e.preventDefault()

        setEditData({
            id: data.id,
            name: data.name,
            age: data.age,
            email: data.email
        })

        setIsEditing(true)

    }

    return (
        <div id={data.id} className="friend">
            <h3>{data.name}</h3>
            <p>Age: {data.age}</p>
            <p>Email: {data.email}</p>
            <button className="edit-btn" onClick={editFriend}>{'</>'}</button>
        </div>
    )
}

export default Friend