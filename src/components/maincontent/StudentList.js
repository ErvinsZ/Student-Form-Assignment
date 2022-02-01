import React from 'react'
import {v4 as uuid} from 'uuid'
import {useState} from 'react'
import Form from '../form/Form'
import {Button} from '../atoms/buttons/Button'
import {Table, TableHeader, Tbody, Tr, Td, Th} from '../table/Table'
import {tableHeader} from '../table/TableHeader'


function StudentList() {
    const [data, setData] = useState([])
    //Saving the submitted object of data in an array and assign a unique id
    const addStudent = (student) =>{
        console.log(data)
        setData([...data, {student, id: uuid()  }])
        
    }
    //Creating a new student list with only the table rows which have different id from the clicked item
    const handleRemove = (id) => {
        const newStudentList = data.filter((item) => item.id !== id)
        setData(newStudentList);
    }
    return (
        //Passing through the addStudent function via form's onSubmit and mapping content in the custom Table
        <>
            <Form addStudent={addStudent}/>
            <Table>
                <Tbody>
                    {data.length > 0 &&
                <TableHeader className="table-header">
                    {tableHeader.map(item => {
                    return (<Th key={item}>{item}</Th>)})}
                </TableHeader>
                }   
                {
                data.map(item => {
                   return( 
                <Tr key={item.id}>
                    <Td>{item.student.name}</Td>
                    <Td>{item.student.startDate.toLocaleDateString('en-gb')}</Td>
                    <Td>{item.student.class}</Td>                      
                    <Td><Button delete onClick={() => handleRemove(item.id)}>Delete</Button></Td>
                </Tr>             
                    )
                })
            }   
                </Tbody>
            </Table>
        </>
    )
}

export default StudentList
