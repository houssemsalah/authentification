import React, { useEffect } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../JS/actions/user'
import TableAdmins from './TableAdmins'


const Admins = () => {
 
      const dispatch = useDispatch()
      useEffect(() => {
        dispatch(getUsers())
      }, [])
   
      const users = useSelector(state => state.userReducer.users)  
           console.log(users)
     return (
 
 
            <Card classeName="mycard" style={{ backgroundImage: 'url(../images/bg_4.jpg)'}}
             
              borderColor="#fac564 !important"
            >
              <Card.Body  >
                <Table   style={{ backgroundColor:"black",marginLeft:"50px" ,width:"1150px",marginTop:"50px"}}>
                  <thead>
                    <tr>
                      <th>
                        <h5 style={{ Color: "orange !important"  }}>Photo</h5>
                      </th>
                      <th style={{ Color: "#fac564 !important" }}>
                        <h5>Nom</h5>
                      </th>
                      <th style={{ Color: "#fac564" }}>
                        <h5>Age</h5>
                      </th>
                      
                      <th>
                        <h5>N° Tel</h5>
                      </th>
                      <th>
                        <h5>Email</h5>
                      </th>
                      <th>
                        <h5>Action</h5>
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {users.filter(user =>( user.isAdmin==true)).map(user => 
                        <TableAdmins user={user} />
                      )} 
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
              
    )
  }
  
  export default Admins
  