import React from 'react'
import "./Modal.css"
import {useSelector, useDispatch} from 'react-redux'
import { closed } from '../../Store/actions'

export default function Modal(props) {
    const close = useSelector(state => state.isClosed)
    const dispatch = useDispatch()

    const closedModdal = () =>{
        dispatch({type: closed})
    }

    return (
        <React.Fragment>
            {close ? null :
                <div id={props.id} className="modal-container">
                    <p className="modal">
                        {props.value}
                        <i onClick={closedModdal} className="fas fa-times-circle close-modal"></i>
                    </p>
                </div>
            }
        </React.Fragment>
    )
}
