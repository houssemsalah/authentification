import React from 'react'

const Contact = () => {
    return (
        <div>
         <div>
         <section 
        style={{ backgroundImage: "url(/images/bg_3.jpg)", linearGradient:"black",height:"800px" ,width:"100%" }}
      >
        
        
          <div className=" container  ">  <div />
            <div className="row slider-text justify-content-center align-items-center ">
              <div className="col-md-7 col-sm-12 text-center " style={{marginTop:"300px"}}>
                <h1 className="mb-3 mt-5 bread" style={{color:"white" , fontSize:"40px", marginLeft:"120px"}}>CONTACTER-NOUS</h1>
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="index.html" style={{color:"white",fontSize:"20px" ,textDecoration:"none"}}>Acceuil</a>
                  </span>{" "}
                  <span  style={{color:"white",fontSize:"20px"}}>Contact</span>
                </p>
              </div>
            </div>
          </div>
        
      </section>
  <section className="ftco-section contact-section" style={{marginTop:"100px"}}>
    <div className="container mt-5">
      <div className="row block-9">
        <div className="col-md-4 contact-info ">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Contact Info</h2>
            </div>
            <div className="col-md-12 mb-3">
              <p style={{color:"grey"}}><span>Address:</span> 	Gabés Av.de la République - شارع الجُمهوريّة</p>
            </div>
            <div className="col-md-12 mb-3">
              <p ><span>Telephone:</span> <a style={{color:"grey"}} href="tel://1234567920">	00216 50 148 832
                </a></p>
            </div>
            <div className="col-md-12 mb-3">
              <p><span>Email:</span> <a style={{color:"grey"}} href="mailto:info@yoursite.com">myhouse@gmail.com</a></p>
            </div>
            <div className="col-md-12 mb-3">
              <p><span>Site Web:</span> <a style={{color:"grey"}} href="#">myhousecaferesto.com</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-1" />
        <div className="col-md-6 ">
          <form action="#" className="contact-form" style={{backgroundColor:"black",boxShadow:"none"}}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Votre Nom" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Votre Email" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Sujet" />
            </div>
            <div className="form-group">
              <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
            </div>
            <div className="form-group">
              <input type="submit" defaultValue="Envoyer Message" className="btn btn-primary py-3 px-5" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <div id="map">
  </div></div>
</div>
      
    )
}

export default Contact
