import React from 'react';
import './Header.css';
import logo from '../../assets/adrenalin.svg';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

const header = (props) => (
    <header className="header">      
        <Logo alt="Adrenalin Media Logo" src={logo}/>
        <Menu>
            <MenuItem link="/culture" exact >Culture</MenuItem>
            <MenuItem link="/work" exact >Work</MenuItem>
            <MenuItem link="/clients" exact >Clients</MenuItem>
            <MenuItem link="/services" exact >Services</MenuItem>
            <MenuItem link="/careers" exact >Careers</MenuItem>
            <MenuItem link="/contact" exact >Contact</MenuItem>
        </Menu>
    </header>
);

export default header;