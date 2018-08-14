import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

import ChartLabel from './ChartLabel';

var ChartLayoutLabels = function (_Component) {
  _inherits(ChartLayoutLabels, _Component);

  function ChartLayoutLabels() {
    _classCallCheck(this, ChartLayoutLabels);

    return _possibleConstructorReturn(this, (ChartLayoutLabels.__proto__ || Object.getPrototypeOf(ChartLayoutLabels)).apply(this, arguments));
  }

  _createClass(ChartLayoutLabels, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          axis = _props.axis,
          labels = _props.labels,
          lower = _props.lower,
          upper = _props.upper,
          rest = _objectWithoutProperties(_props, ['axis', 'labels', 'lower', 'upper']);

      var side = axis === 'y' ? 'top' : 'left';
      var isPrecise = typeof labels[0].value === 'number';
      var classes = classnames('ax-chart-layout__' + axis + '-labels', {
        'ax-chart-layout__labels--precise': isPrecise
      });

      if (!labels.some(function (label) {
        return isPrecise ? label.label : label;
      })) {
        return null;
      }

      if (isPrecise) {
        return React.createElement(
          _default,
          _extends({}, rest, { className: classes }),
          labels.map(function (_ref, index) {
            var label = _ref.label,
                value = _ref.value;
            return React.createElement(
              Fragment,
              { key: index },
              React.createElement(
                'div',
                { className: 'ax-chart-layout__label--hidden' },
                React.createElement(
                  ChartLabel,
                  null,
                  label
                )
              ),
              React.createElement(
                'div',
                {
                  className: 'ax-chart-layout__label',
                  style: _defineProperty({}, side, 100 - (value - lower) / (upper - lower) * 100 + '%') },
                React.createElement(
                  ChartLabel,
                  null,
                  label
                )
              )
            );
          })
        );
      }

      return React.createElement(
        _default,
        _extends({}, rest, { className: classes }),
        labels.map(function (label, index) {
          return React.createElement(
            ChartLabel,
            { key: index },
            label
          );
        })
      );
    }
  }]);

  return ChartLayoutLabels;
}(Component);

export default ChartLayoutLabels;