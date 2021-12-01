import React from 'react'
import "./Button.css"
import {useDispatch} from 'react-redux'
import { clicked } from '../../Store/actions'

export default function Button(props) {
    const dispatch = useDispatch()

    const buttonClicked = () => {
        dispatch({type: clicked})
    }

    return (
        <button onClick={buttonClicked} className={props.className}>
            {props.value}
        </button>
    )
}
