import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import DrawerComponent from './DrawerComponent';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';

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
                <Dialog
                    title={this.props.dialog.title}
                    actions={this.props.dialog.actions}
                    modal={true}
                    open={this.props.dialog.open}
                    onRequestClose={this.props.close_dialog} >
                    {this.props.dialog.children}    
                </Dialog>
            </div>
        );
    }
}

export default connect(store=>({
    snackbar: store.snackbar,
    dialog: store.dialog
}), dispatch=>({
    close_snackbar: () => dispatch({ type: "SNACK_CLOSE" }),
    close_dialog: () => dispatch({ type: "DIALOG_CLOSE"})
}))(DashboardComponent);