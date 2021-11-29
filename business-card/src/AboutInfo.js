import React from 'react';
import githubIcon from './icons/github.png'
import fbIcon from './icons/fb.png'
import instaIcon from './icons/insta.png'
import twitIcon from './icons/twit.png'

export default function AboutInterests(){
    return(
        <div className="container">
            <div className="main-content" id="about">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <div id="social">
                    <img src={twitIcon} className="socialIcons" id="twitt"></img>
                    <img src={fbIcon} className="socialIcons"></img>
                    <img src={instaIcon} className="socialIcons"></img>
                    <img src={githubIcon} className="socialIcons" id="gitt"></img>
            </div>
        </div>
    )

}