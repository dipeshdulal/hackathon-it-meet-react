let dialogReducer = (state = {
    open: false,
    title: "",
    actions: [],
    children: null
}, action) => {
    if(action.type === "DIALOG_OPEN"){
        return {...state, open: true, title: action.payload.title, actions: action.payload.actions, children: action.payload.children }
    }
    if(action.type === "DIALOG_CLOSE"){
        return {...state, open: false }
    }
    return {...state};
}
export default dialogReducer;