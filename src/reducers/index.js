import { combineReducers } from "redux";
import userReducer from './userReducer';
import snackBarReducer from './snackBarReducer';
import chartReducer from './chartReducer';
import foodReducer from './foodReducer';
import dialogReducer from './dialogReducer';

export default combineReducers({
    user: userReducer,
    snackbar: snackBarReducer,
    chart: chartReducer,
    food: foodReducer,
    dialog: dialogReducer
});