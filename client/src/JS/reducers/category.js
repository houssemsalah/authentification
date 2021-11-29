import { FAIL_CATEGORY, LOAD_CATEGORY,GET_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, ADD_CATEGORY
} from "../const/category";


const initialState={
    categories:[],
    category:null,
    loadCategory:false,
    errors:null,
    isAuth:false,

}

export const categoryReducer=(state=initialState,{type,payload})=>{
    switch (type) {
     
       case LOAD_CATEGORY:
           return {...state,loadCategory:true};
       case FAIL_CATEGORY:
            return {...state,loadCategory:false,errors:payload};
      
       case GET_CATEGORY:
           return{...state,loadCategory:false,category:payload};
       case GET_CATEGORIES:
           return{...state,loadCategory:false,categories:payload};
       case UPDATE_CATEGORY:
           return{...state,loadCategory:false,category:payload};
       case DELETE_CATEGORY:
           return{...state,loadCategory:false,category:payload};   
        case ADD_CATEGORY:
           return{...state,loadCategory:false,category:payload}; 
    
    

           

      
       default :
    return state;
    }
};