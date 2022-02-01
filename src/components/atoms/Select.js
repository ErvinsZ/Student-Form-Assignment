import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from '../form/ErrorMessage'
import {InputCointainer} from '../inputcontainer/InputContainer'

//Unlike other input fields Select field is styled in the App.css as for some reason creating a new re-styled component broke the select
function Select(props) {
    const {label, name, options} = props
    return (
        <InputCointainer>
            <Field as="select" id={name} name={name} label={label}>
                {
                    options.map(option => {
                        return(
                            <option key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
            </InputCointainer>
    )
}

export default Select