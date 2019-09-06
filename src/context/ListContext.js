import React, { createContext, useReducer, useEffect } from 'react';
import { listReducer } from '../reducer/listReducer';

export const ListContext = createContext();

const ListContextProvider = (props) => {
    const [lists, dispatch] = useReducer(listReducer, [], () => {
        const localData = localStorage.getItem('lists')
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    }, [lists]);

    return (
        <ListContext.Provider value={{ lists, dispatch }}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListContextProvider;


