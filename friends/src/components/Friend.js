import React from 'react'

const Friend = props => {

    return (
        <div className="friend">
            <h3>{props.data.name}</h3>
            <p>Age: {props.data.age}</p>
            <p>Email: {props.data.email}</p>
        </div>
    )
}

export default Friend