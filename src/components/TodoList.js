// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from './Todo';

class List extends React.Component {
    render() {
        return(<div>
            {this.props.todo.map(task => {
                return <Item key={task.id} task={task} handleToggle={this.props.handleToggle}/>
            })}
        </div>)
    }
}

export default List;