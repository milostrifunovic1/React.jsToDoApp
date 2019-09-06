import React from 'react';
import './Switch.css';
import ListContextProvider from '../context/ListContext';
import NavbarLight from './lightTheme/NavbarLight';
import NavTopLight from './lightTheme/NavTopLight';
import ToDoListLight from './lightTheme/ToDoListLight';
import Navbar from './darkTheme/Navbar';
import NavTop from './darkTheme/NavTop';
import ToDoList from './darkTheme/ToDoList';

const Theme = ({ isOn, handleToggle, onColor }) => {
    return !isOn ? (
        <ListContextProvider>
            <div className="top">
                <Navbar />
                <NavTop />
                <input
                    checked={isOn}
                    onChange={handleToggle}
                    className="react-switch-checkbox"
                    id={`react-switch-new`}
                    type="checkbox"
                />
                <label
                    style={{ background: isOn && onColor }}
                    className="react-switch-label"
                    htmlFor={`react-switch-new`}
                >
                    <span className={`react-switch-button`} />
                </label>
            </div>
            <ToDoList />
        </ListContextProvider>
    ) : (
            <ListContextProvider>
                <div className="top-light">
                    <NavbarLight />
                    <NavTopLight />
                    <input
                        checked={isOn}
                        onChange={handleToggle}
                        className="react-switch-checkbox"
                        id={`react-switch-new`}
                        type="checkbox"
                    />
                    <label
                        style={{ background: isOn && onColor }}
                        className="react-switch-label"
                        htmlFor={`react-switch-new`}
                    >
                        <span className={`react-switch-button`} />
                    </label>
                </div>
                <ToDoListLight />
            </ListContextProvider>
        );
};

export default Theme;