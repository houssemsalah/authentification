import React from "react";
import "./../css/style.css";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { logout } from "../JS/actions/user";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import { useEffect } from "react";
import { current} from "../JS/actions/user";


function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(current());
  }, []); 
  
 

  const currentUser = useSelector(state => state.userReducer.user)
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light"
        id="ftco-navbar"
        style={{ position: "fixed", width: "100%" }}
      >
        <div className="container" >
          <a className="navbar-brand" href="acceuil.html" style={{marginLeft:"-70px",marginRight:"130px"}}>
            
            <img
              className="logo12"
              alt="logo"
              src="images/logo.png"
              style={{
                width: "300px",
                height: "100px",
                marginTop: "-60px",
                marginBottom: "-20px",
              }}
            />
            <br />
            <small>
              <span>
                <img
                  className="logo1"
                  alt="img"
                  src="images/coffee-cup.png"
                  width="20px"
                  height="20px"
                />
              </span>{" "}
              Café &amp; Resterant{" "}
              <span>
                <img
                  className="logo1"
                  src="images/cc1.png"
                  width="20px"
                  height="20px"
                />
              </span>
            </small>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav" style={{}}>
            <ul className="navbar-nav ml-auto" style={{ padding: "0px 50px" }}>
              <li className="nav-item active">
                <Link to="/" className="nav-link" style={{ fontSize: "15px" }}>
                  <b>Acceuil</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Menu"
                  className="nav-link"
                  style={{ fontSize: "15px" }}
                >
                  <b>Menu</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Contact"
                  className="nav-link"
                  style={{ fontSize: "15px" }}
                >
                  <b>Contact</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Cart"
                  className="nav-link"
                  style={{ fontSize: "15px" }}
                >
                  <b>Livraison</b>
                </Link>
              </li>
              <div class="widget-header  mr-3" style={{ marginTop: "10px" }}>
                <a to="/Cart" href="/Cart" class="icon icon-sm  " style={{ fontSize: "25px" }}>
                  <i class="fa fa-shopping-cart"></i>
                </a>
                <span class="badge badge-pill badge-danger notify">0</span>
              </div>
            </ul>
          </div>
<div>
            <Dropdown style={{marginRight:"20px"}}>
              <Dropdown.Toggle
                style={{
                  borderRadius: "100px ",
                  height: "30px",
                  paddingBottom: "10px",
                  backgroundColor: "none",
                  hover: "none",
                }}
              ></Dropdown.Toggle>

              <Dropdown.Menu style={{backgroundColor:"orange"}}>
                <Dropdown.Item href="/profil"><b>Profil</b></Dropdown.Item>
                <Dropdown.Item href="/admin"><b>Dashboard</b></Dropdown.Item>
                <Dropdown.Item href="/admin" onClick={()=>dispatch(logout(history))}><b>Logout</b></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
</div>
{    currentUser? null  :<div class="text" style={{marginRight:"-150px"}}>
            <span class="text-muted">Welcome!</span>
            <div>
              <a href="/signin">Sign in</a> |<a href="/signup">Register</a>
            </div>
          </div>}

          {/*  <div className="nav-item"><span><Link to="/Admin" className="nav-link"style={{color:"white",marginRight:"-50px",fontSize:"15px"}}><FaUserAlt style={{ marginTop:"-5px",marginRight:"10px"}}/><b>Admin</b></Link></span></div>
           */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
