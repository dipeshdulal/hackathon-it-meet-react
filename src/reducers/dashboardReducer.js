let dashboardReducer = (store = {
    dashboard: { data: {} }    
}, action) => {
    // data received
    if(action.type === "DASHBOARD_DATA_RECEIVED"){
        return { ...store, ...action.payload }
    }
    return { ...store }
}
export default dashboardReducer;