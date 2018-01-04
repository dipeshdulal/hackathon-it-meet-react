import React, {Component} from 'react';
import DashboardComponent from './DashboardComponent';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';
import Dashboard from './Dashboard';
import AddWasteFood from './AddWasteFood';
import ViewWasteFood from './ViewWasteFood';

class MainComponent extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/login" component={(props) => (<DashboardComponent {...props} children={<LoginComponent/>} />) } />
                    <Route path="/signup" component={(props) => (<DashboardComponent {...props} children={<SignUpComponent/>} />) } />
                    <Route path="/dashboard" component={(props) => (<DashboardComponent {...props} children={<Dashboard/>} />) } />
                    <Route path="/add_waste_food" component={(props) => (<DashboardComponent {...props} children={<AddWasteFood/>} />) } />
                    <Route path="/view_waste_food" component={(props) => (<DashboardComponent {...props} children={<ViewWasteFood/>} />) } />
                </div>
            </Router>
        );
    }
}

export default MainComponent;