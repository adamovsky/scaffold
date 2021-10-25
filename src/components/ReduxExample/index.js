import React from 'react';

import { decrement, increment } from './slice';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';

const ReduxExample = () => {
    const reduxExampleValue = useSelector((state) => state.reduxExample.value);
    const dispatch = useDispatch();

    const handleDecrement = () => dispatch(decrement());
    const handleIncrement = () => dispatch(increment());

    return (
        <div className={ styles.reduxExample }>
            <h2>
                Redux Example: { reduxExampleValue }
            </h2>

            <button
                aria-label="Increment value"
                onClick={ handleIncrement }
            >
                Increment
            </button>

            <button
                aria-label="Decrement value"
                onClick={ handleDecrement }
            >
                Decrement
            </button>
        </div>
    );
};

export default ReduxExample;