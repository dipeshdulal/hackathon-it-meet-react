let chartReducer = (state = {received: false}, action) => {
    if(action.type === "EMISSION_RECEIVED"){
        return {...state, ...action.payload, received: true}
    }
    return {...state}
}
export default chartReducer; 