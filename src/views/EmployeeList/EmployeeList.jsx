import React from 'react'
import { Link } from 'react-router-dom'
import TableEmployee from '../../Component/TableEmployee/TableEmployee'
import Title from '../../Component/Title/Title'

export default function EmployeeList() {
    return (
        <main>
            <Title Tag="h2" className="title" text="Current Employees" />
            <TableEmployee />
            <Link to="/"> Home </Link>
        </main>
    )
}
