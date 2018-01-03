import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import DrawerComponent from './DrawerComponent';
import Snackbar from 'material-ui/Snackbar';

class DashboardComponent extends Component {
    constructor(props){
        super(props);
        this.state = { open: false}        
    }
    handle_open = () => this.setState({open: true})
    handle_close = () => this.setState({open: false})
    render(){
        return (
            <div>
                <AppBar title="YouWasted" onLeftIconButtonClick={this.handle_open} />
                <DrawerComponent open={this.state.open} onRequestChange={this.handle_close}/>
                {this.props.children}
                <Snackbar 
                    autoHideDuration={3000}
                    open={this.props.snackbar.open}
                    message={(this.props.snackbar.message)? this.props.snackbar.message : ""} 
                    onRequestClose={this.props.close_snackbar}/>
            </div>
        );
    }
}

export default connect(store=>({
    snackbar: store.snackbar
}), dispatch=>({
    close_snackbar: () => dispatch({type: "SNACK_CLOSE" })
}))(DashboardComponent);