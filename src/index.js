// const element = document.createElement('h1');
// element.innerText = 'Hola mundo, primer h1';

// const container = document.getElementById('app');
// container.appendChild(element)

import React from 'react';
import ReactDOM from 'react-dom';

//const element = <h1>Hola Mundo, Provando React JSX, y el git</h1>
//const element= React.createElement('a',{ href: 'https://www.apple.com/' },'Ir a apple');
const name = 'Kevin Martello'

//const element = React.createElement('h1',{},`Hola, soy ${name}`)
//const sum = () => 2+2
//const jsx=<h1>Hola, Soy {sum()}</h1> // poner expresiones como una suma,o una funcion,  


//--------------------------------------------Estructura en JSX-----------------------------
const jsx = (<div>
<h1>Hola, Soy Kevin Martello</h1>
<p>Soy Ingeniero Mecatronico</p>
</div>);
//-------------------------------------------Estructura de Create React---------------------
const element = React.createElement(
    'div',
    {},
    React.createElement('h1',{},'Hola, Soy Kevin Martello'),
    React.createElement('p',{},'Soy Imgemiero Mecatronico'),
);

const container = document.getElementById('app'); 

// ReactDOM.render(__que__, __donde__);

ReactDOM.render(jsx,container);