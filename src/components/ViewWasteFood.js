import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as food from '../actions/food';
import {Redirect} from 'react-router';
import ViewFoodTable from './ViewFoodTable';

class ViewWasteFood extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            quantity: "",
            expiry: ""
        }
    }
    componentDidMount(){
        if(!this.props.food.received){
            this.props.view_waste_food();
        }
    }

    render(){
        return (
            <Paper zDepth={2} style={{margin: "30px auto", width: "960px", padding: "20px"}}>
                {(!this.props.user.logged_in) ? <Redirect to="/login" /> : null}
                <h1>View Waste Food</h1> <br />
                <TextField fullWidth={true} hintText="Search Food" onChange={e => this.setState({ name: e.target.value })}/><br /><br />
                <TextField hintText="Quantity" onChange={e => this.setState({ quantity: e.target.value })}/>
                <TextField hintText="Expiry" onChange={e => this.setState({ expiry: e.target.value })}/><br /><br />
                <RaisedButton label="Search" primary={true} onClick={() => this.props.search_food("name="+this.state.name+"&quantity="+this.state.quantity+"&expiry="+this.state.expiry) } />
                <ViewFoodTable />
            </Paper>
        );
    }
}

export default connect(state => ({
    user: state.user,
    food: state.food
}), dispatch => ({
    view_waste_food: () => food.view_waste(dispatch),
    search_food: (query) => food.search_food(dispatch, query)
})
)(ViewWasteFood);