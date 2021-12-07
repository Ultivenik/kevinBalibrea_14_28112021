import React from 'react'
import { DatePicker } from 'antd'
import moment from "moment"
import 'moment/locale/fr'
import 'antd/dist/antd.css'

export default function DateSelector(props) {
    return (
        <React.Fragment>
            <label htmlFor={props.id}> {props.value} </label>
            <DatePicker
                id={props.id}
                allowClear={true}
                format="DD-MM-YYYY"
                placeholder=""
                picker="date"
                defaultValue={moment('01-01-2021', 'DD-MM-YYYY')}
            />
        </React.Fragment>
    )
}
