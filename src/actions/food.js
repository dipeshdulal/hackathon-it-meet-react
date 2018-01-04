import config from '../config';

export const add_waste = (dispatch, user_id, data) => {
    fetch(config.API_HOST_NAME + "/api/wastes/" + user_id, {
        method: "post",
        body: JSON.stringify(data),
        headers: {"Content-Type" : "application/json" }
    }).then(a => {
        if(a.ok){
            dispatch({ type: "SNACK_OPEN", payload: { message: "Waste Food added to inventory :)"} });
        }else{
            dispatch({ type: "SNACK_OPEN", payload: { message: "Waste Food could not be added :/"} });
        }
    }).catch(c => dispatch({ type: "SNACK_OPEN", payload: {message: "Waste Food coud not be added :/"} }) );
}

export const view_waste = (dispatch) => {
    fetch(config.API_HOST_NAME + "/api/wastes", {
        method: "get",
    }).then(a => a.json()).then(a => {
        // waste here
        console.log(a);
        dispatch({type: "RECEIVED_ALL_FOOD", payload: a});
    }).catch(e => console.log(e));
}

export const search_food = (dispatch, query) => {
    fetch(config.API_HOST_NAME + "/api/wastes?" + query, { method: "get" })
        .then(a => a.json()).then(a => {
            dispatch({type: "RECEIVED_ALL_FOOD", payload: a})
        }).catch(e => console.log(e));
}

export const order_food = (dispatch, data) => {

    fetch(config.API_HOST_NAME + "/api/wastes/order/"+ data.food_id+"/"+data.user_id, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then(a => {
        if(a.ok){
            dispatch({type: "SNACK_OPEN", payload: { message: "Your order has been placed and mail has been sent. "}});
        }else{
            dispatch({type: "SNACK_OPEN", payload: {message: "You order could not be placed."}});
        }
        dispatch({type: "DIALOG_CLOSE"});
        view_waste(dispatch);
    }).catch(e => console.log(e) );

}