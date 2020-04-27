import React, {Component} from 'react';
import Button from '../../components/UI/button';
import classes from './digitBuilder.module.css';

class digitBuilder extends Component{

    render(){
        let i = 0;
        let numbers = [];
        for(i; i < 10; i++ ){
            numbers.push(i);
        }
        numbers.push('.')
        const numbersButtons = numbers.map(number => {
            return <Button 
            clickedHandler = {(event) => this.props.digitClicked(event, number)}
            type="num" 
            key={number}>{number}</Button>
        })
        return(
            <div className={classes['digitWrap']}>
                {numbersButtons}
            </div>
        )
    }
}

export default digitBuilder;