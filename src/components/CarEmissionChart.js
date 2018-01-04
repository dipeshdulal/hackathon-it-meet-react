import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class CarEmissionChart extends Component{
    
    render(){
        // console.log(this.props.emission.emission);
        return (
            <BarChart width={900} height={300} data={(this.props.emission) ? this.props.emission.emission : []}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="time"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="smoke" fill="#8884d8" />
            </BarChart>
        );
    }
}

export default connect(state => ({
    emission: state.chart
}), dispatch => ({
    
}))(CarEmissionChart);