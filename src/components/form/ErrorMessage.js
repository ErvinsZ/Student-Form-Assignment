import React from 'react'
import {Error} from '../atoms/Error'

function ErrorMessage(props) {
    return (
        <Error>
            {props.children}
        </Error>
    )
}

export default ErrorMessage
