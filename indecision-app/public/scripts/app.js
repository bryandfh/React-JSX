'use strict';

console.log('App.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Bryan Ferreira'
    ),
    React.createElement(
        'p',
        null,
        'Age: 23'
    ),
    React.createElement(
        'p',
        null,
        'Location: Santander'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
