import React, { useState } from 'react';

const Form = (props) => {
    const [task, setTask] = useState('')

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleAdd(task);
        setTask('');
    }

    return(<form onSubmit={handleSubmit}>
        <input placeholder='Enter Your Todo' onChange={handleChange} value={task}/>
        {task ? <button>Add</button> : <button disabled={true}>Add</button>}
    </form>)
}

export default Form;