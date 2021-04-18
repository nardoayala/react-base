import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './styles/main.scss';

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
