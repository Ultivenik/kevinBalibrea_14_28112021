import React from 'react'

export default function Options(props) {
    return (
        <option id={props.value}> {props.text} </option>
    )
}
