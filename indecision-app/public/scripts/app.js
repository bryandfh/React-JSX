'use strict';

console.log('App.js is running');

var myphone = {
    tittle: 'WA',
    subtittle: 'message'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'Tittle: ',
        myphone.tittle
    ),
    React.createElement(
        'p',
        null,
        'Subtittle: ',
        myphone.subtittle
    )
);

var user = {
    name: 'Bryan',
    age: 23,
    location: 'Cantabria'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
