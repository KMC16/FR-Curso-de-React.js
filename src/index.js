import React from "react";
import ReactDOM from "react-dom";
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

const container = document.getElementById("app");
// ReactDOM.render(__que__, __donde__);

ReactDOM.render(<Badge
    firstName="Kevin Martello"
    lastName="Mayorga Cleveland"
    jobTitle="Ingeniero Mecatronico"
    twitter="kevinmartello"
    avatar="https://s.gravatar.com/avatar/d3a4caa3b2a1882555c69bbd0deaa005?s=80"
/>, container);
