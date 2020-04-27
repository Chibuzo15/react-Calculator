import React, { Component } from 'react';
import OperatorBuilder from '../operatorBuilder/operatorBuilder';
import NumberDisplay from '../numberDisplay/numberDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './calcBuilder.module.css'

class calcBuilder extends Component {
    state={
        numberValue: '',
        typedVal: '',
        answer: null,
        calculatedVal: '',
        currentOperator: ''
    }

    numValueHandler = (event) => {

    }

    operatorHandler = (operator) => {
        switch(operator){
            case "clear":
                this.setState({numberValue: ''});
                break;
            case "back":
                let numValue = this.state.numberValue;
                numValue = numValue.slice(0,-1)
                this.setState({numberValue: numValue})
                break;
            case "percent":
                this.setState({typedVal: '%'}, () => 
                    this.setState((prevState) => ({ 
                        numberValue: prevState.numberValue + this.state.typedVal
                    }))
                );
                break;
            case "divide":
                this.setState({typedVal: '/'}, () => 
                    this.setState((prevState) => ({ 
                        numberValue: prevState.numberValue + this.state.typedVal
                    }))
                );
                this.calculatingHandler('/')
                break;
            case "multiply":
                this.setState({typedVal: 'x'}, () => 
                this.setState((prevState) => ({ 
                    numberValue: prevState.numberValue + this.state.typedVal
                }))
                );
                this.calculatingHandler('*')
                break;
            case "minus":
                this.setState({typedVal: '-'}, () => 
                    this.setState((prevState) => ({ 
                        numberValue: prevState.numberValue + this.state.typedVal
                    }))
                );
                this.calculatingHandler('-')
                break;
            case "add":
                this.setState({typedVal: '+'}, () => 
                    this.setState((prevState) => ({ 
                        numberValue: prevState.numberValue + this.state.typedVal
                    }))
                );
                this.calculatingHandler('+')
                break;
            case "equals":
                this.setState({answer: this.state.calculatedVal})
                break;
        }
    }

    parse = (str) => {
        return Function(`'use strict'; return (${str})`)()
    }

    calculatingHandler = (operator) => {
        //initialize answer with first input
        if(!this.state.answer){
            let firstNumVal = this.state.numberValue;
            firstNumVal = firstNumVal.replace(/\D/g,'')
            this.setState({ answer: firstNumVal})
        }

        if(operator){
            this.setState({
                currentOperator: operator
            })
        }else{
            let numberValue = this.state.numberValue
            numberValue = numberValue.replace('x','*')
            //parse the string to Math Eval
            let ans = this.parse(numberValue)
            this.setState({answer: ans})
        }
        
    }

    digitClickedHandler = (event, num) => {
        console.log(" Digit clicked", num);
        this.setState({typedVal: num}, () => {
            this.setState((prevState) => ({ 
                numberValue: prevState.numberValue + this.state.typedVal
            }), () => {
                if(num !== '.'){
                    this.calculatingHandler()
                }
            })
        });
    }

    render(){
        return(
            <div className={classes['calcBuilder']}>
                <NumberDisplay
                numberVal = {this.state.numberValue}
                valuehandle = {this.numValueHandler}
                answer = {this.state.answer}
                />
                <OperatorBuilder
                operatorClicked = {(operator) => this.operatorHandler(operator)}
                digitClicked = {(event, number) => this.digitClickedHandler(event, number)}
                />
            </div>
        )
    }
}

export default calcBuilder;