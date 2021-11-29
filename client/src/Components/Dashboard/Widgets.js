import React from 'react'
import { Col } from 'react-bootstrap'

const Widgets = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-between",margin:"100px",height:"100%",width:"100%"}}>
         <Col xs="12">
     <div className="row" style={{marginBottom:"20px"}} >
  <div className="col-lg-3 col-6">
    {/* small card */}
    <div className="small-box bg-info">
      <div className="inner">
        <h3>150</h3>
        <p>New Orders</p>
      </div>
      <div className="icon">
        <i className="fas fa-shopping-cart" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small card */}
    <div className="small-box bg-success">
      <div className="inner">
        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
        <p>Bounce Rate</p>
      </div>
      <div className="icon">
        <i className="ion ion-stats-bars" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small card */}
    <div className="small-box bg-warning">
      <div className="inner">
        <h3>44</h3>
        <p>User Registrations</p>
      </div>
      <div className="icon">
        <i className="fas fa-user-plus" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small card */}
    <div className="small-box bg-danger">
      <div className="inner">
        <h3>65</h3>
        <p>Unique Visitors</p>
      </div>
      <div className="icon">
        <i className="fas fa-chart-pie" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
</div>
{/* /.row */}



<div className="row" >
  <div className="col-lg-3 col-6">
    {/* small card */}
    <div className="small-box bg-info">
      <div className="inner">
        <h3>150</h3>
        <p>New Orders</p>
      </div>
      <div className="icon">
        <i className="fas fa-shopping-cart" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small card */}
    <div className="small-box bg-success">
      <div className="inner">
        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
        <p>Bounce Rate</p>
      </div>
      <div className="icon">
        <i className="ion ion-stats-bars" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small card */}
    <div className="small-box bg-warning">
      <div className="inner">
        <h3>44</h3>
        <p>User Registrations</p>
      </div>
      <div className="icon">
        <i className="fas fa-user-plus" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small card */}
    <div className="small-box bg-danger">
      <div className="inner">
        <h3>65</h3>
        <p>Unique Visitors</p>
      </div>
      <div className="icon">
        <i className="fas fa-chart-pie" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  </div>
  {/* ./col */}
</div>
</Col>
        </div>
    )
}

export default Widgets
