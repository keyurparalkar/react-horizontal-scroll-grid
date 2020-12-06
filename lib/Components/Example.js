"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HScrollGrid = _interopRequireDefault(require("./HScrollGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Example = function Example() {
  var keys = [1, 2, 3, 4, 5, 6];
  var cards = keys.map(function (elem) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: elem
    }, " Test ");
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_HScrollGrid.default, {
    gridWidth: 400,
    gridHeight: 100,
    cardWidth: 100,
    backgroundColor: "antiquewhite"
  }, cards), /*#__PURE__*/_react.default.createElement(_HScrollGrid.default, {
    gridWidth: 700,
    gridHeight: 100,
    cardWidth: 200,
    backgroundColor: "antiquewhite"
  }, cards), /*#__PURE__*/_react.default.createElement(_HScrollGrid.default, {
    gridWidth: 1000,
    gridHeight: 300,
    cardWidth: 400,
    backgroundColor: "#ecf2a7"
  }, cards));
};

var _default = Example;
exports.default = _default;