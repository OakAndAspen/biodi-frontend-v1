import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from "jquery";

let headers = {
    "Content-Type": "application/json"
};
if(localStorage.getItem("authKey")) headers.Authorization = "Bearer " + localStorage.authKey;

$.ajaxSetup({
    headers: headers,
    error: function (jqXHR) {
        console.log('An error occured (' + jqXHR.status + ' ' + jqXHR.statusText + ')');
    }
});

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
