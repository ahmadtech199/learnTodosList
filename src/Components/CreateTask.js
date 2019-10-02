import React from "react";


export const CreateTask = (props) => {
    return (
        <div>
            <input value={props.newTodo} onChange={props.updateNewTask} />
            <button className="AddTodos" onClick={props.addTodo}>Add Dodo</button>
        </div>
    )
}

