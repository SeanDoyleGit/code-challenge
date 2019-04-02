import React from 'react';
import './Menu.css';

const menu = (props) => (
    <ul className={`menu ${props.classes || ''}`}>
        {props.children}
    </ul>
);

export default menu;