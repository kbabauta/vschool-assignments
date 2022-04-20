import React from 'react'
import ReactDOM from 'react-dom'
import FriendList from './FriendList'
import Friend from './Friend'

function App () {
    return (
        <div>
            <FriendList />
        </div>
    )
}

ReactDOM.render (<App />, document.getElementById("root"))