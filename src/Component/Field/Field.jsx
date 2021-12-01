import React from 'react'

export default function Input(props) {
    return (
        <React.Fragment>
            <label htmlFor={props.id}> {props.value} </label>
            <input type={props.type} id={props.id} required/>
        </React.Fragment>
    )
}
