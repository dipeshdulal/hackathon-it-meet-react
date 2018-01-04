import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as user from '../actions/user'; 
import {Redirect} from 'react-router';

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {username: "dipesh", password: "password"};
    }

    render(){
        return (
            <Paper zDepth={2} style={{margin: "100px auto", width: "960px", padding: "30px" }}>
                {(this.props.user.logged_in === true) ? <Redirect to="/dashboard" /> : null}
                <div style={{textAlign: "center"}} >
                    <h1>Login</h1>
                    <TextField hintText="Username" defaultValue="dipesh" onChange={e => this.setState({username: e.target.value}) }/><br />
                    <TextField hintText="Password" type="password" defaultValue="password" onChange={e => this.setState({password: e.target.value})}/><br />
                    <RaisedButton label="Login" onClick={() => this.props.login({ name: this.state.username, password: this.state.password })}/><br />
                </div>
            </Paper>
        );
    }
}

export default connect(state => ({ user: state.user }), dispatch => ({
    login: (data) => user.login(dispatch, data)
}))(LoginComponent);