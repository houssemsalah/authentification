import axios from "axios";
import { FAIL_USER, LOAD_USER, LOGIN_USER, REGISTER_USER ,CURRENT_USER,LOGOUT_USER} from "../const/user";




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
        history.push("/dashboard")
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

    }
}


export const logout=(history)=>dispatch=>{
    try {
        dispatch({type:LOGOUT_USER})
        history.push("/signin")
    } catch (error) {
        console.log(error)
    }
   
    
};