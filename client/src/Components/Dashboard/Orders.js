import React, { useEffect } from 'react'
import  { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import { getOrders } from '../../JS/actions/order';




const Orders = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders())
  }, [])
  const orders = useSelector(state => state.orderReducer.data)
console.log(orders)
    const [show, setShow] = useState(false);

    
    
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <div>
         <div className="col-md-3" style={{display:"flex",justifyContent:"space-between",margin:"100px",height:"40%",width:"1000px"}}>
     {     orders.map(order => 
  <div className="card card-danger"style={{backgroundColor:"black"}} onSubmit={(e)=>e.preventDefault()}>
    <button style={{backgroundColor:"orange",paddingBottom:"0px"}}  className="card-header" onClick={handleShow}>
      <h3 className="card-title">{order.createdAt} </h3>
      <div className="card-tools">
        </div>
        </button>
    <div className="card-body">
     {order.user}
    </div>
  </div> 
     )}
</div>
 
<Modal show={show} onHide={handleClose} onSubmit={(e)=>e.preventDefault()}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Modifying item</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div class="col-md" style={{}}>

<div className="card card-primary card-outline">
  <div className="card-body box-profile">
    <div className="text-center">
      <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" style={{height:"100%"}} />
    </div>
    <h3 className="profile-username text-center">Nina Mcintire</h3>
    <p className="text-muted text-center">Software Engineer</p>
    <ul className="list-group list-group-unbordered mb-3">
      <li className="list-group-item">
        <b>Followers</b> <a className="float-right">1,322</a>
      </li>
      <li className="list-group-item">
        <b>Following</b> <a className="float-right">543</a>
      </li>
      <li className="list-group-item">
        <b>Friends</b> <a className="float-right">13,287</a>
      </li>
    </ul>
    <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
  </div>
  {/* /.card-body */}
</div>
</div>

         {/*  ID : <input name="id" disabled />
          Type : <input name="type" onChange={handleChange} />
          Product : <input name="name" onChange={handleChange} />
          Price : <input name="price"  onChange={handleChange}/>
          Description : <input name="description"  onChange={handleChange}/> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >Confirmer</Button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default Orders
