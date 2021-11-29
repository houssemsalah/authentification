import { FAIL_RESTAURANT, LOAD_RESTAURANT,GET_RESTAURANT, UPDATE_RESTAURANT, ADD_RESTAURANT
} from "../const/restaurant";


const initialState={
    restaurant:null,
    loadRestaurant:false,
    errors:null,
  

}

export const restaurantReducer=(state=initialState,{type,payload})=>{
    switch (type) {
     
       case LOAD_RESTAURANT:
           return {...state,loadRestaurant:true};
       case FAIL_RESTAURANT:
            return {...state,loadRestaurant:false,errors:payload};
      
       case GET_RESTAURANT:
           return{...state,loadRestaurant:false,restaurant:payload};
   
       case UPDATE_RESTAURANT:
           return{...state,loadRestaurant:false,restaurant:payload};
        case ADD_RESTAURANT:
           return{...state,loadRestaurant:false,restaurant:payload}; 
    
    

           

      
       default :
    return state;
    }
};