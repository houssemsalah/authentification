import axios from "axios";
import {ADD_PRODUCT , GET_PRODUCT,GET_PRODUCTS,UPDATE_PRODUCT,DELETE_PRODUCT, FAIL_PRODUCT, LOAD_PRODUCT
    } from "../const/product";




export const addProduct=(product)=> async (dispatch) =>{
    dispatch({type:LOAD_PRODUCT});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {

       const result= await axios.post("/api/products",product,options);
        //{PRODUCT,msg,roken}
        dispatch({type: ADD_PRODUCT,payload: result.data});
        
    } catch (error) {
        console.log(error)
        dispatch({type: FAIL_PRODUCT, payload: error.response.data});
       // const {errors,msg}=error.response.data;
        //if(   Array.isArray(errors)) {
          //  errors.forEach((err)=>alert(err.msg));}
    }
};





export const updateProduct=(id,product)=> async (dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
     const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    } 
    try {
       let result = await axios.put(`/api/products/${id}`,product,options );
       //PRODUC
        dispatch({type:UPDATE_PRODUCT,payload :result.data.product})
    } catch (error) {
        dispatch({type:FAIL_PRODUCT, payload: error.response.data});

    }
}


export const deleteProduct=(id)=> async (dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
     const options={
         headers:{
             authorization:localStorage.getItem("token")
         }
     }
    try {
       let result = await axios.delete(`/api/products/${id}`,options);
       //PRODUCT
        dispatch({type:DELETE_PRODUCT,payload :result.data.product})
        dispatch(getProducts())
    } catch (error) {
        dispatch({type:FAIL_PRODUCT,payload: error.response.data});

    }
}

export const getProducts=()=> async (dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    
    
    try {
       const result = await axios.get("/api/products");
       console.log(result)
       //PRODUCT
        dispatch({type:GET_PRODUCTS,payload :result.data.products})
    } catch (error) {
        dispatch({type:FAIL_PRODUCT,payload: error.response.data});

    }
}

export const getProduct=(_id)=> async (dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
  
    try {
       let result = await axios.get("/api/products?_id=${id}");
       //PRODUCT
        dispatch({type:GET_PRODUCT,payload :result.data.product})
    } catch (error) {
        dispatch({type:FAIL_PRODUCT,payload: error.response.data});

    }
}