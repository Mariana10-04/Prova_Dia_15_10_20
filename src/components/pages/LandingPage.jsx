import React from 'react';
import Fundo from '../img/fundo.jpg';
import './style.css';

export default function LandingPage(){
    return(
        <>
        <div className="background">
            <img src={Fundo}></img>
            <h1>Hello World</h1>
        </div>
        </>
    );
}