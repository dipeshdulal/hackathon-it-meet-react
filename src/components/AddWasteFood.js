import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as food from '../actions/food';
import {Redirect} from 'react-router';

class AddWasteFood extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            expiry: "",
            qty: 0
        }
    }
    render(){
        return (
            <Paper zDepth={2} style={{margin: "30px auto", width: "960px", padding: "20px"}}>
                {(!this.props.user.logged_in) ? <Redirect to="/login" /> : null}
                <h1>Add Waste Food</h1> <br />
                <TextField fullWidth={true} hintText="Food Name" onChange={e => this.setState({ name: e.target.value })}/><br /><br />
                <TextField fullWidth={true} hintText="Expiry" onChange={e => this.setState({ expiry: e.target.value })}/><br /><br />
                <TextField fullWidth={true} hintText="Quantity" onChange={e => this.setState({ qty: e.target.value })}/><br /><br />
                <RaisedButton label="Add Waste Food" onClick={() => this.props.add_waste_food(this.props.user.data.data.id, {
                    name: this.state.name,
                    expiry: this.state.expiry,
                    quantity: this.state.qty
                }) }/>
            </Paper>
        );
    }
}

export default connect(state => ({
    user: state.user
}), dispatch => ({
    add_waste_food: (user_id, data) => food.add_waste(dispatch, user_id, data)
})
)(AddWasteFood);