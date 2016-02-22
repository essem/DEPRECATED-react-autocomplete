(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Autocomplete"] = factory(require("react"), require("react-dom"));
	else
		root["Autocomplete"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Autocomplete = function (_React$Component) {
	  _inherits(Autocomplete, _React$Component);

	  function Autocomplete() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Autocomplete);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Autocomplete)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      input: _this.props.defaultValue,
	      open: false
	    }, _this.handleClick = function (e) {
	      var clickedOutside = !_reactDom2.default.findDOMNode(_this).contains(e.target);
	      if (clickedOutside) {
	        _this.setState({ open: false });
	      }
	    }, _this.handleInputChange = function (e) {
	      var input = e.target.value;
	      _this.setState({ input: input, open: true });
	      if (_this.props.onInputChange) {
	        _this.props.onInputChange(input);
	      }
	    }, _this.handleCandidateClick = function (e) {
	      var selectedText = e.target.innerText;
	      _this.setState({ input: selectedText, open: false });
	      if (_this.props.onSelect) {
	        _this.props.onSelect(selectedText);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Autocomplete, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('click', this.handleClick);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('click', this.handleClick);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var candidates = [];

	      if (this.state.open) {
	        (function () {
	          var input = _this2.state.input.toLowerCase();
	          if (input.length > 0) {
	            candidates = _this2.props.dictionary.filter(function (v) {
	              return v.toLowerCase().startsWith(input);
	            });
	          }
	        })();
	      }

	      var className = [this.props.wrapperClassName];
	      if (candidates.length > 0) {
	        className.push(this.props.dropdownOpenClassName);
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: className.join(' ') },
	        _react2.default.createElement('input', {
	          type: 'text',
	          className: this.props.inputClassName,
	          value: this.state.input,
	          onChange: this.handleInputChange
	        }),
	        _react2.default.createElement(
	          'ul',
	          { className: this.props.dropdownClassName },
	          candidates.map(function (c) {
	            return _react2.default.createElement(
	              'li',
	              { key: c },
	              _react2.default.createElement(
	                'a',
	                {
	                  href: '#',
	                  onClick: _this2.handleCandidateClick
	                },
	                c
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Autocomplete;
	}(_react2.default.Component);

	Autocomplete.propTypes = {
	  wrapperClassName: _react2.default.PropTypes.string,
	  inputClassName: _react2.default.PropTypes.string,
	  dropdownClassName: _react2.default.PropTypes.string,
	  dropdownOpenClassName: _react2.default.PropTypes.string,
	  dictionary: _react2.default.PropTypes.array.isRequired,
	  defaultValue: _react2.default.PropTypes.string,
	  onInputChange: _react2.default.PropTypes.func,
	  onSelect: _react2.default.PropTypes.func
	};
	Autocomplete.defaultProps = {
	  wrapperClassName: 'dropdown',
	  inputClassName: 'form-control',
	  dropdownClassName: 'dropdown-menu',
	  dropdownOpenClassName: 'open'
	};
	exports.default = Autocomplete;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;