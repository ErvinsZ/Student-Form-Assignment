import React from 'react'
import StudentList from '../maincontent/StudentList'
import {Container} from '../template/Template'
import {Title} from '../atoms/Title'

//Wrapping title and content of the page in the reusable Container
function Page() {
    return (
     <Container>
      <Title>Student Registration Form</Title>
      <StudentList/>
     </Container> 
    )
}

export default Page
