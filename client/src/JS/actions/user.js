import axios from "axios";
import { FAIL_USER, LOAD_USER, LOGIN_USER, REGISTER_USER ,CURRENT_USER,LOGOUT_USER, UPDATE_USER, DELETE_USER, GET_USERS, ADD_TO_CART, GET_USER} from "../const/user";




export const registerUser=(user,history)=> async (dispatch) =>{
    dispatch({type:LOAD_USER});
    try {

       const result= await axios.post("/user/register",user);
        //{user,msg,roken}
        dispatch({type: REGISTER_USER,payload: result.data});
        history.push("/dashboard")
    } catch (error) {
        console.log(error)
        //dispatch({type: FAIL_USER, payload: error.response.data});
       // const {errors,msg}=error.response.data;
        //if(   Array.isArray(errors)) {
          //  errors.forEach((err)=>alert(err.msg));}
    }
};

export const loginUser=(user,history)=> async (dispatch) =>{
    dispatch({type:LOAD_USER});
    try {

       const result= await axios.post("/user/login",user);//{user,msg,roken}
        dispatch({type:LOGIN_USER,payload:result.data});
        history.push("/")
    } catch (error) {
       
    console.log(error)
   

};}


export const current=()=> async (dispatch)=>{
    dispatch({type : LOAD_USER});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.get("/user/current",options);
       //user
        dispatch({type:CURRENT_USER,payload :result.data.user})
    } catch (error) {
        dispatch({type:FAIL_USER, payload: error.response.data});
        console.log(error)

    }
}



export const logout=(history)=>dispatch=>{
    try {
        dispatch({type:LOGOUT_USER})
        history.push("/")
    } catch (error) {
        console.log(error)
    }
   
    
};

export const getUser=(_id)=> async (dispatch)=>{
    dispatch({type:LOAD_USER});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.findById("/user/users/${_id}",options);
       //user
        dispatch({type:GET_USER,payload :result.data.user})
    } catch (error) {
        dispatch({type:FAIL_USER, payload: error.response.data});

    }
}

export const updateUser=(_id)=> async (dispatch)=>{
    dispatch({type : LOAD_USER});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.put("/user/users/_id=${id}",options);
       //user
        dispatch({type:UPDATE_USER,payload :result.data.user})
    } catch (error) {
        dispatch({type:FAIL_USER, payload: error.response.data});

    }
}


export const deleteUser=(_id)=> async (dispatch)=>{
    dispatch({type : LOAD_USER});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.delete("/user/users/_id=${id}",options);
       //user
        dispatch({type:DELETE_USER,payload :result.data.user})
    } catch (error) {
        dispatch({type:FAIL_USER, payload: error.response.data});

    }
}

export const getUsers=()=> async (dispatch)=>{
    dispatch({type:LOAD_USER});
    
    
    try {
       const result = await axios.get("/user/users");
       console.log(result)
       //PRODUCT
        dispatch({type:GET_USERS,payload :result.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload: error});

    }
}



export const addToCart=(_id)=> async (dispatch)=>{
    dispatch({type:LOAD_USER});
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
       let result = await axios.get("${CURRENT_USER}/addcart/${id}",options);
       //user
        dispatch({type:ADD_TO_CART,payload :result.data.user.cart})
    } catch (error) {
        dispatch({type:FAIL_USER, payload: error.response.data});

    }
}