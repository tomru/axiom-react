import _default2 from '@brandwatch/axiom-components/dist/Typography/Text';
import _default from '@brandwatch/axiom-components/dist/Typography/Link';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';


var RADIAN = Math.PI / 180;

var RadarXAxisLabel = function (_Component) {
  _inherits(RadarXAxisLabel, _Component);

  function RadarXAxisLabel() {
    _classCallCheck(this, RadarXAxisLabel);

    return _possibleConstructorReturn(this, (RadarXAxisLabel.__proto__ || Object.getPrototypeOf(RadarXAxisLabel)).apply(this, arguments));
  }

  _createClass(RadarXAxisLabel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          label = _props.children,
          _onClick = _props.onClick,
          r = _props.r,
          x = _props.x,
          y = _props.y,
          rest = _objectWithoutProperties(_props, ['active', 'children', 'onClick', 'r', 'x', 'y']);

      var isTop = r > RADIAN * 247.5 || r < RADIAN * -67.5;
      var isRight = r >= RADIAN * -67.5 && r <= RADIAN * 67.5;
      var isBottom = r > RADIAN * 67.5 && r < RADIAN * 112.5;
      var isLeft = r >= RADIAN * 112.5 && r <= RADIAN * 247.5;

      var classes = classnames('ax-radar__x-axis-label', {
        'ax-radar__x-axis-label--right': isRight,
        'ax-radar__x-axis-label--bottom': isBottom,
        'ax-radar__x-axis-label--left': isLeft,
        'ax-radar__x-axis-label--top': isTop
      });

      return React.createElement(
        'div',
        _extends({}, rest, {
          className: classes,
          style: { top: y + 'px', left: x + 'px' } }),
        _onClick ? React.createElement(
          _default,
          {
            onClick: function onClick() {
              return _onClick(label);
            },
            style: active ? 'body' : 'subtle' },
          label
        ) : React.createElement(
          _default2,
          { textColor: active ? 'body' : 'subtle' },
          label
        )
      );
    }
  }]);

  return RadarXAxisLabel;
}(Component);

export default RadarXAxisLabel;