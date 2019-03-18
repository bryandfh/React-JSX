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
    location: ''
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

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
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
