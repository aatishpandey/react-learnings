import React from 'react';
import hero from './images/MainHero.png';
import emailIcon from './icons/email-icon.png';
import linkIcon from './icons/link-icon.png';
// import ReactDOM from 'react-dom';

export default function CardBackground(){
    return(
        <div className = "container">
            <img src={hero} id="main-hero" />

            <div className="main-content">
                <h2>Aatish Pandey</h2>
                <h3>Frontend Developer</h3>
                <p>aatish2302@gmail.com</p>

                <div id="buttons">
                    <div id="email">
                        <img src={emailIcon} className="icons" />
                        Email
                    </div>
                    <div id="linkedin">
                        <img src={linkIcon} className="icons"/>
                        Linkedin
                    </div>
                </div>

            </div>
        </div>
    )
}