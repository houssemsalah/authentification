  
import { combineReducers } from "redux";
import {userReducer } from "./user"
import {productReducer } from "./product"
import {orderReducer } from "./order"
import {categoryReducer } from "./category"
import {restaurantReducer } from "./restaurant"

export const rootReducer=combineReducers({userReducer,productReducer,orderReducer,categoryReducer,restaurantReducer});