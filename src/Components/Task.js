import React from 'react';
function Task(props) {
    const todo = props.todo
    const removeTodo = props.removeTodo


    return (
        <li > {todo.text}
            <button className="AddTodos" onClick={removeTodo}>Remove</button></li>
    )
}
export default Task;