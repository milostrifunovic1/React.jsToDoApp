import React, { useContext } from 'react'
import { ListContext } from '../../context/ListContext';
import ToDoFormLight from './ToDoFormLight';
import './Light.css';

const NavTopLight = () => {
    const { lists } = useContext(ListContext);
    const { dispatch } = useContext(ListContext);

    return lists.length > 0 ? (
        <div className="nav-top-light">
            {lists.length > 1 ?
                (
                    <p>Currently you have <b>{lists.length}</b> things to do.</p>
                ) : (
                    <p>Currently you have <b>{lists.length}</b> thing to do.</p>
                )
            }
            <ToDoFormLight />
            <button className="clear-light" onClick={() => dispatch({ type: 'CLEAR_ALL' })}>REMOVE ALL</button>
        </div >

    ) : (
            <div className="nav-top-light">
                <p>Currently you have nothing to do ;-)</p>
                <h3>Cheers!</h3>
                <ToDoFormLight />
                <button className="clear-light" onClick={() => dispatch({ type: 'CLEAR_ALL' })}>REMOVE ALL</button>
            </div>
        )

}

export default NavTopLight;
