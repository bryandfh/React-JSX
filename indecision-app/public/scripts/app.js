"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.Toggle = _this.Toggle.bind(_this);
    _this.state = {
      visibility: false,
      options: 'Hey some text'
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "Toggle",
    value: function Toggle() {
      this.setState(function (pre) {
        return {
          visibility: !pre.visibility
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Visibility Toggle"
        ),
        React.createElement(
          "button",
          { onClick: this.Toggle },
          this.state.visibility ? "Hide" : "Show"
        ),
        this.state.visibility && React.createElement(
          "p",
          null,
          this.state.options
        )
      )

      /* */
      ;
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
/*const appRoot = document.getElementById('app');

let app = {
    title: 'Visibility Toggle!',
    options: 'Hey some text',
};

let flags = false;

let showButton = () => {
    flags ? flags = false : flags = true;
    render();
}

const render = () => {
    let template = (
      <div>
        <h1>{app.title}</h1>
        <button onClick = {showButton}> {flags ? "Hide" : "Show"} </button>
        {flags && <p>{app.options}</p>}        
      </div>
    );
    ReactDOM.render(template, appRoot);
};
  
render();
*/
