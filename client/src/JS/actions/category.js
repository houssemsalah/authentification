import axios from "axios";
import {ADD_CATEGORY , GET_CATEGORY,GET_CATEGORIES,UPDATE_CATEGORY,DELETE_CATEGORY, FAIL_CATEGORY, LOAD_CATEGORY
    } from "../const/category";




export const addCategory=(category)=> async (dispatch) =>{
    dispatch({type:LOAD_CATEGORYFAIL_CATEGORY});
    try {

       const result= await axios.post("/categories",category);
        //{user,msg,roken}
        dispatch({type: ADD_CATEGORY,payload: result.data});
        
    } catch (error) {
        console.log(error)
        dispatch({type:FAIL_CATEGORY, payload: error.response.data});
       // const {errors,msg}=error.response.data;
        //if(   Array.isArray(errors)) {
          //  errors.forEach((err)=>alert(err.msg));}
    }
};





export const updateCategory=(_id)=> async (dispatch)=>{
    dispatch({type:LOAD_CATEGORYFAIL_CATEGORY});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.put("/api/categories",options);
       //user
        dispatch({type:UPDATE_CATEGORY,payload :result.data.category})
    } catch (error) {
        dispatch({type:FAIL_CATEGORY, payload: error.response.data});

    }
}


export const deleteCategory=(_id)=> async (dispatch)=>{
    dispatch({type:LOAD_CATEGORYFAIL_CATEGORY});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.delete("/api/categories",options);
       //user
        dispatch({type:DELETE_CATEGORY,payload :result.data.category})
    } catch (error) {
        dispatch({ type:FAIL_CATEGORY,payload: error.response.data});

    }
}

export const getCategories=()=> async (dispatch)=>{
    dispatch({type:LOAD_CATEGORYFAIL_CATEGORY});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.get("/categories",options);
       //user
        dispatch({type:GET_CATEGORIES,payload :result.data.categories})
    } catch (error) {
        dispatch({type:FAIL_CATEGORY,payload: error.response.data});

    }
}

export const getCategory=(_id)=> async (dispatch)=>{
    dispatch({type:LOAD_CATEGORY});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.get("/categories?_id=${id}",options);
       //user
        dispatch({type:GET_CATEGORY,payload :result.data.category})
    } catch (error) {
        dispatch({type:FAIL_CATEGORY,payload: error.response.data});

    }
}