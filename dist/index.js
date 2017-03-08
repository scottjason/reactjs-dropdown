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
      opts: {},
      isOpen: false,
      dropdownHeight: 0
    };
    return _this;
  }

  _createClass(ReactDropdown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      Object.assign(this.state.opts, this.props.opts);
      var tabs = this.state.opts.tabs;
      this.state.dropdownHeight = tabs.map(this.extractHeight).reduce(this.sum);
    }
  }, {
    key: 'extractHeight',
    value: function extractHeight(o) {
      return o.height;
    }
  }, {
    key: 'sum',
    value: function sum(a, v) {
      return a + v;
    }
  }, {
    key: 'selectAll',
    value: function selectAll(tab) {
      tab.isSelected = true;
      return tab;
    }
  }, {
    key: 'bySelected',
    value: function bySelected(tab) {
      return tab.isSelected ? tab : null;
    }
  }, {
    key: 'toggleSelected',
    value: function toggleSelected(tabSelected) {
      return function (tab) {
        tab.isSelected = tab.name === tabSelected.name ? true : false;
        return tab;
      };
    }
  }, {
    key: 'onSelectTab',
    value: function onSelectTab(tab) {
      var tabs = this.state.opts.tabs;

      this.state.opts.tabs = tabs.map(this.toggleSelected(tab));
      this.toggle();
      if (!tab.isTitle) {
        this.props.onTabSelected.call(this, tab);
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'isTitle',
    value: function isTitle(tab) {
      if (tab.isTitle) {
        return tab;
      }
    }
  }, {
    key: 'isNotTitle',
    value: function isNotTitle(tab) {
      if (!tab.isTitle) {
        return tab;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var opts = this.state.opts;

      var y = this.state.isOpen ? 0 : -this.state.dropdownHeight;
      var styles = {
        transform: 'translate(0px, ' + y + 'px)'
      };

      return _react2.default.createElement(
        'div',
        { className: 'rd-wrap',
          style: { backgroundColor: opts.bgColor } },
        opts.tabs.filter(this.isTitle).map(function (tab, i) {
          return _react2.default.createElement(
            'div',
            { className: 'tab-title',
              onClick: _this2.onSelectTab.bind(_this2, tab),
              key: i,
              style: { width: tab.width, height: tab.height, backgroundColor: tab.bgColor } },
            tab.name
          );
        }),
        _react2.default.createElement(
          'ul',
          { id: 'react-dropdown',
            className: 'rd-tab-container open',
            style: styles
          },
          opts.tabs.filter(this.isNotTitle).map(function (tab, i) {
            return _react2.default.createElement(
              'li',
              {
                className: 'rd-tab',
                onClick: _this2.onSelectTab.bind(_this2, tab),
                key: i,
                style: { width: tab.width, height: tab.height, backgroundColor: tab.bgColor ? tab.bgColor : 'orange' } },
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
