import React from 'react'
import Field from '../Field/Field'
import Select from '../Select/Select'
import {states} from '../../datas/countries'
import {department} from '../../datas/department'
import "./Form.css"
import Options from '../Select/Options'
import Button from '../Button/Button'
import {useSelector, useDispatch} from 'react-redux'
import Modal from '../../views/Modal/Modal'
import { submitted } from '../../Store/actions'

export default function Form(props) {
    const submit = useSelector(state => state.isSubmitted)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type: submitted})
        let dataEmployees = {
            firstName: e.target.elements[0].value,
            lastName: e.target.elements[1].value,
            dateOfBirth: e.target.elements[2].value,
            startDate: e.target.elements[3].value,
            department: e.target.elements[5].value,
            street: e.target.elements[6].value,
            city: e.target.elements[7].value,
            state: e.target.elements[8].value,
            zipCode: e.target.elements[9].value,
        }
        localStorage.setItem("data", JSON.stringify(dataEmployees))
        console.log(
            JSON.parse(localStorage.getItem("data"))
        );
    }

    return (
        <form onSubmit={handleSubmit} id= {props.id}>
            <Field type="text" value="First Name" id="first-name" />
            <Field type="text" value="Last Name" id="last-name" />
            <Field type="text" value="Date of Birth" id="date-of-birth" />
            <Field type="text" value="Start date" id="start-date" />
            <fieldset>
                <legend>Address</legend>
                <Field type="text" value="Street" id="street" />
                <Field type="text" value="City" id="city" />
                <Select id="state" value="State">
                    {
                        states.map((data, key) => {
                            return <Options key={key} id={data.abbreviation} text={data.name} />
                        })
                    }
                </Select>
                <Field type="number" value="Zip Code" id="zip-code" />
            </fieldset>
            <Select id="department" value="Department">
                {
                    department.map((dpt, key) => {
                        return <Options key={key} id={"category-" + key} text={dpt} />
                    })
                }
            </Select>
            <Button value="Save" className="btn-create" />
            { submit ? <Modal id="confirmation" value="Employee Created!" /> : undefined }
        </form>
    )
}
