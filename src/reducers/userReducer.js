let userReducer= (state = {}, action) => {
    if(action.type === "LOGGING_IN"){
        return {...state, error: false}
    }
    if(action.type === "LOGGED_IN"){
        return {...state, ...action.payload, error: false, logged_in: true}
    }
    if(action.type === "LOGIN_ERROR"){
        return {...state, error: true}
    }
    return {...state}
}
export default userReducer;