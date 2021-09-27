import React from 'react';
import Form from './components/TodoForm';
import List from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super() 
    this.state = {
      todo: []
    }
  }

  handleAdd = (task) => {
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTask]
    })
  }

  handleToggle = (id) => {
    console.log('handle toggle')
    this.setState({
      ...this.state,
      todo: this.state.todo.map(item => {
        if(item.id === id) {
          return ({
            ...item,
            completed: !item.completed
          })
        } 
        
        return item;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <Form handleAdd={this.handleAdd}/>
        <List todo={this.state.todo} handleToggle={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
