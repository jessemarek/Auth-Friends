import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiousWithAuth'

import Friend from './Friend'

const FriendsList = props => {

    const [friendsList, setFriendsList] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                setFriendsList(res.data)
            })
            .catch(err => console.log(err.response))
    }, [])

    return (
        <div className="friends-list">
            {
                friendsList &&
                friendsList.map(f => <Friend key={f.id} data={f} />)
            }
        </div>
    )
}

export default FriendsList