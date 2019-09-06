import React, { useContext, useState } from 'react'
import { ListContext } from '../../context/ListContext';
import './Dark.css';

const ToDoForm = () => {
    const { dispatch } = useContext(ListContext);
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_LIST', list: {
                text
            }
        });
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input-dark"
                type="text"
                placeholder="What do you need to do?"
                onChange={(e) => setText(e.target.value)}
                value={text}
                required>
            </input>
        </form>
    )
}

export default ToDoForm;
