import React, { useContext } from 'react'
import { ListContext } from '../../context/ListContext';
import ToDoListDetailsLight from './ToDoListDetailsLight';
import './Light.css';

const ToDoListLight = () => {
    const { lists } = useContext(ListContext);
    return (
        <div className="todo-list-light">
            <ul>
                {lists.map(list => {
                    return (<ToDoListDetailsLight list={list} key={list.id} />);
                })}
            </ul>
        </div>
    )
}

export default ToDoListLight;
