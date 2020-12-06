"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Example = _interopRequireDefault(require("./Components/Example.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("h1", null, "Horizontal Scrolling Cards"), /*#__PURE__*/React.createElement(_Example.default, null));
}

var _default = App;
exports.default = _default;