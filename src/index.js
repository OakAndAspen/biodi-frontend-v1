import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from "jquery";

$.ajaxSetup({
    accept: 'application/json',
    beforeSend: function (request) {
        request.setRequestHeader('Authorization', 'Bearer ' + localStorage.authKey);
    },
    error: function (jqXHR) {
        console.log('An error occured (' + jqXHR.status + ' ' + jqXHR.statusText + ')');
    }
});

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
