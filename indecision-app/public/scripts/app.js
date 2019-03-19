'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App ?',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var count = 0;
var addOne = function addOne() {
  count += 1;
  rendeCounterApp();
  console.log('addOne', count);
};

var minusOne = function minusOne() {
  count -= 1;
  rendeCounterApp();
  console.log('minusOne');
};

var reset = function reset() {
  count = 0;
  rendeCounterApp();
  console.log('reset');
};

var appRoot = document.getElementById('app');

var rendeCounterApp = function rendeCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Seteup reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

rendeCounterApp();
