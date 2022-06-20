import { combineReducers } from "redux";
import userReducer from "./userReducer";
import mypageReducer from "./myPageReducer"

/* Reducers */
const rootReducer = combineReducers( { userReducer, mypageReducer } );
export default rootReducer;