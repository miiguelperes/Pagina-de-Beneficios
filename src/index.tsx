import React from 'react';
import './defaultStyle.css';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
console.log("Bem vindo ao Martins!")
console.log = () =>{}
console.error = () =>{}
console.warn = () =>{}
ReactDOM.render(<App />, document.getElementById('root'));
