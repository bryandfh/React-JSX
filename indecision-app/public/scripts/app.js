'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name) {
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGretting',
        value: function getGretting() {
            return 'Hi. Im ' + this.name;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' old';
        }
    }]);

    return Person;
}();

var Students = function (_Person) {
    _inherits(Students, _Person);

    function Students(name, age, major) {
        _classCallCheck(this, Students);

        var _this = _possibleConstructorReturn(this, (Students.__proto__ || Object.getPrototypeOf(Students)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Students, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return this.major ? 'Yes' : 'No';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            var description = _get(Students.prototype.__proto__ || Object.getPrototypeOf(Students.prototype), 'getDescription', this).call(this);
            return description + ' studying ' + this.major;
        }
    }]);

    return Students;
}(Person);

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'getGretting',
        value: function getGretting() {
            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGretting', this).call(this);
            if (this.homeLocation) return greeting += 'Im visiting from ' + this.homeLocation;

            return greeting;
        }
    }]);

    return Traveler;
}(Person);

var me = new Students('Bryan Ferreira', 23, 'CS');
console.log(me.getDescription());

var me2 = new Traveler();
console.log(me2.getDescription());

var c = new Traveler("Bryan", 23, "Caracas");
console.log(c.getGretting());
