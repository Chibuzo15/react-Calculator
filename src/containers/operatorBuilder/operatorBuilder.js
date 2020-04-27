import React, {Component} from 'react';
import Button from '../../components/UI/button';
import classes from './operatorBuilder.module.css';
import Digitbuilder from '../digitBuilder/digitBuilder';

class OperatorBuilder extends Component{
    state = {
        operators : [
            "clear", "back", "percent", "divide", "multiply", "minus", "add", "equals" 
        ],
        operatorobj : [
            {
                name: "clear",
                symbol: "clear"
            }
        ]
    }

    render(){
        const operatorArr1 = this.state.operators.map((operator) => {
           return <Button 
           clickedHandler = {() => this.props.operatorClicked(operator)}
           type="operator" 
           key={operator}>{operator}</Button>
        }).slice(0,4)
        const operatorArr2 = this.state.operators.map((operator) => {
            return <Button 
            clickedHandler = {() => this.props.operatorClicked(operator)}
            type="operator" 
            key={operator}>{operator}</Button>
         }).slice(4,8)
        return(
            <div className={classes['operatorBodyWrap']}>
                <div className={classes['operatorTopWrap']}>
                    {operatorArr1}
                </div>
                <div className={classes['operatorBottomWrap']}>
                    <div className={classes['operatorBottomWrapInner']}>
                        <Digitbuilder
                        digitClicked = {(event, number) => this.props.digitClicked(event, number)}
                        />
                        <div className={classes['sidebuttons']}>{operatorArr2}</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default OperatorBuilder