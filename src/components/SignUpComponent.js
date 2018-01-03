import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import * as user from '../actions/user';

class SignUpComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            car_no: "",
            house_no: ""
        };
    }
    render(){
        return (
            <Paper zDepth={2} style={{margin: "100px auto", width: "960px", padding: "30px" }}>
                <div style={{textAlign: "center"}} >
                    <h1>Sign Up</h1>
                    <TextField hintText="Username" onChange={e => this.setState({ username: e.target.value })}/><br />
                    <TextField hintText="Password" type="password" onChange={e => this.setState({ password: e.target.value })}/><br />
                    <TextField hintText="Car no."  onChange={e => this.setState({ car_no: e.target.value })}/><br />
                    <TextField hintText="House no." onChange={e => this.setState({ house_no: e.target.value })}/><br />
                    <RaisedButton label="Sign Up" onClick={() => this.props.sign_up({
                        name: this.state.username,
                        password: this.state.password,
                        car_no: this.state.car_no,
                        house_no: this.state.house_no
                    }) }/><br />
                </div>
            </Paper>
        );
    }
}

export default connect(state => ({

}), dispatch => ({
    sign_up: data => user.sign_up(dispatch, data)
}))(SignUpComponent);