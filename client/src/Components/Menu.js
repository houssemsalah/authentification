import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../JS/actions/product";
import { productReducer } from "../JS/reducers/product";
import ProductItem from "./ProductItem";



const Menu = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  const products = useSelector(state => state.productReducer.products)
console.log(products)


  // const list=useSelector(state => state.itemSlice.itemList) 


  const [menuList, setMenuList] = useState("");
  const handleAll = () => setMenuList("");
  const handlePizza = () => setMenuList("pizza");
  const handleDrink = () => setMenuList("drink");
  const handlePlat = () => setMenuList("plat");
  const handleSandwiche = () => setMenuList("sandwiche"); 
  return (
    <div>
      <section 
        style={{ backgroundImage: "url(/images/bg_3.jpg)", linearGradient:"black",height:"800px" ,width:"100%" }}
      >
        
        
          <div className=" container  ">  <div />
            <div className="row slider-text justify-content-center align-items-center ">
              <div className="col-md-7 col-sm-12 text-center " style={{marginTop:"300px"}}>
                <h1 className="mb-3 mt-5 bread" style={{color:"white" , fontSize:"90px", marginLeft:"120px"}}>Our Menu</h1>
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="index.html" style={{color:"white",fontSize:"30px"}}>Home</a>
                  </span>{" "}
                  <span  style={{color:"white",fontSize:"30px"}}>Menu</span>
                </p>
              </div>
            </div>
          </div>
        
      </section>
      <section className="ftco-menu" style={{marginTop:"100px", marginBottom:"-50px"}}>
        <div className="container-fluid">
          <div className="row d-md-flex">
            <div className="col-lg-12  p-md-5">
              <div className="row">
                <div
                  className="col-md-12 nav-link-wrap mb-5 d-flex "
                  style={{
                    justifyContent: "center",
                    marginBottom: 0,
                    paddingBottom: 0,
                  }}
                >
                  <div
                    className="nav  nav-pills"
                   
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                       onClick={handleAll}
                    
                    >
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
                <div
                  className="col-md-12 d-flex align-items-center  "
                  style={{
                    justifyContent: "center",
                    marginTop: 0,
                    paddingTop: 0,
                  }}
                >
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                     
                    >
                      <section className="ftco-section ">
                        
                          <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                            <div className="col-md-7 heading-section text-center ">
                               <h2 className="mb-4">Nos {menuList}s</h2>
                              <p className="flip">
                                <span className="deg1" />
                                <span className="deg2" />
                                <span className="deg3" />
                              </p>
                              <p style={{color:"grey"}} className="mt-5">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                            </div>
                          </div>

                          {/* { list.filter(item =>( item.type.includes(menuList))).map(item => (
       */}
   
                             
            <section className="ftco-section" style={{paddingTop: '5%', paddingBottom: '2%',margin:"0px 40px"}}>
    
    <div className="container-wrap animate__animated animate__fadeInUp ">
      <div className="row no-gutters d-flex ">
      
               {products.filter(item =>( item.category.includes(menuList))).map(product => 
<ProductItem   product={product} /> 
                                        )} 
       
         
      </div>
    </div>
  </section>
                        
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
