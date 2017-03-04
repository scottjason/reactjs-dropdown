'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('./main.css');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDropdown = function (_Component) {
  _inherits(ReactDropdown, _Component);

  function ReactDropdown(props) {
    _classCallCheck(this, ReactDropdown);

    var _this = _possibleConstructorReturn(this, (ReactDropdown.__proto__ || Object.getPrototypeOf(ReactDropdown)).call(this, props));

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(ReactDropdown, [{
    key: 'render',
    value: function render() {
      var opts = this.props.opts;


      return _react2.default.createElement(
        'div',
        { className: 'rd-wrap',
          style: { backgroundColor: opts.bgColor } },
        _react2.default.createElement(
          'ul',
          { className: 'rd-tab-container' },
          opts.tabs.map(function (tab, i) {
            return _react2.default.createElement(
              'li',
              {
                className: 'rd-tab',
                key: i,
                style: { width: opts.tabWidth, height: opts.tabHeight, backgroundColor: opts.bgColor } },
              tab.name
            );
          })
        )
      );
    }
  }]);

  return ReactDropdown;
}(_react.Component);

exports.default = ReactDropdown;
