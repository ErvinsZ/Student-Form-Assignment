import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from '../../form/ErrorMessage'
import styled from 'styled-components'
import {InputCointainer} from '../../inputcontainer/InputContainer'

//restyling Formiks 'Field' component
//using Formiks 'ErrorMessage' component to render error Message when given field has been touched
export const CustomInput = styled(Field)`
border:none;
border-bottom:solid 2px #7c79cd;
outline:none;
width:100%;
font-size: 16px;
padding:0;
padding-bottom: 3px;
box-shadow: 0px 4px 8px -3px #d5d5d5;
color:#7c79cd
`

function Input(props) {
    const {label,name} = props
    return (
        <InputCointainer>
            <CustomInput placeholder="Full Name" id={name} name={name} label={label}/>
            <ErrorMessage name={name} component={TextError}/>
        </InputCointainer>
    )
}

export default Input
