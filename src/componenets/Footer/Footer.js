import React from 'react';
import logo from '../../assets/adrenalin.svg';
import './Footer.css'

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Link from '../Menu/Link';

const footer = (props) => (
    <footer className="footer">   
        <Logo alt="Adrenalin Media Logo" src={logo}/>
        <Menu>
            <Link href="#" >Privacy</Link>
            <Link href="#" >Sitemap</Link>
            <Link href="#" >Facebook</Link>
            <Link href="#" >Linkedin</Link>
            <Link href="#" >Instagram</Link>
            <Link href="#" >Twitter</Link>
        </Menu>   
    </footer>
);

export default footer;