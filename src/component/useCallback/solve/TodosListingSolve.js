import React, {memo} from 'react';

const TodosListingSolve = (props) => {
    console.log("Child render")
    const {todos, addTodo} = props
    return (
        <div>
            <h1>Todo listing</h1>
            {todos.map((item, index)=>(
                <h1 key={index}>{item}</h1>
            ))}
            <button onClick={addTodo}>Add todo</button>
        </div>
    );
};

export default memo(TodosListingSolve);