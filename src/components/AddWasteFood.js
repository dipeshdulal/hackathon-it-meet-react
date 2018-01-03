import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';

class AddWasteFood extends Component{
    render(){
        return (
            <Paper zDepth={2} style={{margin: "30px auto", width: "960px", padding: "20px"}}>
                <h1>Add Waste Food</h1>

            </Paper>
        );
    }
}

export default connect(state => ({

}), dispatch => ({

})
)(AddWasteFood);