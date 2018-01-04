import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {Redirect} from 'react-router';
import CarEmissionChart from './CarEmissionChart';
import CurrentEmissionChart from './CurrentEmissionChart';
import * as charts from '../actions/chart-action';
import * as user from '../actions/user';

let calculate_points = (data, emission) => {
    let points = 0;
    points += data.put / 2;
    points += data.sold;
    points += (emission < 20) ? 10 : 5;
    points += (emission > 50) ? -10 : 0;
    return points;
}

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentWillReceiveProps(p_props){
        if(p_props.user.logged_in && !this.props.emission.received){
            p_props.get_car_emission(p_props.user.data.data.id);
            p_props.get_dashboard_data(p_props.user.data.data.id);
        }
    }
    render(){
        console.log("db", this.props.dashboard.dashboard);
        return (
            <Paper zDepth={2} style={{margin: "30px auto", width: "960px", padding: "30px" }}>
                {(!this.props.user.logged_in) ? <Redirect to="/login" /> : null}
                <div style={{textAlign: "center"}} >
                    <h1>Dashboard</h1>
                    <br/>
                    <h3>Welcome {(!this.props.user.data) ? "guest": this.props.user.data.data.name} </h3>
                    <Paper zDepth={2} style={{ background: "#455A64", color: "white", padding: "20px", margin: "20px"}} >
                        Your reward point is: { calculate_points(this.props.dashboard.dashboard.data, this.props.dashboard.dashboard.data.smoke_avg) } 
                    </Paper>
                    <CurrentEmissionChart background="#CDDC39" progress_value={this.props.dashboard.dashboard.data.smoke_avg} text={ "Your average weekly emission is " + Math.round(this.props.dashboard.dashboard.data.smoke_avg) }/>
                    <Paper zDepth={2} style={{ padding: "20px", textAlign: "left", marginBottom: "20px" }}>
                        <h3> Food Information </h3>
                        <p>You have sold: { this.props.dashboard.dashboard.data.sold} food</p>
                        <p>You have bought: { this.props.dashboard.dashboard.data.buy} food</p>
                        <p>You have put: { this.props.dashboard.dashboard.data.put} food</p>
                    </Paper>
                    {/* <CurrentEmissionChart progress_value={10} text="Your average weekly emission is 10"/> */}
                    {/* <CurrentEmissionChart background="#FF5722" progress_value={10} text="Your average weekly emission is 10"/> */}
                    <Paper zDepth={2} style={{ width: "960", padding: "40px 0", display: "inline-block" }}>
                        <h3 style={{ padding: "20px 0"}}> Car Emission Chart </h3>
                        <CarEmissionChart />
                    </Paper>
                </div>
            </Paper>
        );
    }
}

export default connect(state => ({
    user: state.user,
    emission: state.chart,
    dashboard: state.dashboard
}), dispatch => ({
    get_car_emission: (user_id) => charts.get_car_emission(dispatch, user_id),
    get_dashboard_data: (user_id) => user.get_dashboard_data(dispatch, user_id)
})
)(Dashboard)