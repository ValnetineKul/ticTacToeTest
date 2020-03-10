import React from 'react';
import styles from './Square.module.scss'

const Square = (props) => {
    return (
        <div
            value={props.value}
            onClick={props.onClick}
            className={styles.square}
        >{props.value}</div>
    )
};

export default Square;

