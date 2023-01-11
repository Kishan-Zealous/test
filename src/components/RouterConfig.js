import React from 'react'
import {Routes,Route} from "react-router-dom"
import Signup from './Signup'
import Login from './Login'
import About from './About'
import Contact from './Contact'
import Home from './Home'

export default function RouterConfig() {
  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<About/>} />
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
  )
}
