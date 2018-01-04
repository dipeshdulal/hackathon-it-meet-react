import { combineReducers } from "redux";
import userReducer from './userReducer';
import snackBarReducer from './snackBarReducer';
import chartReducer from './chartReducer';

export default combineReducers({
    user: userReducer,
    snackbar: snackBarReducer,
    chart: chartReducer
});