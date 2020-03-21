import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import state from './redux/state.js';
import { subscribe } from './redux/state.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <App state={state}/>
        </BrowserRouter>, document.getElementById('root'));
}

subscribe(rerenderEntireTree);
rerenderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
