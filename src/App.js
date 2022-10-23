import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'

// fonts
import "./fonts/OpenSans-Light.ttf";
import "./fonts/OpenSans-Regular.ttf"
import "./fonts/OpenSans-Medium.ttf"
import "./fonts/OpenSans-SemiBold.ttf"
import "./fonts/OpenSans-Bold.ttf"
import "./fonts/OpenSans-ExtraBold.ttf"

// pages
import HomePage from './Pages/HomePage'
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";


export default function App() {
  return (

    // page routes
    <Router>
      {/* home page routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />


      </Routes>
    </Router>
  )
}