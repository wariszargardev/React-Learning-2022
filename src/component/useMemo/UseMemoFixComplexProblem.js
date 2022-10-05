import React, {useMemo, useState} from 'react';

const calculateSum = (number) =>{
    console.log("Calculate sum function called")
    for (let i = 0 ; i <= 100000000; i++){
        number = number +1;
    }

    return number;
}

const UseMemoFixComplexProblem = () => {
    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(0);
    const calculation = useMemo(()=>{
        return calculateSum(counter);
    },[counter]);

    const decrementValue = () =>{
        setCounter(prevState => (
            prevState - 1
        ))
    }
    const incrementValue = () =>{
        setCounter(prevState => (
            prevState + 1
        ))
    }

    const addTodoItem = () =>{
        setTodos(prevState => [
            ...prevState, "New todo added"
        ])
    }

    return (
        <div>
            <button onClick={decrementValue}>Decrement value by 1</button>
            <h1>Number is {calculation}</h1>
            <button onClick={incrementValue}>Increment value by 1</button>

            <h1>Todo Listing</h1>

            {todos.map((val, index)=>(
                <p key={index}>name: {val}</p>
            ))}
            <button onClick={addTodoItem}>Add todo</button>

        </div>
    );
};

export default UseMemoFixComplexProblem;