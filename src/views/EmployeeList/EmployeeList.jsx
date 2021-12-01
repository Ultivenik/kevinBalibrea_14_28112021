import React from 'react'
import { Link } from 'react-router-dom'

export default function EmployeeList() {
    return (
        <div>
            Liste d'employés
            <Link to="/"> Home </Link>
        </div>
    )
}
