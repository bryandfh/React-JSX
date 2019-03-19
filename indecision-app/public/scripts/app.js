'use strict';

var getFirstName = function getFirstName(x) {
    return x.split(' ')[0];
};

console.log(getFirstName("Bryan Ferreira"));

getFirstName = function getFirstName(x) {
    return x.split(' ')[1];
};

console.log(getFirstName("Daniel Ferreira"));
