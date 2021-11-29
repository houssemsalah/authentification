import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getOrders } from '../JS/actions/order';
import { current } from '../JS/actions/user';

const Cart = () => {

    const history = useHistory();
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getOrders())
    }, [])
    const orders = useSelector(state => state.orderReducer.orders)
console.log(orders)




useEffect(() => {
  dispatch(current());
}, []); 


const currentUser = useSelector(state => state.userReducer.user)

console.log(currentUser)

    return (
        <div className="App">
       
           
           
           
           
           <section class="section-pagetop bg" style={{backgroundImage: 'url(images/bg_4.jpg)'}}>
          
               <h2 class="title-page" style={{color:"orange"}}>Shopping cart</h2>
           
           </section>
           
           <section class="section-content padding-y" style={{backgroundImage: 'url(images/bg_4.jpg)'}}>
           <div class="container">
           
           <div class="row">
               <main class="col-md-9">
           <div class="card">
           
           <table class="table table-borderless table-shopping-cart">
           <thead class="text-muted">
           <tr class="small text-uppercase">
           <th scope="col">Produit</th>
           <th scope="col" width="120">Quantity</th>
           <th scope="col" width="120">Prix</th>
           <th scope="col" class="text-right" width="200"> </th>
           </tr>
           </thead>
           <tbody>
           {        orders.map(order => 
               <tr>
               
               <td>
                   <figure class="itemside">
                       <div class="aside"><img src="images/11.jpg" class="img-sm" /></div>
                       <figcaption class="info">
                           <a href="#" class="title text-dark">{order.name}</a>
                           <p class="text-muted small">{order.description}</p>
                       </figcaption>
                   </figure>
               </td>
               <td> 
                   <select style={{color:"orange",marginTop:"30px"}}>
                       <option>1</option>
                       <option>2</option>  
                       <option>3</option>  
                       <option>4</option>  
                   </select> 
               </td>
               <td> 
                   <div class="price-wrap" style={{color:"orange",marginTop:"30px"}}> 
                       <var class="price">{order.price} DT</var> 
                       
                   </div> 
               </td>
               <td class="text-right"style={{color:"orange",paddingTop:"40px"}}> 
                <a href="" class=""> Supprimer</a>
               </td>
           </tr>
            ) }
           </tbody>
           </table>
           
           
           </div> 
           
           <div class="alert alert-success mt-3">
               <p class="icontext"><i class="icon text-success fa fa-truck"></i> Livraison Gratuit dans  30-60 min</p>
           </div>
           
               </main>
               <aside class="col-md-3">
                   <div class="card mb-3">
                       <div class="card-body">
                       <form>
                           <div class="form-group">
                               <label>Have coupon?</label>
                               <div class="input-group">
                                   <input type="text" class="form-control" name="" placeholder="Coupon code" />
                                   <span class="input-group-append"> 
                                       <button class="btn btn-primary">Apply</button>
                                   </span>
                               </div>
                           </div>
                       </form>
                       </div> 
                   </div>  
                   <div class="card">
                       <div class="card-body">
                               <dl class="dlist-align">
                               <dt>Total price:</dt>
                               <dd class="text-right">568 dt
                                   
                               </dd>
                               </dl>
                               

                               <hr />
                                                              <span class="input-group-append"> 
                                       <button class="btn btn-primary">Comfirmer</button>
                                   </span>
                       </div> 
                   </div>  
               </aside> 
           </div>
           
           </div> 
           </section>
          
          
  
          
        
       </div>
    )
}

export default Cart
