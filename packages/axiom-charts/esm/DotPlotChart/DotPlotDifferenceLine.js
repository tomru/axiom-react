var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

var DotPlotDifferenceLine = function (_Component) {
  _inherits(DotPlotDifferenceLine, _Component);

  function DotPlotDifferenceLine() {
    _classCallCheck(this, DotPlotDifferenceLine);

    return _possibleConstructorReturn(this, (DotPlotDifferenceLine.__proto__ || Object.getPrototypeOf(DotPlotDifferenceLine)).apply(this, arguments));
  }

  _createClass(DotPlotDifferenceLine, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          faded = _props.faded,
          fromX = _props.from,
          height = _props.height,
          hidden = _props.hidden,
          to = _props.to,
          width = _props.width,
          rest = _objectWithoutProperties(_props, ['faded', 'from', 'height', 'hidden', 'to', 'width']);

      var style = { height: height, width: width };
      var lineStyle = { left: fromX + '%', right: 100 - to + '%' };
      var classes = classnames('ax-dot-plot__difference-line', {
        'ax-dot-plot__difference-line--faded': faded,
        'ax-dot-plot__difference-line--hidden': hidden
      });

      return React.createElement(
        'div',
        _extends({}, rest, { className: classes, style: style }),
        React.createElement('div', { className: 'ax-dot-plot__difference-line-path', style: lineStyle })
      );
    }
  }]);

  return DotPlotDifferenceLine;
}(Component);

DotPlotDifferenceLine.defaultProps = {
  from: 0,
  height: '0.75rem',
  to: 100,
  width: '100%'
};
export default DotPlotDifferenceLine;