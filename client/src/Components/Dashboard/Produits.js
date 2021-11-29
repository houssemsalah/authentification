import React, { useEffect, useState } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Row,Col } from 'react-bootstrap';
import { GrAddCircle } from "react-icons/gr";
import { addProduct, getProducts } from '../../JS/actions/product';
import { productReducer } from "../../JS/reducers/product";
import TableItems from "../TableItems"
import { useHistory } from 'react-router';
const Produits = ({  }) => {
    // const list = useSelector((state) => state.itemSlice.itemList);
  
    const [show, setShow] = useState(false);
 
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [picture, setPicture] = useState("");
   
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory();
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getProducts())
    }, [])
    const products = useSelector(state => state.productReducer.products)

    const [menuList, setMenuList] = useState("all");
    const handleAll = () => setMenuList("all");
    const handlePizza = () => setMenuList("pizza");
    const handleDrink = () => setMenuList("drink");
    const handlePlat = () => setMenuList("plat");
    const handleSandwiche = () => setMenuList("sandwiche");
  
    return (
      <div>
        <section className="ftco-menu" style={{display:"flex",flexDirection:"column" ,justifyContent:"space-arround",alignContent:"center",flexWrap:"wrap", marginLeft:"225px"}}>
          <div className="container-fluid" >
            <div className="row d-md-flex">
              <div className="col-lg-12  p-md-5" >
                <div className="row">
                  <div
                    className="col-md-12 nav-link-wrap mb-5 d-flex "
                    style={{
                      justifyContent: "center",
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
                  >
                    <div className="nav  nav-pills" aria-orientation="vertical">
                      <a className="nav-link " onClick={handleAll}>
                        All
                      </a>
                      <a
                        className="nav-link "
                        onClick={handlePlat}
                        aria-selected="true"
                      >
                        Plats
                      </a>
                      <a
                        className="nav-link"
                        onClick={handlePizza}
                        aria-selected="false"
                      >
                        Pizzas
                      </a>
                      <a
                        className="nav-link"
                        onClick={handleSandwiche}
                        aria-selected="false"
                      >
                        Sandwiches
                      </a>
                      <a
                        className="nav-link"
                        onClick={handleDrink}
                        aria-selected="false"
                      >
                        Boissons
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

    
        
      <Modal  show={show} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title style={{color:"black"}} >Ajouter un nouveau produit</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex', flexDirection:'column'}}>
            Product : <input name='name'  onChange={(e) => setName(e.target.value)}/>
            Category : <input name='category' onChange={(e) => setCategory(e.target.value)}/>
            Prix : <input name='price' onChange={(e) => setPrice(e.target.value)}/> 
            Description : <input name='description' onChange={(e) => setDescription(e.target.value)}/>
            picture : <input name='description' onChange={(e) => setPicture(e.target.value)}/>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={()=>dispatch(addProduct({name,price,picture,category,description},history))}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
        


          <Container style={{marginTop:"-50px"}} >
            
            <Card
              style={{ backgroundColor:"black" ,marginLeft:"200px",marginRight:"-230px",boxShadow:"1px 1px 1px 5px 	#000000",border:"10px"}}
              borderColor="#fac564 !important"
            >
              <Card.Body>
              <Row style={{paddingBottom:"50px",marginBottom:"-30px"}} >
            <Col>
        <Button style={{borderRadius:"50px",width:"120px" ,backgroundColor:"orange", display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"700px"}} variant="primary" onClick={handleShow}>
        <b>Ajouter</b><GrAddCircle style={{marginLeft:"5px",fontSize:"20px"}}/>
      </Button> </Col>
</Row>
                <Table style={{}} >
                  <thead>
                    <tr>
                      <th>
                        <h5 style={{ Color: "orange !important"  }}>ID</h5>
                      </th>
                      <th style={{ Color: "#fac564 !important" }}>
                        <h5>Product</h5>
                      </th>
                      <th style={{ Color: "#fac564" }}>
                        <h5>Price</h5>
                      </th>
                      <th style={{ Color: "#fac564" }}>
                        <h5>Description</h5>
                      </th>
                      <th>
                        <h5>Action</h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
            { menuList==='all' ?  products.map(item => <TableItems item={item} /> ) :
     products.filter(item =>( item.category==menuList)).map(item => 
                        <TableItems item={item} /> )
                  }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Container>
        
      </div>
    );
  };
  
  export default Produits;
  