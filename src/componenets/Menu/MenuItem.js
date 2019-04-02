import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItem = (props) => (
    <li className={`menu__item ${props.classes}`}>
        <NavLink 
            className="menu__item__link"
            to={props.link}
            exact={props.exact}
            activeClassName="menu__item--active">{props.children}</NavLink>
    </li>
);

export default menuItem;