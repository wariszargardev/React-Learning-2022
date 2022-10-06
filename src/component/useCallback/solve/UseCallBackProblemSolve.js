import React, {useCallback, useState} from 'react';
import TodosListingSolve from "./TodosListingSolve";

const UseCallBackProblemSolve = () => {
    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(0)

    const decrementCounter = () =>{
        setCounter(prevState => prevState - 1)
    }

    const incrementCounter = () =>{
        setCounter(prevState => prevState + 1)
    }

    const addTodo = useCallback(() =>{
        setTodos(prevState => [
            ...prevState,
            "New todos"
        ])
    }, [todos])

    return (
        <div>
            <button onClick={decrementCounter}>Decrement</button>
            <h1>Counter {counter} </h1>
            <button onClick={incrementCounter}>Increment</button>

            <TodosListingSolve todos={todos} addTodo={addTodo}/>
        </div>
    );
};

export default UseCallBackProblemSolve;