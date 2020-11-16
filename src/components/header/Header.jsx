import React from 'react';
import { Link } from 'react-router-dom';
import '../header/Header.css';
import Logo from '../img/logo.png'

export default function Header(){
    return( 
        <>
        <nav className='header'>
            <div className='header-container'>
                <div className="logo">
                    <Link to='/'>
                    <img src={Logo}></img>
                    </Link>
                </div>
                <ul className='header-menu'>
                    <li className='header-item'>
                        <Link to='/' className='header-links'>Home</Link>
                    </li>
                    <li className='header-item'>
                        <Link to='/Pagina1' className='header-links'>Página-1</Link>
                    </li>
                    <li className='header-item'>
                        <Link to='/Pagina2' className='header-links'>Página-2</Link>
                    </li>
                    <li className='header-item'>
                        <Link to='/Pagina3' className='header-links'>Página-3</Link>
                    </li>
                    <li className='header-item'>
                        <Link to='/Pagina4' className='header-links'>Página-4</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}