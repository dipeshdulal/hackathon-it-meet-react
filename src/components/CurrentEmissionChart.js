import React, {Component} from 'react';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

class current_emission_chart extends Component{
    render(){
        let style = {
            background: "white",
            color: "#333"
        }
        if(this.props.background){
            style = {
                background: this.props.background,
                color: "white"
            }
        }
        return (
            <Paper zDepth={2} style={{width: "250px", padding: "40px 0", display: "inline-block", margin: "20px", textAlign: "center", color: "black" , ...style}}>
                <div style={{ textAlign: "center" }}>
                    <CircularProgress
                        mode="determinate"
                        value={this.props.progress_value}
                        size={100}
                        thickness={7} />    
                    <p style={{padding: "20px"}}>{this.props.text}</p>
                </div>
            </Paper>
        );
    }
}

export default connect(state => ({

}), dispatch => ({

})
)(current_emission_chart);