import React from "react";
import ReactDOM from 'react-dom/client';

const container = ReactDOM.createRoot(document.getElementById('root'));


const heading1 = React.createElement('h1',{},"Namaste React Bootcamp");
const heading2 = React.createElement('h2',{},"from Zero to Hero");
const heading3 = React.createElement('h3',{},"in 3 months");

const innerDiv = React.createElement('div',{className:'innerDiv'},heading1,heading2,heading3);
container.render(innerDiv);