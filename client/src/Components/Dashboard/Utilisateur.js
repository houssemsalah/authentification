import React, { useEffect } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../JS/actions/user'
import TableUsers from './TableUsers'

const Utilisateurs = () => {
 
      const dispatch = useDispatch()
      useEffect(() => {
        dispatch(getUsers())
      }, [])
   
      const users = useSelector(state => state.userReducer.users)  
           console.log(users)
     return (
 
 
            <Card classeName="mycard" style={{marginLeft:"125px",marginTop:"30px", backgroundColor: "black"}}
             
              borderColor="#fac564 !important"
            >
              <Card.Body  >
                <Table   style={{ backgroundColor:"black" , width:"400px"}}>
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
                        <h5>Commande effectué</h5>
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {users.map(user => 
                        <TableUsers user={user} />
                      )} 
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
       


       
    )
}

export default Utilisateurs
