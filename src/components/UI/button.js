import React from 'react';
import classes from './button.module.css';

const button = (props) => {

    return (
        <button onClick={props.clickedHandler} className={classes['buttonBox']}>
            <p className={classes['buttonText']}>{props.children}</p>
        </button>
    )
}

export default button;