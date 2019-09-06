import React, { useContext } from 'react';
import { ListContext } from '../../context/ListContext';
import './Light.css';

const ToDoListDetailsLight = ({ list }) => {
    const { dispatch } = useContext(ListContext);

    return (
        <li onClick={() => dispatch({ type: 'REMOVE_LIST', id: list.id })}>
            <div className="text-light"> {list.text} </div>
        </li>
    );
}

export default ToDoListDetailsLight;
