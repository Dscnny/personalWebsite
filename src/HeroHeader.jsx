import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './HeroHeader.css';
import dannyPic from './assets/daniel.jpg';

export default function HeroHeader(){
    const [visible,setVisible]=useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true),300);
    }, []);

    return(
        <div className={`hero-container ${visible ? 'visible': ''}`}>

            <img src={dannyPic} alt="Daniel Sanchez Cruz" className="hero-image" />
            <h1 className="hero-name">Daniel Sanchez Cruz</h1>    
        </div>
    );
}
