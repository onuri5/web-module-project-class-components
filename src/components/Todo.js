import React from 'react';
// import styled from 'styled-components';
import './Todo.css';

const Item = (props) => {

    const handleClick = () => {
        props.handleToggle(props.task.id);
        console.log(props)
    }

    return <div onClick={handleClick} className={props.task.completed ? 'completed' : ''}><h3>{props.task.name}</h3></div>
}

export default Item;