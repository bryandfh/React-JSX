'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    console.log(app.options);
    render();
  }
};

var onRemoveAll = function onRemoveAll(e) {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

var number = [55, 101, 1000];

console.log(app.options);

var render = function render() {
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
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Reset '
    ),
    number.map(function (number) {
      return React.createElement(
        'p',
        { key: number },
        'Number : ',
        number * 2
      );
    }),
    React.createElement(
      'ol',
      null,
      app.options.map(function (options) {
        return React.createElement(
          'li',
          { key: options },
          'Option: ',
          options
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
  0;
};

render();
