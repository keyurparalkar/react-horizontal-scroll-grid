"use strict";

var _react = _interopRequireDefault(require("react"));

require("@testing-library/jest-dom");

var _react2 = require("@testing-library/react");

var _HScrollGrid = _interopRequireDefault(require("../Components/HScrollGrid.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  @jest-environment jsdom
 */
it("Matches Snapshots", function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_HScrollGrid.default, null)),
      asFragment = _render.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
describe('Checking HScrollGrid Attributes', function () {
  it('Does HScrollGrid has GridWidth, GridHeight, cardWidth?', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_HScrollGrid.default, {
      gridWidth: 500,
      gridHeight: 200,
      cardWidth: 250,
      backgroundColor: "grey"
    })),
        getByTestId = _render2.getByTestId;

    var ulNode = getByTestId('test-ul');
    expect(ulNode.style['_values']['--gridWidth'].indexOf('undefined')).toBe(-1);
    expect(ulNode.style['_values']['--gridHeight'].indexOf('undefined')).toBe(-1);
    expect(ulNode.style['_values']['--cardWidth'].indexOf('undefined')).toBe(-1);
    expect(ulNode.style['_values']['--cBgCol'].indexOf('undefined')).toBe(-1);
  });
  it('Does HScrollGrid has GridWidth=500px and GridHeight=200px ?', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_HScrollGrid.default, {
      "data-testid": "test-parent-container",
      gridWidth: 500,
      gridHeight: 200
    })),
        getByTestId = _render3.getByTestId;

    var ulNode = getByTestId('test-ul');
    expect(ulNode.style['_values']['--gridWidth']).toBe('500px');
    expect(ulNode.style['_values']['--gridHeight']).toBe('200px');
  });
  it('Is BackgroundColor blue for all children?', function () {
    var cards = [/*#__PURE__*/_react.default.createElement("li", {
      key: "1"
    }, "Test")];

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_HScrollGrid.default, {
      gridWidth: 400,
      gridHeight: 100,
      cardWidth: 100,
      backgroundColor: "blue"
    }, cards)),
        getByTestId = _render4.getByTestId;

    var ulNode = getByTestId('test-ul');
    expect(ulNode.style['_values']['--cBgCol']).toBe("blue");
  });
});