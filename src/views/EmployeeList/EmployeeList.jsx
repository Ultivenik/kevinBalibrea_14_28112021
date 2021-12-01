import React from 'react'
import { Link } from 'react-router-dom'

export default function EmployeeList() {
    return (
        <main>
            Liste d'employés
            <Link to="/"> Home </Link>
        </main>
    )
}
