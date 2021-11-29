import React from "react";
import './../css/style.css'
import { Carousel } from "react-bootstrap";


function Carrousel() {
  return (
   


<div className="bgCarousel" style={{ backgroundImage: "url(/images/bg_1.jpg)" ,paddingTop:"50px"}}>
      
        <Carousel   >  
         
          <Carousel.Item className="slider-item" >
         <div class="overlay"></div>
            <div className="container" >
              <div 
                className="row slider-text align-items-center"
                data-scrollax-parent="true"
              >
            <div  className="animate__zoomIn" style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center",alignItems:"center" }}>
                  <img 
                    src="images/3.jpg"
                    width="1200px"
                    height="500px"
                    alt="myimage"
                  /> 
                </div>
              </div>
            </div>
          </Carousel.Item>



          <Carousel.Item className="slider-item">
           {/*<div class="overlay"></div>*/}
            <div className="container">
              <div
                className="row slider-text align-items-center"
                data-scrollax-parent="true"
              >
               <div className="animate__zoomIn" style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center",alignItems:"center" }}>
                  <img
                    src="images/2.jpg"
                    width="1200px"
                    height="500px"
                    alt="myimage"
                  /> 
               </div>
              </div>
            </div>
          </Carousel.Item>



          <Carousel.Item className="slider-item">
        
            <div className="container">
              <div
                className="row slider-text align-items-center"
                data-scrollax-parent="true"
              >
             <div className="animate__zoomIn" style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center",alignItems:"center" }}>
                  <img
                    src="images/1.jpg"
                    width="1200px"
                    height="500px"
                    alt="myimage"
                  /> 
            </div>
              </div>
            </div>
          </Carousel.Item>


        </Carousel>

     
      
    </div>
  );
};

export default Carrousel;
