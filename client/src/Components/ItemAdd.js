import React, { useState } from 'react'
import { Button, Modal, Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import 'reactjs-popup/dist/index.css';


const ItemAdd= () => {
    const [show, setShow] = useState(false);
    const [newItem ,setNewItem] = useState({
      id:Math.floor(100000 + Math.random() * 900000),
      title:"",
      price:"",
      description:"",
      type:"",

    });
    const list = useSelector((state) => state);

    const dispatch = useDispatch()


    const handadd=()=>{

      dispatch()
     }



    const handleChange =(e)=>{
      
        setNewItem({...newItem,[e.target.name]:e.target.value})
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{paddingBottom:"100px"}}>
          <Row>
            <Col>
        <Button style={{backgroundColor:"orange",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"700px"}} variant="primary" onClick={handleShow}>
        Add
      </Button></Col>
</Row>
      <Modal  show={show} onHide={handleClose} >
        <Modal.Header closeButton >
          <Modal.Title style={{color:"black"}} >Adding new item</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex', flexDirection:'column'}}>
            Product : <input name='title' onChange={handleChange}/>
            type : <input name='type' onChange={handleChange}/>

                      Price : <input name='price' onChange={handleChange}/> 
                       Description : <input name='description' onChange={handleChange}/>

           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handadd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ItemAdd

