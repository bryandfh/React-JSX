'use strict';

var user = {
    name: 'Bryan',
    cities: ['Caracas', 'Los Angeles', 'Santander'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        //Other way to functions      
        return this.cities.map(function (city) {
            return _this.name + " lived in " + city;
        });
        //return cityMessage;
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 3, 4, 5],
    multiplyBy: 10,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (n) {
            return _this2.multiplyBy * n;
        });
    }
};
console.log(multiplier.multiply());
