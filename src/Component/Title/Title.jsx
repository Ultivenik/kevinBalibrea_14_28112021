import React from 'react'

export default function Title(props) {
    const {Tag, className, text} = props
    return (
        <React.Fragment>
            <Tag className = {className}> {text} </Tag>
        </React.Fragment>
    )
}
