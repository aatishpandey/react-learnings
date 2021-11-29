import React from 'react';
import ReactDOM from 'react-dom';
import CardBackground from './CardBackground';
import AboutInfo from './AboutInfo'
// const element = <h1>Hi there</h1>;

ReactDOM.render(
  <>
    <CardBackground />
    <AboutInfo />
  </>,
 document.querySelector('#root')
)