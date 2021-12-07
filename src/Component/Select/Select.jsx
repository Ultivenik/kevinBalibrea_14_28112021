import React from 'react'

export default function Select(props) {
    return (
        <React.Fragment>
            <label htmlFor={props.id}> {props.value} </label>
            <select name={props.id} id={props.id}>
                {
                    props.children
                }
            </select>
        </React.Fragment>
    )
}
