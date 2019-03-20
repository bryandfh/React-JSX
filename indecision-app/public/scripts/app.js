'use strict';

var appRoot = document.getElementById('app');

var app = {
  title: 'Visibility Toggle',
  options: 'Hey some text'
};

var flags = false;

var showButton = function showButton() {
  flags ? flags = false : flags = true;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: showButton },
      ' ',
      flags ? "Hide" : "Show",
      ' '
    ),
    flags && React.createElement(
      'p',
      null,
      app.options
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
