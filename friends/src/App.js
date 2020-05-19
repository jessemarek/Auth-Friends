import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

//Components
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends List</Link>
            <Link to="/addfriend">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <ProtectedRoute path='/addfriend' component={AddFriend} />
          <ProtectedRoute path='/friends' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
