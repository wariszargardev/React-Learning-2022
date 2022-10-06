import React, {useState} from 'react';
import TodosListing from "./TodosListing";

const UseCallBackProblem = () => {
    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(0)

    const decrementCounter = () =>{
        setCounter(prevState => prevState - 1)
    }

    const incrementCounter = () =>{
        setCounter(prevState => prevState + 1)
    }

    const addTodo = () =>{
        setTodos(prevState => [
            ...prevState,
            "New todos"
        ])
    }

    return (
        <div>
            <button onClick={decrementCounter}>Decrement </button>
            <h1>Counter {counter} </h1>
            <button onClick={incrementCounter}>Increment </button>

            <TodosListing  todos={todos} addTodo={addTodo}/>
        </div>
    );
};

export default UseCallBackProblem;