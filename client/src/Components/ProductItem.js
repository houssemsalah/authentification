import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from '../JS/actions/order'
import { current } from '../JS/actions/user'

const ProductItem = ({product}) => { 
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(current());
  }, []); 
 

  const currentUser = useSelector(state => state.userReducer.user)

    return (
        <>
                    <div className="col-lg-6 d-flex animate__animated animate__fadeInUp ">
          <div className="services-wrap d-flex" style={{width:"1000px"}}>
            <a href="#" className="img animate__animated animate__fadeInUp" style={{backgroundImage: 'url(images/11.jpg)', width: '100%', height: 290}} />
            <div className="text p-4">
              <h3>{product.name}</h3>
              <p style={{color:"grey"}}>{product.description}</p>
              <p className="price"style={{marginTop:"90px"}}><span>{product.price} DT</span> <a onclick={dispatch(addOrder({...product,user:currentUser}))} href="#" className="ml-2 btn btn-white btn-outline-white animate__animated animate__fadeInUp" style={{display:"flex",justifyContent:"wrap"}}><b>Commander</b></a></p>
            </div>
          </div>
        </div>
        </>
    )
}

export default ProductItem
