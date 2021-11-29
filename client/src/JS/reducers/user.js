import { FAIL_USER, LOAD_USER, LOGIN_USER, REGISTER_USER ,CURRENT_USER,LOGOUT_USER,GET_USER, UPDATE_USER, DELETE_USER, GET_USERS, ADD_TO_CART
 } from "../const/user";


 const initialState={
     user:null,
     users:[], 
     loadUser:false,
     errors:null,
     isAuth:false,

 }

 export const userReducer=(state=initialState,{type,payload})=>{
     switch (type) {
        case REGISTER_USER:
            localStorage.setItem("token",payload.token);
            return {...state,loadUser:false,user:payload.user,isAuth : true}
        case LOGIN_USER:
            localStorage.setItem("token",payload.token);
            return {...state,loadUser:false,user:payload.user,isAuth : true}
        case LOAD_USER:
            return {...state,loadUser:true};
        case CURRENT_USER:
            return {...state,loadUser:false, isAuth:true,user:payload};
        case FAIL_USER:
             return {...state,loadUser:false,errors:payload};
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return {user:null,loadUser:false,errors:null,isAuth:false};
        case GET_USER:
            return{...state,loadUser:false,user:payload};
        case GET_USERS:
            return{...state,loadUser:false,users:payload};
        case UPDATE_USER:
            return{...state,loadUser:false,user:payload};
        case DELETE_USER:
            return{...state,loadUser:false,user:payload};   
        case ADD_TO_CART:
            return{...state,loadUser:false,cart:payload};           
     

            

       
        default :
     return state;
     }
 };