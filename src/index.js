import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

fetch('https://docs.google.com/spreadsheets/d/1wZrUD8hmwdFtwS2d_OueJp5WvkVRoMGphdKr92Xlcxw/pub?output=csv', {
  mode: 'no-cors'
}).then(() => console.log('success'))