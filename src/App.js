import React, { Component } from 'react';
import './App.css';

class ToDoList extends Component {
    state = {
        tasks: this.props.tasks,
        draft: ''
    }

    updateDraft = (event) => {
        this.setState({draft: event.target.value})
    }

    addTask = () => {
        const { tasks, draft } = this.state
        const list = tasks
        list.push(draft)
        this.setState({tasks: list, draft: ''})
    }

    render() {
        const { title } = this.props
        const { tasks, draft } = this.state

        return (
            <div>
                <h1>{title}</h1>
                 {tasks.map(task => <div><p>{task}</p></div>)}
                <input type="text" onChange={this.updateDraft} value={draft}/>
                <button onClick={this.addTask}>Add</button>
            </div>
        )
    }
}

class App extends Component {

    myTasks = []
    render() {
    return (
     <div>
         <ToDoList title={'Todo:'} tasks={this.myTasks}/>
     </div>
    );
  }
}

export default App;
