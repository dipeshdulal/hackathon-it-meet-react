import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {Redirect} from 'react-router';
import CarEmissionChart from './CarEmissionChart';
import CurrentEmissionChart from './CurrentEmissionChart';
import * as charts from '../actions/chart-action';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentWillReceiveProps(p_props){
        if(p_props.user.logged_in && !this.props.emission.received){
            p_props.get_car_emission(p_props.user.data.data.id);
        }
    }
    render(){
        return (
            <Paper zDepth={2} style={{margin: "30px auto", width: "960px", padding: "30px" }}>
                {(!this.props.user.logged_in) ? <Redirect to="/login" /> : null}
                <div style={{textAlign: "center"}} >
                    <h1>Dashboard</h1>
                    <br/>
                    <h3>Welcome {(!this.props.user.data) ? "guest": this.props.user.data.data.name} </h3>
                    <Paper zDepth={2} style={{ background: "#455A64", color: "white", padding: "20px", margin: "20px"}} > Your reward point is: 10 </Paper>
                    <CurrentEmissionChart background="#CDDC39" progress_value={10} text="Your average weekly emission is 10"/>
                    <CurrentEmissionChart progress_value={10} text="Your average weekly emission is 10"/>
                    <CurrentEmissionChart background="#FF5722" progress_value={10} text="Your average weekly emission is 10"/>
                    <Paper zDepth={2} style={{ width: "800", padding: "40px 0", display: "inline-block", margin: "20px" }}>
                        <h3 style={{ padding: "20px 0" }}> Car Emission Chart </h3>
                        <CarEmissionChart />
                    </Paper>
                </div>
            </Paper>
        );
    }
}

export default connect(state => ({
    user: state.user,
    emission: state.chart
}), dispatch => ({
    get_car_emission: (user_id) => charts.get_car_emission(dispatch, user_id),
    // get_dashboard_data: () => dispatch({type: "GET_DASHBOARD_DATA"})
})
)(Dashboard)