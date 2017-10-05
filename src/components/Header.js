import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
export default () => (
  <header>
    <nav>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/chat'>Chat</Link></div>
    </nav>
  </header>
)
