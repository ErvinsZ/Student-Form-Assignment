import React from 'react'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'
import {Button} from '../atoms/buttons/Button'
import {dropdownOptions} from '../atoms/DropdownOptions'
import styled from 'styled-components'
import DatePicker from './DatePicker'
import Input from '../atoms/input/Input'
import Select from '../atoms/Select'

//1.Setting initial values
//2.Creating validationSchema with Yup
//3.Using Formik tag for render props(Form tag automitically hooks into Formik's handleSubmit)
//4.Taking Input Fields from FormControl and adding submit Button the "register" prop for styling.

//Styling Formiks 'Form' component and making it into new comp. - 'CustomForm'
const CustomForm = styled(Form)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 5px;
    min-height: 260px;
    max-width: 500px;
    margin: 70px auto;
`
function FormContainer({addStudent}){
    const initialValues = {
        name:'',
        class: '',
        startDate:null
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Full Name Required'),
        class: Yup.string().required('Class Required'),
        startDate: Yup.date().required('DOB Required').nullable()
    })
    const onSubmit = values => {
        addStudent(values)     
    }
    return(
        <>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <CustomForm>
                <Input 
                    type='name' 
                    label='Name' 
                    name='name'
                />
                <DatePicker
                    label='Select Start Date'
                    name='startDate'  
                />
                <Select
                    label='Select a topic'
                    name='class'
                    options={dropdownOptions}
                />
                <Button register type="submit">Register Student</Button> 
            </CustomForm>
        </Formik>
        </>
        
    )
}

export default FormContainer