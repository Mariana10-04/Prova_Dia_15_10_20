import React from 'react';
import Instagram from '../img/instagram.svg';
import './Footer.css'

function Footer() {
    return(
        <>
        <div className="container-footer">
            <div className="social-media">
            <a href='https://www.instagram.com/marianas.s.g/?hl=pt-br' target='_blank'><img src={Instagram} /></a>
            </div>
            <h2>Desenvolvido por Mariana Gonzalez da Silva</h2>
        </div>
        </>
    );
}

export default Footer;