import {Field, ErrorMessage } from 'formik'
import React from 'react'
import Dates from 'react-datepicker'
import TextError from './ErrorMessage'
import styled from 'styled-components'
import {InputCointainer} from '../inputcontainer/InputContainer'

//Restyling an existing third pary component, passing it via props creating a new component
const CustomDates = styled(Dates)`
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

function DatePicker(props) {
    const {label,name} = props
    return (
        <InputCointainer>
            <Field name={name} label={label}>
                {
                    ({form,field}) => {
                        const {setFieldValue} = form
                        const {value} = field
                        return (
                        <CustomDates 
                            id={name} 
                            {...field} 
                            selected={value} 
                            onChange={val => setFieldValue(name, val)}
                            minDate={new Date()}
                            placeholderText="Start Date"
                            autoComplete="off"
                            dateFormat="dd/MM/yyyy"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </InputCointainer>
    )
}

export default DatePicker
