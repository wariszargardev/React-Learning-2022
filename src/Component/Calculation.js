import React from 'react';
import {addTwoNumber, subTwoNumber, multiplyTwoNumber, divideTwoNumber} from "../Library/math";

const Calculation = () => {
    return (
        <div>
            <h1>Math function</h1>
            <p>Sum of two number (3,5): {addTwoNumber(3,5)}</p>
            <p>Sub of two number (3,5): {subTwoNumber(3,5)}</p>
            <p>Multiple of two number (3,5): {multiplyTwoNumber(3,5)}</p>
            <p>Divide of two number (3,5): {divideTwoNumber(3,5)}</p>
        </div>
    );
};

export default Calculation;