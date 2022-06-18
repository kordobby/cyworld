import { combineReducers } from "redux";
import userReducer from "./userReducer";

/* Reducers */
const rootReducer = combineReducers( { userReducer } );

export default rootReducer;