import axios from "axios";
import {ADD_ORDER , GET_ORDER,GET_ORDERS,UPDATE_ORDER,DELETE_ORDER, LOAD_ORDER, FAIL_ORDER
    } from "../const/order";
import { FAIL_PRODUCT } from "../const/product";




export const addOrder=(order)=> async (dispatch) =>{
    dispatch({type:LOAD_ORDER});
    try {

       const result= await axios.post("/api/orders",order);
        //{ORDER,msg,roken}
        dispatch({type: ADD_ORDER,payload: result.data});
        
    } catch (error) {
        console.log(error)
        dispatch({type: FAIL_ORDER, payload: error.response.data});
       // const {errors,msg}=error.response.data;
        //if(   Array.isArray(errors)) {
          //  errors.forEach((err)=>alert(err.msg));}
    }
};





export const updateOrder=(_id)=> async (dispatch)=>{
    dispatch({type:LOAD_ORDER});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.put("/ORDERs?_id=${id}",options);
       //ORDER
        dispatch({type:UPDATE_ORDER,payload :result.data.order})
    } catch (error) {
        dispatch({ type:FAIL_ORDER,payload: error.response.data});

    }
}


export const deleteOrder=(_id)=> async (dispatch)=>{
    dispatch({type:LOAD_ORDER});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.delete("/orders?_id=${id}",options);
       //ORDER
        dispatch({type:DELETE_ORDER,payload :result.data.order})
    } catch (error) {
        dispatch({type:FAIL_ORDER,payload: error.response.data});

    }
}

export const getOrders=()=> async (dispatch)=>{
    dispatch({type:LOAD_ORDER});
    
    try {
       let result = await axios.get("/api/orders");
       console.log(result)
       //ORDER
        dispatch({type:GET_ORDERS,payload :result.data})
    } catch (error) {
        dispatch({type:FAIL_ORDER,payload: error});

    }
}

export const getOrder=(_id)=> async (dispatch)=>{
    dispatch({type:LOAD_ORDER});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.get("/orders?_id=${id}",options);
       //ORDER
        dispatch({type:GET_ORDER,payload :result.data.order})
    } catch (error) {
        dispatch({type:FAIL_ORDER,payload: error.response.data});

    }
}