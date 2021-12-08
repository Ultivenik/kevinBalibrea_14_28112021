import React from 'react'
import { Link } from 'react-router-dom'
import TableEmployee from '../../Component/TableEmployee/TableEmployee'
import Title from '../../Component/Title/Title'

export default function EmployeeList() {
    return (
        <main>
            <Title Tag="h2" className="title title-employee" text="Current Employees" />
            <TableEmployee />
            <Link className="home-link" to="/"> Home </Link>
        </main>
    )
}
