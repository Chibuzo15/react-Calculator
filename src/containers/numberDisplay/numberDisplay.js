import React, { Component } from 'react';
import classes from './numberDisplay.module.css'

class numberDisplay extends Component{
    render(){
        return(
            <div className={classes['numberDisplayWrap']}>
                <div
                className={classes['numberInput']} 
                 > 
                {this.props.numberVal.toString()}
                </div>
                <div className={classes['answer']}>
                    ={this.props.answer}
                </div>
            </div>
        )
    }
}

export default numberDisplay;