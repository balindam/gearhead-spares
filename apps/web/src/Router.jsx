import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import HomePage from './pages/Home';
import ShoppingCart from './pages/ShoppingCart'



function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/profile" Component={<>Profile</>} />
        <Route path="/cart" Component={ShoppingCart} />
      </Routes>
    </Router>
  )
}

export default RouterComponent