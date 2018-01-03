import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';

class DrawerComponent extends Component{
    constructor(props){
        super(props);
        this.state = {redirect: false, to: "/"}
    }
    route_to = to => this.setState({redirect: true, to});
    render(){
        let login_menu = [];
        if(this.props.user.logged_in){
            login_menu = [
                <MenuItem key={1} onClick={() => this.route_to("/dashboard")}> Dashboard </MenuItem>,
                <MenuItem key={2} onClick={() => this.route_to("/add_waste_food")}> Add Waste Food </MenuItem>,
            ];
        }
        return (
            <Drawer open={this.props.open} onRequestChange={this.props.onRequestChange} docked={false}>
                { (this.state.redirect) ? <Redirect to={this.state.to} /> : null}
                { (this.props.user.logged_in) ? null : (<MenuItem onClick={() => this.route_to("/login")}> Login </MenuItem>)}
                { (this.props.user.logged_in) ? null : (<MenuItem onClick={() => this.route_to("/signup")}> Sign Up </MenuItem>) }
                {login_menu}    
            </Drawer>
        );
    }
}

export default connect(state => ({
    user: state.user
}), dispatch => ({

})
)(DrawerComponent);