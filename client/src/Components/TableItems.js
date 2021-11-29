import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { updateProduct , deleteProduct } from "../JS/actions/product";


const TableItems = ({ item }) => {



  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  const [category, setCategory] = useState(item.category);
  const [picture, setPicture] = useState(item.picture);
 
  const [show, setShow] = useState(false);
 
  const dispatch = useDispatch()


  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr>
        <td>
          <span className="fw-normal">
            <div className="small text-gray">{item._id}</div>
          </span>
        </td>
        <td>
          <span className="fw-normal">
            <div className="small text-gray">{item.name}</div>
          </span>
        </td>
        <td>
          <span className="fw-normal">
            <div className="small text-gray">{item.price} DT</div>
          </span>
        </td>
        <td>
          <span className="fw-normal">{item.description}</span>
        </td>
        <td>
          <a onClick={handleShow}>
            <BiEdit style={{ color: "orange" }} />{" "}
          </a>
          <a>
            {" "}
            <BiTrash
              onClick={() => dispatch(deleteProduct(item._id))}
              style={{ color: "orange", marginLeft: "20px" }}
            />{" "}
          </a>
        </td>
      </tr>







      <Modal  show={show} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title style={{color:"black"}} >Modifier le produit</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex', flexDirection:'column'}}>
            Product : <input name='name'  onChange={(e) => setName(e.target.value)} defaultValue={item.name} />
            Category : <input name='category' onChange={(e) => setCategory(e.target.value)} defaultValue={item.category}/>
            Prix : <input name='price' onChange={(e) => setPrice(e.target.value)} defaultValue={item.price}/> 
            Description : <input name='description' onChange={(e) => setDescription(e.target.value)} defaultValue={item.description}/>
            picture : <input name='picture' onChange={(e) => setPicture(e.target.value)} defaultValue={item.picture}/>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary"  onClick={()=>dispatch(updateProduct( item._id,{name,price,description,category,picture}))}>
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
        
    </>
  );
};

export default TableItems;
