import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EmployeeList from './views/EmployeeList/EmployeeList'
import Home from './views/Home/Home'
import "./App.css"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/employee" element={ <EmployeeList /> } />
            </Routes>
        </Router>
    )
}
