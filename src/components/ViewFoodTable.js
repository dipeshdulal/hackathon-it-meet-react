import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import * as food from '../actions/food';

class CustomSlider extends Component{
    constructor(props){
        super(props);
        this.state = {slider: 0}
    }
    render(){
        return (
            <div>
            <p>Quantity: {this.state.slider}</p>
            <Slider
                min={0}
                max={this.props.i.quantity}
                step={1}
                value={this.state.slider}
                onChange={this.handle_Slider} />
            </div>
        );
    }

    handle_Slider = (e,v) => {
        this.setState({slider: v});
        this.props.onChange(v);
    }
} 

class ViewFoodTable extends Component{
    constructor(props){
        super(props);
        this.state = {slider: 0, food_id: -1}
    }
    render_food_table = () => {
        let actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.close_dialog} />,
            <FlatButton
                    label="Order"
                    primary={true}
                    keyboardFocused={true}
                    onClick={ () => this.props.order_food({ food_id : this.state.food_id, user_id: this.props.user.data.data.id, quantity: this.state.slider })} />
        ];
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>S No.</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Quantity</TableHeaderColumn>
                        <TableHeaderColumn>Expiry</TableHeaderColumn>
                        <TableHeaderColumn>Order</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {(this.props.food.data) ? this.props.food.data.map((i,j) => (
                        <TableRow key={j} style={(i.user_id === this.props.user.data.data.id) ? {background: "blue", color: "white"} : null}>
                            <TableRowColumn>{j}</TableRowColumn>
                            <TableRowColumn>{i.name}</TableRowColumn>
                            <TableRowColumn>{i.quantity}</TableRowColumn>
                            <TableRowColumn>{i.expiry}</TableRowColumn>
                            <TableRowColumn>{(i.user_id !== this.props.user.data.data.id) ? <RaisedButton 
                                label="Order"
                                onClick={ () => {
                                    this.setState({food_id: i.id})
                                    this.props.open_dialog(actions, (
                                        <CustomSlider i={i} food_id={i.id} onChange={ a => this.setState({ slider: a})}/>                  
                                    ))}
                                } /> : null }</TableRowColumn>
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
        )
    }
    render(){
        return (
            <div>
                <h3 style={{marginTop: "30px"}}>Available Food List</h3>
                {this.render_food_table()}
            </div>
        )
    }
}

export default connect(state => ({
    user: state.user,
    food: state.food
}), dispatch => ({
    open_dialog: (actions, children) => dispatch({
        type: "DIALOG_OPEN", 
        payload: {actions, children}, 
        title: "Order food",
    }),
    close_dialog: ()=> dispatch({ type: "DIALOG_CLOSE" }),
    order_food: (data) => food.order_food(dispatch, data)
})
)(ViewFoodTable)