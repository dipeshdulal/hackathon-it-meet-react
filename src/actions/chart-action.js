import config from '../config';
export const get_car_emission = (dispatch, user_id) => {
    fetch(config.API_HOST_NAME + "/api/cars/" + user_id + "/1", {
        method: "get"
    }).then(a => a.json()).then(a => {
        dispatch({type: "EMISSION_RECEIVED", payload: {emission: a.data}});
    }).catch(e => console.log(e));
}

// export const get_dashboard_items