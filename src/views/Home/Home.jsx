import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../../Component/Form/Form'
import Title from '../../Component/Title/Title'


export default function Home() {
    return (
        <main>
            <Title Tag="h1" className="title" text="HRnet" />
            <Link to="/employee">View Current Employees</Link>
            <Title Tag="h2" className="title-create-employee" text="Create Employee" />
            <Form id="create-employee" />
        </main>
    )
}
