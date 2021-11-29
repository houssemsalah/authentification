import { FAIL_PRODUCT, LOAD_PRODUCT,GET_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, ADD_PRODUCT
} from "../const/product";


const initialState={
    product:null,
    products:[],
    loadProduct:false,
    errors:null,
   

}

export const productReducer=(state=initialState,{type,payload})=>{
    switch (type) {
     
       case LOAD_PRODUCT:
           return {...state,loadProduct:true};
       case FAIL_PRODUCT:
            return {...state,loadProduct:false,errors:payload};
      
       case GET_PRODUCT:
           return{...state,loadProduct:false,product:payload};
       case GET_PRODUCTS:
           return{...state,loadProduct:false,products:payload};
       case UPDATE_PRODUCT:
           return{...state,loadProduct:false,product:payload};
       case DELETE_PRODUCT:
           return{...state,loadProduct:false,product:payload};   
        case ADD_PRODUCT:
           return{...state,loadProduct:false,product:payload}; 
    
    

           

      
       default :
    return state;
    }
};