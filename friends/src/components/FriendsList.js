import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiousWithAuth'

//Components
import Friend from './Friend'
import EditFriend from './EditFriend'

const FriendsList = props => {

    /******************************** STATE ********************************/
    const [friendsList, setFriendsList] = useState([])

    const [isEditing, setIsEditing] = useState(false)

    const [editData, setEditData] = useState(null)


    /***************************** SIDE EFFECTS *****************************/
    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                setFriendsList(res.data)
            })
            .catch(err => console.log(err.response))
    }, [friendsList])

    /********************************* JSX *********************************/
    return (
        <div className="friends-list">
            {
                friendsList &&
                friendsList.map(f =>
                    <Friend
                        key={f.id}
                        data={f}
                        editData={editData}
                        setEditData={setEditData}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                    />)
            }
            {
                isEditing &&
                <EditFriend
                    friendData={editData}
                    friendsList={friendsList}
                    setFriendsList={setFriendsList}
                    setIsEditing={setIsEditing}
                />
            }
        </div>
    )
}

export default FriendsList