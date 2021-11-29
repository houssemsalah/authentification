import axios from "axios";
import { ADD_RESTAURANT, FAIL_RESTAURANT, GET_RESTAURANT,LOAD_RESTAURANT,UPDATE_RESTAURANT
    } from "../const/restaurant";









export const updateRestaurant=(_id)=> async (dispatch)=>{
    dispatch({type:LOAD_RESTAURANT});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.put("/api/restaurant",options);
       //RESTAURANT
        dispatch({type:UPDATE_RESTAURANT,payload :result.data.restaurant})
    } catch (error) {
        dispatch({type:FAIL_RESTAURANT, payload: error.response.data});

    }
}





export const getRestaurant=()=> async (dispatch)=>{
    dispatch({type:LOAD_RESTAURANT});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    
    try {
       let result = await axios.get("/api/restaurant",options);
       console.log(result)
       //RESTAURANT
        dispatch({type:GET_RESTAURANT,payload :result.data.restaurant})
    } catch (error) {
        dispatch({type:FAIL_RESTAURANT,payload: error.response.data});

    }
}

export const addRestaurant=(restaurant)=> async (dispatch) =>{
    dispatch({type:LOAD_RESTAURANT});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {

       const result= await axios.post("/api/restaurant",restaurant,options);
        //{PRODUCT,msg,roken}
        dispatch({type: ADD_RESTAURANT,payload: result.data});
        
    } catch (error) {
        console.log(error)
        dispatch({type: FAIL_RESTAURANT, payload: error.response.data});
       // const {errors,msg}=error.response.data;
        //if(   Array.isArray(errors)) {
          //  errors.forEach((err)=>alert(err.msg));}
    }
};