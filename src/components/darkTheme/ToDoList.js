import React, { useContext } from 'react'
import { ListContext } from '../../context/ListContext';
import ToDoListDetails from './ToDoListDetails';
import './Dark.css';

const ToDoList = () => {
    const { lists } = useContext(ListContext);
    return (
        <div className="todo-list">
            <ul>
                {lists.map(list => {
                    return (<ToDoListDetails list={list} key={list.id} />);
                })}
            </ul>
        </div>
    )
}

export default ToDoList;
