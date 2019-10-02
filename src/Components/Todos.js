import React from 'react';
import Task from './Task';
import { CreateTask } from './CreateTask';

class Todos extends React.Component {
    state = {
        newTodo: "",
        todos: [
            { text: "ReactJS" },
            { text: "VueJS" },
            { text: "AngulartJS" },
        ]

    }
    c

    removeTodo = (index) => {
        const todos = [...this.state.todos]
        todos.splice(index, 1)
        this.setState({
            todos
        })
    }

    updateNewTask = (e) => {
        const newTodo = e.target.value
        this.setState({
            newTodo: newTodo
        })
    }

    addTodo = () => {
        const todos = [...this.state.todos]
        todos.push({
            text: this.state.newTodo
        })
        this.setState({
            todos,
            newTodo: ""
        })

    }

    render() {

        return (
            <div className="Todos">
                <ul>
                    {this.state.todos.map((todo, index) => <Task todo={todo} key={index} removeTodo={() => { this.removeTodo(index) }} />)}
                </ul><br />
                <CreateTask newTodo={this.state.newTodo} updateNewTask={this.updateNewTask} addTodo={this.addTodo} />
            </div>
        )
    }
}

export default Todos




// function CreateTask(props){
//     return(
//         <div>
//             <input value={props.newTodo} onChange={props.updateNewTask}/>
//             <button className="AddTodos" onClick={props.addTodo}>Add Dodo</button>
//         </div>
//     )
// }
/* <CreateTask value ={this.state.newTodo} onChange={this.onChange} onClick={this.addTodo} /> */

