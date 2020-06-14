(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../../work/houyi/node_modules/css-loader/dist/cjs.js!../../../work/houyi/node_modules/sass-loader/dist/cjs.js!./src/pages/home/style.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /Users/Aaron/Desktop/qunar/work/houyi/node_modules/css-loader/dist/cjs.js!/Users/Aaron/Desktop/qunar/work/houyi/node_modules/sass-loader/dist/cjs.js!./src/pages/home/style.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../work/houyi/node_modules/css-loader/dist/runtime/api.js */ "../../../work/houyi/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Home html,\n.Home body {\n  margin: 0;\n  padding: 0;\n}\n.Home .about {\n  font-size: 50px;\n  color: red;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/app/actions/home.js":
/*!*********************************!*\
  !*** ./src/app/actions/home.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/urls */ "./src/app/constants/urls.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/app/constants/ActionTypes.js");


 // export default const fetchMovies = () =>  {
//     return (dispatch, getState) => {
//         const url = `${urls.homeTop}?appid=1001&platform=1&sign=lexueying`
//         return reqwest(url)
//             .then(resp => {
//               const { code, data, message } = resp;
//               if(code == 0) {
//                   dispatch({
//                       type: types.RECEIVE_MOVIES,
//                       movies: data,
//                   })
//               } else {
//                 console.error(`接口报错：${url}; ${message};`)
//               }
//             })
//     }
// }

/***/ }),

/***/ "./src/app/constants/urls.js":
/*!***********************************!*\
  !*** ./src/app/constants/urls.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * API序配置文件
 */
var URLS = {
  // 下面的地址配合 Server 工作
  appid: 1001,
  platform: 1,
  // 首页top部分
  homeTop: "/v2.2/indextop"
};
/* harmony default export */ __webpack_exports__["default"] = (URLS);

/***/ }),

/***/ "./src/app/selectors/home.js":
/*!***********************************!*\
  !*** ./src/app/selectors/home.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var getHome = function getHome(state) {
  var _state$home = _objectSpread({}, state.home),
      movies = _state$home.movies;

  return {
    movies: movies
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHome, function (home) {
  console.log('redu-js--', getHome);
  return {
    home: home
  };
}));

/***/ }),

/***/ "./src/app/store/connect.js":
/*!**********************************!*\
  !*** ./src/app/store/connect.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");



function mapStateToProps(props, state) {
  if (typeof props === 'function') return props;
  return state;
}

function mapDispatchToProps(actions, dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(actions, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function (selector, actions) {
  return function (target) {
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps.bind(null, selector), mapDispatchToProps.bind(null, actions))(target);
  };
});

/***/ }),

/***/ "./src/pages/home/hocb.js":
/*!********************************!*\
  !*** ./src/pages/home/hocb.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var hocb = function hocb(title) {
  return function (WrappedComponent) {
    return /*#__PURE__*/function (_Component) {
      _inherits(HOCB, _Component);

      var _super = _createSuper(HOCB);

      function HOCB() {
        _classCallCheck(this, HOCB);

        return _super.apply(this, arguments);
      }

      _createClass(HOCB, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          // super.componentDidMount();
          console.log('hoc---2', title);
        }
      }, {
        key: "render",
        value: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);
        }
      }]);

      return HOCB;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (hocb);

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var app_store_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/store/connect */ "./src/app/store/connect.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/pages/home/style.scss");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_selectors_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/selectors/home */ "./src/app/selectors/home.js");
/* harmony import */ var app_actions_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/actions/home */ "./src/app/actions/home.js");
/* harmony import */ var _hocb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hocb */ "./src/pages/home/hocb.js");
var _dec, _dec2, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







 //高阶函数的两种封装方式

var Home = (_dec = Object(app_store_connect__WEBPACK_IMPORTED_MODULE_2__["default"])(app_selectors_home__WEBPACK_IMPORTED_MODULE_4__["default"], app_actions_home__WEBPACK_IMPORTED_MODULE_5__), _dec2 = Object(_hocb__WEBPACK_IMPORTED_MODULE_6__["default"])('AAAA'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      success: false
    };
    return _this;
  } // static getDerivedStateFromProps(nextProps, prevState) {
  //   //会在初始化和update时触发，用于替换componentWillReceiveProps，
  //   //可以用来控制 props 更新 state 的过程；它返回一个对象表示新的 state；
  //   //如果不需要更新，返回 null 即可
  //   return null
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }
  // getSnapshotBeforeUpdate() {
  //   // 组件即将销毁
  //  // 可以在此处移除订阅，定时器等等
  // }


  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('hoc---1');
      var actions = this.props.actions; // actions.fetchMovies();

      setTimeout(function (_) {
        _this2.setState({
          success: true
        });
      }, 3000);
      console.log(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      console.log('home-render---', this.props.home.movies);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Home"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/about",
        className: "about"
      }, "\u70B9\u51FB\u8FDB\u4E0B\u4E00\u9875...."));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class) || _class);


/***/ }),

/***/ "./src/pages/home/style.scss":
/*!***********************************!*\
  !*** ./src/pages/home/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../work/houyi/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../work/houyi/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../work/houyi/node_modules/css-loader/dist/cjs.js!../../../../../../work/houyi/node_modules/sass-loader/dist/cjs.js!./style.scss */ "../../../work/houyi/node_modules/css-loader/dist/cjs.js!../../../work/houyi/node_modules/sass-loader/dist/cjs.js!./src/pages/home/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** xhr2 (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);