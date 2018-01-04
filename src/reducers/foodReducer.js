let foodReducer = (state = {data: [], received: false}, action) => {
    if(action.type === "RECEIVED_ALL_FOOD"){
        return { ...action.payload, received: true };
    }
    return {...state};
}

export default foodReducer;