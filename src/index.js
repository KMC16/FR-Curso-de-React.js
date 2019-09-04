import React from "react";
import ReactDOM from "react-dom";
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

const container = document.getElementById("app");
// ReactDOM.render(__que__, __donde__);
ReactDOM.render(<Badge />, container);
