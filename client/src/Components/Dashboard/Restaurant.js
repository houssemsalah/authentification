import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurant } from '../../JS/actions/restaurant'
import "./restaurant.css"
const Restaurant = () => {

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getRestaurant())
    }, [])
 
    const restaurants = useSelector(state => state.restaurantReducer.restaurant)  
         console.log(restaurants)

    return (
    <div>
  <div className="testbox" >
    <form onSubmit={(e)=>e.preventDefault()} style={{backgroundImage: 'url(../images/bg_4.jpg)',marginLeft:"150px",marginRight:"150px"}}>
      <div className="banner" style={{padding:"50px 20px",backgroundColor:"transparant"}}>
        <h1  style={{marginTop:"50px"}}>{restaurants.name}</h1>
      </div>
      <br />
      <fieldset>
        
        <div className="colums">
          <div className="item">
            <label htmlFor="fname" style={{color:"white"}} >Nom de Restaurant<span>*</span></label>
            <input style={{backgroundColor:"black",borderColor:"orange"}} value={restaurants.name} id="fname" type="text" name="fname" />
          </div>
          <div className="item">
            <label htmlFor="lname" style={{color:"white"}}>Adresse<span>*</span></label>
            <input style={{backgroundColor:"black",borderColor:"orange"}}  value={restaurants.address}  id="lname" type="text" name="lname" />
          </div>
          <div className="item">
            <label htmlFor="address" style={{color:"white"}}>Email<span>*</span></label>
            <input style={{backgroundColor:"black",borderColor:"orange"}}  value={restaurants.email}  id="address" type="text" name="address" />
          </div>
          <div className="item">
            <label htmlFor="phone" style={{color:"white"}}>Numero</label>
            <input style={{backgroundColor:"black",borderColor:"orange"}}  value={restaurants.number}  id="phone" type="tel" name="phone" />
          </div>
          <div className="item">
            <label htmlFor="saddress"style={{color:"white"}}>Street Address</label>
            <input style={{backgroundColor:"black",borderColor:"orange"}}  value={restaurants.name}  id="saddress" type="text" name="city" />
          </div>
          <div className="item">
            <label htmlFor="city"style={{color:"white"}}>ville</label>
            <input style={{backgroundColor:"black",borderColor:"orange"}}  value={restaurants.name}  id="city" type="text" name="city" />
          </div>
          <div className="item">
            <label htmlFor="zip"style={{color:"white"}}>Zip/Postal Code</label>
            <input style={{backgroundColor:"black",borderColor:"orange"}}  value={restaurants.name}  id="zip" type="text" name="zip" />
          </div>
          <div className="item">
            <label htmlFor="country"style={{color:"white"}}>Country</label>
            <input  style={{backgroundColor:"black",borderColor:"orange"}}  value={restaurants.name} id="country" type="text" name="text" />
          </div>
        </div></fieldset>
      <br />
     
      <div style={{color:"orange",borderColor:"orange"}} >
        <button type="order" href="/">Confirmer</button>
      </div>
    </form>
  </div>
</div>

    )
}

export default Restaurant
