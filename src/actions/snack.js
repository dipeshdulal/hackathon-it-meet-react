export const snack_open = (dispatch, message) => {
    dispatch({type: "SNACK_OPEN", payload: {message} });
}

export const snack_close = dispatch => {
    dispatch({type: "SNACK_CLOSE"});
}