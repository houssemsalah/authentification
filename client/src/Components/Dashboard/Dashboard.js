
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current, logout } from "../../JS/actions/user";
import { Link, useHistory } from "react-router-dom";
import Produits from "./Produits";
import  { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Route, Switch } from 'react-router';


import { IconContext } from 'react-icons';
import NavBar from "../NavBar";
import NavBarr from "../NavBarr";
import Widgets from "./Widgets";
import { Col, Row } from "react-bootstrap";
import Orders from "./Orders";
import Utilisateur from "./Utilisateur";
import Admins from "./Admins";
import Restaurant from "./Restaurant";

const Dashboard = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []); 
 

  const currentUser = useSelector(state => state.userReducer.user)

  console.log(currentUser)

  const history = useHistory();
 
return (
  <div  style={{marginRight:"15px"}}>
    
   {currentUser? <Row>
   
    <Col xs={2} >
              
      <nav className='nav-menu ' >
<div style={{fontSize:"30px",paddingTop:"30px" ,paddingBottom:"20px"}}>
  <span >
    <b>
  Admin
  </b>
  </span>
</div>
      <div className="user-panel mt-3 pb-3 mb-3 d-flex" >
  <div className="image">
    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-1" alt="User" />
  </div>
  <div className="info">
   <b> <a href="#" className="d-block"> {currentUser.name} {" "} {currentUser.lastName}</a></b>
  </div>
</div>


        <ul className='nav-menu-items'style={{listStyleType:"none"}} >
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
             
            </Link>
          </li>
          
              <li style={{marginTop:"50px"}}>
                <Link to={`/admin/widgets`}>
                  
                  <span >Dashboard</span>
                </Link>
              </li>
              
              <li style={{marginTop:"30px"}}>
                <Link to={`/admin/commandes`}>
                  
                  <span >Commandes</span>
                </Link>
              </li>
              <li style={{marginTop:"30px"}}>
                <Link to={`/admin/produits`}>
                  
                  <span >Produits</span>
                </Link>
              </li>
              <li style={{marginTop:"30px"}}>
                <Link to={`/Admin/utilisateurs`}>
                  
                  <span >Utilisateurs</span>
                </Link>
              </li>
              <li style={{marginTop:"30px"}}>
                <Link  to={`/admin/admins`}>
                  
                  <span>Admins</span>
                </Link>
              </li>
              <li style={{marginTop:"30px"}}>
                <Link to={`/admin/restaurant`}>
                  
                  <span >Restaurant</span>
                </Link>
              </li>
          
        </ul>
      </nav>
      </Col>

      <Col xs={10} className="dash" >
      <Row>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" style={{display:"flex",justifyContent:"wrap row",width:"100%",height:"70px",borderBottom:"10px",borderColor:"orange"}}>
    <div className="container">
     
     <Link  to={`/`} style={{marginLeft:"100px"}}>Home</Link> 
      <div className="search">
  <input className="form-control" type="text"  placeholder="Search" aria-label="Search" />
</div>
     </div>
   
  

    </nav>
      </Row>
      <Row >

       <Switch>
      <Route exact path="/admin/widgets" component={Widgets} />
       <Route  path="/admin/produits" component={Produits}/>
       <Route  path="/admin/commandes" component={Orders}/>
       <Route  path="/admin/utilisateurs" component={Utilisateur}/>
       <Route  path="/admin/admins" component={Admins}/>
       <Route  path="/admin/restaurant" component={Restaurant}/>
       </Switch > 
       </Row>
</Col>
</Row>:<h1>loading</h1>}
</div>




   
  );
};

export default Dashboard;