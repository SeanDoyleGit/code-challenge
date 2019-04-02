import React from 'react';

const link = (props) => (
    <li className={`menu__link-wrapper ${props.classes}`}>
        <a className="menu__link" href={props.href}>{props.children}</a>
    </li>
);

export default link;