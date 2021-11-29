
import React from 'react'

const NavBarr = () => {
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
  <div className="container">
    <a className="navbar-brand" href="acceuil.html"> My House<br /><small><span><img className="logo1" src="images/coffee-cup.png" width="20px" height="20px" /></span> Café &amp; Resterant <span><img className="logo1" src="images/cc1.png" width="20px" height="20px" /></span></small></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="oi oi-menu" /> Menu
    </button>
    <div className="collapse navbar-collapse" id="ftco-nav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active"><a href="acceuil.html" className="nav-link">Acceuil</a></li>
        <li className="nav-item"><a href="menu.html" className="nav-link">Menu</a></li>
        <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="Livraison.html" className="nav-link">Livraison</a></li>
        <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

export default NavBarr
