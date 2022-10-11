import React from "react"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'

import HomePage from './Pages/HomePage'


export default function App() {
  return (
   
// page routes
    <Router>
      <Routes>
        {/* home page routes */}
        <Route path="/" element={<HomePage/>}/>

      </Routes>
    </Router>
  )
}