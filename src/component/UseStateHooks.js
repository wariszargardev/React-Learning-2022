import React, {useState} from 'react';

const UseStateHooks = () => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () =>{
        // if we call multiple time then only increment for one time
        setCounter(counter + 1) // bad practice
        // if we call multiple time then increment for multiple time
        setCounter((prevState)=> prevState + 1) // good practice
    }

    const decrementCounter = () =>{
        setCounter(counter - 1)  // bad practice
        setCounter((prevState)=> prevState - 1)  // good practice
    }

    return (
        <div style={{fontSize: '50px'}}>
            <button onClick={decrementCounter} style={{fontSize: '50px'}}>-</button>
            <span>{counter}</span>
            <button onClick={incrementCounter} style={{fontSize: '50px'}}>+</button>
        </div>
    );
};

export default UseStateHooks;