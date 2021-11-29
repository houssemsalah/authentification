import { FAIL_ORDER, LOAD_ORDER,GET_ORDER, UPDATE_ORDER, DELETE_ORDER, GET_ORDERS, ADD_ORDER
} from "../const/order";


const initialState={
    orders:[],
    order:null,
    loadOrder:false,
    errors:null,
    

}

export const orderReducer=(state=initialState,{type,payload})=>{
    switch (type) {
     
       case LOAD_ORDER:
           return {...state,loadOrder:true};
       case FAIL_ORDER:
            return {...state,loadOrder:false,errors:payload};
      
       case GET_ORDER:
           return{...state,loadOrder:false,order:payload};
       case GET_ORDERS:
           return{...state,loadOrder:false,orders:payload};
       case UPDATE_ORDER:
           return{...state,loadOrder:false,order:payload};
       case DELETE_ORDER:
           return{...state,loadOrder:false,order:payload};   
        case ADD_ORDER:
           return{...state,loadOrder:false,order:payload}; 
    
    

           

      
       default :
    return state;
    }
};