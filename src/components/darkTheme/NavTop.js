import React, { useContext } from 'react'
import { ListContext } from '../../context/ListContext';
import ToDoForm from './ToDoForm';
import './Dark.css';

const NavTop = () => {
    const { lists } = useContext(ListContext);
    const { dispatch } = useContext(ListContext);

    return lists.length > 0 ? (
        <div className="nav-top">
            {lists.length > 1 ?
                (
                    <p>Currently you have <b>{lists.length}</b> things to do.</p>
                ) : (
                    <p>Currently you have <b>{lists.length}</b> thing to do.</p>
                )
            }
            <ToDoForm />
            <button className="clear" onClick={() => dispatch({ type: 'CLEAR_ALL' })}>REMOVE ALL</button>
        </div >

    ) : (
            <div className="nav-top">
                <p>Currently you have nothing to do ;-)</p>
                <h3>Cheers!</h3>
                <ToDoForm />
                <button className="clear" onClick={() => dispatch({ type: 'CLEAR_ALL' })}>REMOVE ALL</button>
            </div>
        )

}

export default NavTop;
