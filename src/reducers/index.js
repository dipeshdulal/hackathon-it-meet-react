import { combineReducers } from "redux";
import userReducer from './userReducer';
import snackBarReducer from './snackBarReducer';

export default combineReducers({
    user: userReducer,
    snackbar: snackBarReducer
});