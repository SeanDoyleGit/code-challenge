import React from 'react';
import './Logo.css';

const logo = (props) => (
    <div className={`logo ${props.classes || ''}`}>
        <img alt={props.alt} src={props.src}></img>
    </div>
);

export default logo;