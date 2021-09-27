// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class List extends React.Component {
    render() {
        return(<div>
            {this.props.todo.map(task => {
                return <div>{task.name}</div>
            })}
        </div>)
    }
}

export default List;