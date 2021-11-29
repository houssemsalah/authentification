import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import {  GrDeliver, GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { RiEBike2Line } from "react-icons/ri";
import { GiFruitBowl, GiFullPizza } from "react-icons/gi";
import './../css/style.css';
import "animate.css";
const Acceuil = () => {
  return (
    <>
  <div>
  <section className="ftco-intro  animate__animated animate__fadeInUp" >
    <div className="container-wrap">
      <div className="wrap d-md-flex">
        <div className="info">
          <div className="row no-gutters" style={{marginTop:"20px"}}>
            <div className="col-md-4 d-flex " >
           <FaPhoneAlt className=" animate__animated animate__fadeInUp " style={{color:"orange",fontSize:"18px",marginRight:"15px",marginBottom:"10px"}}/>
              <div className="text" style={{marginTop:"3px"}}>
                <h3 className=" animate__animated animate__fadeInUp "> 00216 50 148 832 </h3>
                <p  style={{color:"grey"}}>N'hésitez pas à nous contacter</p>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <BiCurrentLocation style={{color:"orange",fontSize:"23px",marginRight:"15px",marginBottom:"10px"}}/>
              <div className="text">
                <h3 className=" animate__animated animate__fadeInUp ">Gabés</h3>
                <p className=" animate__animated animate__fadeInUp " style={{color:"grey"}}>Av.de la République - شارع الجُمهوريّة</p>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <GoClock style={{color:"orange",fontSize:"23px",marginRight:"15px",marginBottom:"10px"}}/>
              <div className="text" style={{marginTop:"3px"}}>
                <h3 className=" animate__animated animate__fadeInUp " >Ouvert Lundi-Vendredi</h3>
                <p className=" animate__animated animate__fadeInUp " style={{color:"grey"}}>11:00am - 11:00pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="social d-md-flex pl-md-5 p-4 align-items-center">
          <ul className="social-icon" style={{display:"flex",color:"white" ,fontSize:"20px", alignContent:"center",marginLeft:"50px"}}>
            <li className=" animate__animated animate__fadeInUp "><a href="#"><GrTwitter style={{color:"white"}}/></a></li>
            <li className=" animate__animated animate__fadeInUp "><a href="https://www.facebook.com/MyHousecafeloungerestaurant/photos/?ref=page_internal"><GrFacebookOption style={{color:"white"}}/></a></li>
            <li className=" animate__animated animate__fadeInUp "><a href="#"><GrInstagram style={{color:"white"}}/></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-about d-md-flex animate__animated animate__fadeInUp ">
    <div className="col-6 "> <img className="imgg" src="images/5.png" height="100%" width="115%" /> </div>
    <div className="one-half ">
      <div className="heading-section animate__animated animate__fadeInUp ">
        <h2 className="mb- animate__animated animate__fadeInUp">Bienvenue à <span className="flaticon-pizza"> My House </span>  Café&amp;Restaurant</h2>
      </div>
      <div className="animate__animated animate__fadeInUp">
        <p  style={{color:"grey"}}>“We prepare and serve high quality, simple food, at a great value, in a home-like environment.”</p>
        <p  style={{color:"grey"}}>“Make amazing food – offer warm welcoming service – give back to the neighborhood – run an efficient, profitable business – make flour a better place for both our customers and ourselves”</p>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-services animate__animated animate__fadeInUp " style={{ backgroundImage:'url(/images/food.png)',paddingTop: '5%', paddingBottom: '2%'}}>
    <div className="overlay" />
    <div className="container animate__animated animate__fadeInUp">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section text-center animate__animated animate__fadeInUp">
          <h2 className="mb-4 animate__animated animate__fadeInUp">Nos Services</h2>
          <p>" En fait, oufrir un excellent service client est notre objectif, Notre but est simple : vivre et oufrir WOW."</p>
        </div>
      </div>
      <div className="row animate__animated animate__fadeInUp">
        <div className="col-md-4 ">
          <div className="media d-block text-center block-6 services">
            <div className="icon d-flex justify-content-center align-items-center mb-5">
            <GiFruitBowl className="heading" style={{fontSize:"50px",fontFamily:"sans-serif",border:"1px"}}/>
            </div>
            <div className="media-body animate__animated animate__fadeInUp">
              <h3 className="heading animate__animated animate__fadeInUp">Nourriture saine</h3>
              <p> Nous nous soucions de votre santé alors nous vous fournissons donc des aliments sains</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="media d-block text-center block-6 services animate__animated animate__fadeInUp">
            <div className="icon d-flex justify-content-center align-items-center mb-5">
               <RiEBike2Line className="heading animate__animated animate__fadeInUp" style={{fontSize:"50px",fontFamily:"sans-serif",border:"1px"}}/>
            </div>
            <div className="media-body animate__animated animate__fadeInUp">
              <h3 className="heading animate__animated animate__fadeInUp">Livraison rapide</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 animate__animated animate__fadeInUp">
          <div className="media d-block text-center block-6 services animate__animated animate__fadeInUp">
            <div className="icon d-flex justify-content-center align-items-center mb-5"><GiFullPizza className="heading" style={{fontSize:"50px",fontFamily:"sans-serif",border:"1px"}}/></div>
            <div className="media-body animate__animated animate__fadeInUp">
              <h3 className="heading animate__animated animate__fadeInUp">Recettes originales</h3>
              <p>Decouvrir nos meilleur recettes de cuisine originales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="ftco-section d-flex animate__animated animate__fadeInUp" style={{paddingBottom: 0, paddingTop: 20, marginBottom: 0, marginTop: 0}}>
    <div className="container ftco-section animate__animated animate__fadeInUp">
      <div className="row justify-content-center mb-5 pb-3 animate__animated animate__fadeInUp">
        <div className="col-md-7 heading-section  text-center animate__animated animate__fadeInUp">
          <h2 className="mb-4 animate__animated animate__fadeInUp">Nos Chefs</h2>
          <p style={{color:"grey"}}>C'est le lieux idéal pour pour manger avec la famille</p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section d-flex animate__animated animate__fadeInUp" style={{paddingBottom: 0, paddingTop: 20, marginBottom: 0, marginTop: 0}}>
    <div className="container ftco-section animate__animated animate__fadeInUp">
      <div className="row justify-content-center mb-5 pb-3 animate__animated animate__fadeInUp">
        <div className="col-md-7 heading-section  text-center animate__animated animate__fadeInUp">
          <h2 className="mb-4 animate__animated animate__fadeInUp">Notre place</h2>
          <p style={{color:"grey"}}>C'est le lieux idéal pour pour manger avec la famille</p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section d-flex animate__animated animate__fadeInUp" style={{marginTop: '0%', marginBottom: '0%', paddingBottom: '0%', paddingTop: '0%', marginLeft: '0%', marginRight: '0%', paddingLeft: '0%', paddingRight: '0%'}}>
    <div className="container-wrap animate__animated animate__fadeInUp" style={{marginTop: '0%', marginBottom: '0%', paddingBottom: '0%', paddingTop: '0%', marginLeft: '0%', marginRight: '0%', paddingLeft: '0%', paddingRight: '0%'}}>
      <div className="row animate__animated animate__fadeInUp">
        <div className="col-3 d-flex animate__animated animate__fadeInUp" style={{paddingTop: 0, paddingRight: 10}}>
          <img className="immg" src="images/32.jpg" height="100%" width="100%" />
        </div>
        <div className="col-3 d-flex animate__animated animate__fadeInUp" style={{paddingLeft: 0, paddingRight: 10}}>
          <img className="immg" src="images/30.jpg" height="100%" width="100%" />
        </div>
        <div className="col-3 d-flex animate__animated animate__fadeInUp" style={{paddingLeft: 0, paddingRight: 10}}>
          <img className="immg animate__animated animate__fadeInUp" src="images/20.jpg" height="100%" width="100%" />
        </div>
        <div className="col-3 d-flex animate__animated animate__fadeInUp " style={{paddingLeft: 0, paddingRight: 10}}>
          <img className="immg animate__animated animate__fadeInUp" src="images/31.jpg" height="100%" width="100%" />
        </div>
      </div>
    </div></section>
</div>

    </>
  );
};

export default Acceuil;
