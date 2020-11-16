import React from 'react';
import {Link} from 'react-router-dom';
import Facebook from '../img/facebook.svg';
import Instagram from '../img/instagram.svg';
import './Footer.css'

function Footer() {
    return(
        <>
        <div className="container-footer">
            <div className="social-media">
            <a href='https://www.facebook.com/marcelo.fortes.104' target='_blank'><img src={Facebook} /></a>
            <a href='https://www.instagram.com/mfortesgc/?hl=pt-br' target='_blank'><img src={Instagram} /></a>
            </div>
            <h2>Desenvolvido por Marcelo Fortes</h2>
        </div>
        </>
    );
}

export default Footer;