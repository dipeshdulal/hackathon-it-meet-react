import config from '../config';
export const add_waste = (dispatch, user_id, data) => {
    fetch(config.API_HOST_NAME + "/api/wastes/" + user_id, {
        method: "post",
        body: JSON.stringify(data),
        header: {"Content-Type" : "application/json" }
    }).then(a => {
        if(a.ok){
            dispatch({ type: "SNACK_OPEN", payload: { message: "Waste Food added to inventory :)"} });
        }else{
            dispatch({ type: "SNACK_OPEN", payload: { message: "Waste Food could not be added :/"} });
        }

    }).catch(c => dispatch({ type: "SNACK_OPEN", payload: {message: "Waste Food coud not be added :/"} }) );
}