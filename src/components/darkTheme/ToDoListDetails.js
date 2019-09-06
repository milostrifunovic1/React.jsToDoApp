import React, { useContext } from 'react';
import { ListContext } from '../../context/ListContext';
import './Dark.css';

const ToDoListDetails = ({ list }) => {
    const { dispatch } = useContext(ListContext);
    return (
        <li onClick={() => dispatch({ type: 'REMOVE_LIST', id: list.id })}>
            <div className="text">{list.text} </div>
        </li>
    );
}

export default ToDoListDetails;
