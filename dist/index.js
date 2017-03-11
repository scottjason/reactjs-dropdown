'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prefixer = new _inlineStylePrefixer2.default();
var styles = prefixer.prefix({
  rdWrap: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 0,
    width: 'auto',
    height: 'auto'
  },
  rdInner: {
    position: 'relative',
    margin: 0,
    padding: 0,
    blackfaceVisibility: 'hidden',
    transform: 'translate3d(0,0,0)',
    transition: 'all .4s ease'
  },
  rdCtrl: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    borderBottom: '1px solid white',
    cursor: 'pointer',
    userSelect: 'none',
    zIndex: 100
  },
  rdTab: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    borderBottom: '1px solid white',
    cursor: 'pointer',
    userSelect: 'none'
  },
  rdArrow: {
    position: 'absolute',
    top: 0,
    bottom: 4,
    right: 0,
    width: 12,
    height: 12,
    margin: 'auto',
    marginRight: 20,
    borderTop: '2px solid white',
    borderRight: '2px solid white',
    transform: 'rotate(135deg)',
    transition: 'all .4s ease'
  },
  rotate: {
    transform: 'rotate(320deg)'
  }
});

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
    key: 'sum',
    value: function sum(a, v) {
      return a + v;
    }
  }, {
    key: 'extractHeight',
    value: function extractHeight(o) {
      return o.height;
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
    key: 'toggleDropdown',
    value: function toggleDropdown() {
      this.setState({ isOpen: !this.state.isOpen });
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
      this.toggleDropdown();
      if (!tab.isTitle) {
        this.props.onTabSelected.call(this, tab);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var opts = this.state.opts;

      var y = this.state.isOpen ? 0 : -this.state.dropdownHeight;
      var rotate = this.state.isOpen ? styles.rotate : null;

      return _react2.default.createElement(
        'div',
        { style: Object.assign({ backgroundColor: opts.bgColor }, styles.rdWrap) },
        opts.tabs.filter(this.isTitle).map(function (tab, i) {
          return _react2.default.createElement(
            'div',
            { onClick: _this2.onSelectTab.bind(_this2, tab),
              key: i,
              className: 'rd-ctrl',
              style: Object.assign({ width: tab.width, height: tab.height, backgroundColor: tab.bgColor }, styles.rdCtrl) },
            tab.name,
            _react2.default.createElement('div', { style: Object.assign({}, styles.rdArrow, rotate) })
          );
        }),
        _react2.default.createElement(
          'ul',
          { style: Object.assign({}, styles.rdInner, { transform: 'translate(0px, ' + y + 'px)' }) },
          opts.tabs.filter(this.isNotTitle).map(function (tab, i) {
            return _react2.default.createElement(
              'li',
              {
                onClick: _this2.onSelectTab.bind(_this2, tab),
                key: i,
                className: 'rd-tab',
                style: Object.assign({ width: tab.width, height: tab.height, backgroundColor: tab.bgColor }, styles.rdTab) },
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
