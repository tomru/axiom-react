var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export var DropdownTargetRef = 'DropdownTarget';

var DropdownTarget = function (_Component) {
  _inherits(DropdownTarget, _Component);

  function DropdownTarget(props) {
    _classCallCheck(this, DropdownTarget);

    var _this = _possibleConstructorReturn(this, (DropdownTarget.__proto__ || Object.getPrototypeOf(DropdownTarget)).call(this, props));

    _this.focusEventHasFired = false;
    return _this;
  }

  _createClass(DropdownTarget, [{
    key: 'handleClick',
    value: function handleClick(cb, event) {
      var toggleDropdown = this.context.toggleDropdown;


      if (this.focusEventHasFired) {
        this.focusEventHasFired = false;
      } else {
        toggleDropdown(event);
      }

      if (cb) cb(event);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(cb, event) {
      var openDropdown = this.context.openDropdown;

      this.focusEventHasFired = true;
      openDropdown(event);
      if (cb) cb(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return cloneElement(children, _extends({}, rest, {
        onClick: this.handleClick.bind(this, children.props.onClick),
        onFocus: this.handleFocus.bind(this, children.props.onFocus)
      }));
    }
  }]);

  return DropdownTarget;
}(Component);

DropdownTarget.contextTypes = {
  openDropdown: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired
};
DropdownTarget.typeRef = DropdownTargetRef;
export default DropdownTarget;