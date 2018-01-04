import config from '../config';

export const login = (dispatch, data) => {
    dispatch({type: "LOGGING_IN"});
    fetch(config.API_HOST_NAME + "/api/users/login", {
        headers: {"Content-Type" : "application/json"},
        method: "post",
        body: JSON.stringify(data)
    }).then(a => {
        if(a.ok){
            dispatch({type: "SNACK_OPEN", payload: { message: "Sign In Success :) "}});
            return a.json()
        }else{
            dispatch({type: "SNACK_OPEN", payload: { message: "Login Error! :/"}});
            dispatch({type: "LOGIN_ERROR"});
        }
    }).then(a => {
        dispatch({type: "LOGGED_IN", payload: {data: a} })
    }).catch(e => dispatch({type: "SNACK_OPEN", payload: { message: "Login Error! :/"}}));
    dispatch({type: "LOGGING_IN", payload: data});
}

export const sign_up = (dispatch, data) => {
    let fd = new FormData();
    fd.append("name", data.name);
    fd.append("password", data.password);
    fd.append("car-no", data.car_no);
    fd.append("house-no", data.house_no);
    fetch(config.API_HOST_NAME + "/api/users", {
        method: "post",
        body: fd
    }).then(a => {
        if(a.ok){
            dispatch({type: "SNACK_OPEN", payload: {message: "Sign Up Success :)"}});
        }else{
            dispatch({type: "SNACK_OPEN", payload: {message: "Sign Up Error :/"}});
        }
    }).catch(e => {
        dispatch({type: "SNACK_OPEN", payload: { message: "Sign Up Error :/" }});
    });
}

export const get_dashboard_data = (dispatch, user_id) => {
    // fetch and dispatch data received
    fetch(config.API_HOST_NAME + "/api/reward/" + user_id, {
        method: "get"
    }).then(a => a.json()).then(a => {
        dispatch({ type: "DASHBOARD_DATA_RECEIVED", payload: { dashboard: a } })
    }).catch(e => console.log(e));
}