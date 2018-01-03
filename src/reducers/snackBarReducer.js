let snackbarReducer = (state = {open: false, message: ""}, action) => {
    if(action.type === "SNACK_OPEN"){
        return {open: true, ...action.payload}
    }
    if(action.type === "SNACK_CLOSE"){
        return {open: false}
    }
    return {...state}
}

export default snackbarReducer;