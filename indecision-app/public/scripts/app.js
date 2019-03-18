'use strict';

console.log('App.js is running');

var template = React.createElement(
  'h1',
  null,
  'This is JSX from app!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
