import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import HomePage from './pages/Home'


function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/profile" Component={<>Profile</>} />
      </Routes>
    </Router>
  )
}

export default RouterComponent