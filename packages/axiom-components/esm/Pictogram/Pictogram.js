var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import './Pictogram.css';

var PICTOGRAM_NAME_MAP = {
  '3d-globe': {
    "body": "<path d=\"M12.446 7.25a13.117 13.117 0 0 0-.406-2.648 12.68 12.68 0 0 0 1.268-.34 6.45 6.45 0 0 1 1.145 2.988h-2.007zm-.406 4.148c.215-.818.357-1.707.406-2.648h2.007a6.45 6.45 0 0 1-1.145 2.988 12.68 12.68 0 0 0-1.268-.34zm-.488 1.439c.218.045.425.091.62.141a6.478 6.478 0 0 1-1.032.709c.15-.264.285-.551.412-.85zm-7.105 0c.127.299.263.586.412.85a6.57 6.57 0 0 1-1.03-.709c.193-.05.401-.096.618-.141zM3.553 8.75c.05.941.192 1.83.407 2.648-.453.098-.879.212-1.269.34A6.449 6.449 0 0 1 1.547 8.75h2.006zm.407-4.148a13.116 13.116 0 0 0-.407 2.648H1.547a6.449 6.449 0 0 1 1.144-2.988c.39.128.816.242 1.27.34zm.487-1.439a13.45 13.45 0 0 1-.619-.141 6.57 6.57 0 0 1 1.031-.709 8.486 8.486 0 0 0-.412.85zm6.693-.85c.367.203.712.441 1.031.709-.194.05-.4.096-.619.141a8.486 8.486 0 0 0-.412-.85zM8.75 3.481V1.664c.491.311.965.908 1.355 1.722a18.05 18.05 0 0 1-1.355.095zm0 3.769V4.994c.657-.023 1.29-.075 1.891-.153.2.723.335 1.535.386 2.409H8.75zm0 3.756V8.75h2.277a11.684 11.684 0 0 1-.386 2.409 20.222 20.222 0 0 0-1.89-.153zm0 1.513c.481.017.933.048 1.355.095-.39.814-.864 1.411-1.355 1.721v-1.816zm-1.5 0v1.816c-.49-.31-.966-.907-1.356-1.721a18.04 18.04 0 0 1 1.356-.095zm0-3.769v2.256c-.658.023-1.29.075-1.892.153a11.754 11.754 0 0 1-.385-2.409H7.25zm0-3.756V7.25H4.973c.051-.874.187-1.686.385-2.409.601.078 1.234.13 1.892.153zm0-1.513a18.04 18.04 0 0 1-1.356-.095c.39-.814.865-1.411 1.356-1.722v1.817zM8 0a8 8 0 0 0-8 8 8 8 0 1 0 16 0 8 8 0 0 0-8-8z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'annotation': {
    "body": "<path d=\"M6.019 11.347H2.772l-.674 2.294H0L3.377 3h2.057l3.364 10.641H6.7l-.681-2.294zM3.267 9.673h2.264l-1.108-3.75h-.041l-1.115 3.75zm10.731 3.968a4.679 4.679 0 0 1-.189-.57c-.053-.2-.09-.404-.113-.614a2.87 2.87 0 0 1-.819.958c-.34.253-.743.38-1.21.38-.78 0-1.381-.213-1.803-.64-.422-.426-.633-1.007-.633-1.743 0-.774.281-1.375.843-1.801.562-.427 1.381-.64 2.46-.64h1.127v-.628c0-.38-.094-.675-.282-.885-.188-.21-.468-.314-.839-.314-.326 0-.577.084-.753.252-.177.168-.265.398-.265.69H9.589l-.014-.043c-.032-.668.242-1.244.822-1.729.58-.484 1.338-.727 2.274-.727.894 0 1.617.239 2.17.717.553.477.829 1.162.829 2.053v3.267c0 .37.026.719.079 1.045.053.327.136.65.251.972h-2.002zm-1.836-1.425c.348 0 .66-.092.935-.277.275-.186.463-.4.564-.644v-1.118h-1.128c-.426 0-.749.112-.966.336a1.14 1.14 0 0 0-.327.826c0 .268.081.481.244.64.163.158.389.237.678.237z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'bar-chart': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path fill-opacity=\".3\" d=\"M12 0v4.5H0V0z\"/><path fill-opacity=\".75\" d=\"M16 11.5V16H0v-4.5z\"/><path d=\"M8 5.75v4.5H0v-4.5z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'bar-percent-chart': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M0 5.75h16v4.5H0z\"/><path fill-opacity=\".3\" d=\"M0 0h16v4.5H0z\"/><path fill-opacity=\".75\" d=\"M0 11.5h16V16H0z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'choropleth-map': {
    "body": "<path d=\"M8 16c-.049 0-6-6-6-10a6 6 0 1 1 12 0c0 4-5.951 10-6 10zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'circle-pack': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><circle cx=\"11\" cy=\"5\" r=\"5\"/><circle fill-opacity=\".3\" cx=\"2.5\" cy=\"4.5\" r=\"2.5\"/><circle fill-opacity=\".3\" cx=\"11\" cy=\"13\" r=\"2\"/><circle fill-opacity=\".75\" cx=\"4\" cy=\"12\" r=\"4\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'column-chart': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path fill-opacity=\".3\" d=\"M0 4h4.5v12H0z\"/><path fill-opacity=\".75\" d=\"M11.5 0H16v16h-4.5z\"/><path d=\"M5.75 8h4.5v8h-4.5z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'date-&-time': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\" fill-opacity=\".75\" fill-rule=\"nonzero\"/><path d=\"M8.75 7.66V3.741A.743.743 0 0 0 8 3a.744.744 0 0 0-.75.742v4.016c0 .103.02.2.058.288a.761.761 0 0 0 .274.591l2.666 2.238c.33.277.798.23 1.064-.087a.753.753 0 0 0-.1-1.062L8.75 7.659z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'featured-content': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M5 5l5 10H0z\"/><path fill-opacity=\".75\" d=\"M11 7l4 8H7z\"/><circle cx=\"14\" cy=\"4\" r=\"2\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'female': {
    "body": "<path d=\"M16.115 11l2.523 9.418a1.25 1.25 0 1 1-2.415.647l-2.521-9.41-.97.263L16.506 26h-3v12.25a1.75 1.75 0 1 1-3.5 0V26h-1v12.25a1.75 1.75 0 1 1-3.5 0V26h-3l3.773-14.082-.969-.263-2.522 9.41a1.25 1.25 0 1 1-2.415-.647L2.897 11c.625-2.334 2.226-3.898 4.699-4l3.823.016c2.47.086 4.07 1.65 4.696 3.984zm-6.61-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "40",
    "viewBox": "0 0 19 40",
    "width": "19"
  },
  'file-upload': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path fill-opacity=\".75\" d=\"M0 13h16v3H0z\"/><path d=\"M8 0l5 7H3zM6 7h4v4H6z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'frequency-heatmap': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M8 0h8v4H8z\"/><path fill-opacity=\".75\" d=\"M0 0h8v4H0zM8 8h8v4H8z\"/><path fill-opacity=\".3\" d=\"M8 12h8v4H8zM0 8h8v4H0zM8 4h8v4H8z\"/><path d=\"M0 4h8v4H0zM0 12h8v4H0z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'individual': {
    "body": "<path d=\"M16.115 11l2.523 9.418a1.25 1.25 0 1 1-2.415.647l-2.521-9.41-.97.263L16.506 26h-3v12.25a1.75 1.75 0 1 1-3.5 0V26h-1v12.25a1.75 1.75 0 1 1-3.5 0V26h-3l3.773-14.082-.969-.263-2.522 9.41a1.25 1.25 0 1 1-2.415-.647L2.897 11c.625-2.334 2.226-3.898 4.699-4l3.823.016c2.47.086 4.07 1.65 4.696 3.984zm-6.61-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "40",
    "viewBox": "0 0 19 40",
    "width": "19"
  },
  'key-stat': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M3.882 12.049c.464 0 .843-.193 1.14-.579.295-.386.443-.924.443-1.616v-.667c-.21.298-.459.523-.746.674a1.957 1.957 0 0 1-.927.228c-.87 0-1.553-.313-2.049-.938C1.248 8.526 1 7.676 1 6.601c0-1.037.294-1.896.881-2.578C2.47 3.34 3.22 3 4.133 3c.944 0 1.714.35 2.31 1.051.596.701.894 1.672.894 2.912v2.785c0 1.193-.325 2.14-.974 2.84-.65.702-1.477 1.052-2.48 1.052-.327 0-.662-.04-1.008-.117a4.809 4.809 0 0 1-.974-.33l.315-1.5c.27.124.534.214.791.27.258.058.55.086.875.086zm.226-3.48c.304 0 .572-.07.804-.206.231-.138.416-.322.553-.554V6.6c0-.649-.12-1.145-.36-1.488-.24-.343-.562-.515-.965-.515-.378 0-.682.193-.914.579-.232.386-.347.86-.347 1.424 0 .592.105 1.068.315 1.428.21.36.515.54.914.54zM11.555 12.049c.48 0 .875-.193 1.183-.579.307-.386.461-.924.461-1.616v-.667a2.097 2.097 0 0 1-1.738.902c-.905 0-1.614-.313-2.13-.938-.514-.625-.771-1.475-.771-2.55 0-1.037.305-1.896.916-2.578.61-.682 1.39-1.023 2.34-1.023.98 0 1.78.35 2.4 1.051.619.701.928 1.672.928 2.912v2.785c0 1.193-.337 2.14-1.012 2.84-.676.702-1.535 1.052-2.577 1.052a4.91 4.91 0 0 1-1.047-.117 5.131 5.131 0 0 1-1.012-.33l.327-1.5c.281.124.555.214.822.27.268.058.57.086.91.086zm.234-3.48c.316 0 .595-.07.835-.206.24-.138.433-.322.575-.554V6.6c0-.649-.125-1.145-.374-1.488a1.178 1.178 0 0 0-1.003-.515c-.392 0-.709.193-.95.579-.24.386-.36.86-.36 1.424 0 .592.109 1.068.327 1.428.219.36.535.54.95.54z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'male': {
    "body": "<path d=\"M12.002 7a3.498 3.498 0 0 1 3.498 3.498V21.75a1.25 1.25 0 0 1-2.5 0V12h-1v26.25a1.75 1.75 0 0 1-3.5 0V23h-1v15.25a1.75 1.75 0 0 1-3.5 0V12H3v9.75a1.25 1.25 0 0 1-2.5 0V10.498A3.498 3.498 0 0 1 3.998 7H12.002zM8 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "40",
    "viewBox": "0 0 16 40",
    "width": "16"
  },
  'networks': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M8.75 5.627V3.325A1.73 1.73 0 0 1 8 3.5a1.73 1.73 0 0 1-.75-.175v2.302c.238-.075.487-.127.75-.127s.512.052.75.127M7.25 10.373v2.302A1.73 1.73 0 0 1 8 12.5c.27 0 .522.066.75.175v-2.302A2.483 2.483 0 0 1 8 10.5c-.263 0-.512-.052-.75-.127M6.826 5.806l-1.61-1.61a1.73 1.73 0 0 1-.398.622 1.727 1.727 0 0 1-.685.416l1.644 1.644a2.492 2.492 0 0 1 1.049-1.072M9.122 10.223l1.644 1.644c.083-.25.217-.486.416-.685.183-.182.396-.312.623-.397l-1.61-1.611a2.498 2.498 0 0 1-1.073 1.049M12.653 7.29h-2.268c.068.226.115.461.115.71 0 .278-.056.54-.14.79h2.337A1.724 1.724 0 0 1 12.5 8c0-.254.056-.493.153-.71M5.615 7.29H3.347c.097.217.153.456.153.71 0 .286-.075.552-.196.79H5.64A2.466 2.466 0 0 1 5.5 8c0-.249.048-.484.115-.71M5.806 9.174l-1.61 1.61c.226.085.44.215.623.398.197.2.332.435.415.685l1.644-1.644a2.492 2.492 0 0 1-1.072-1.049M10.223 6.878l1.644-1.644a1.727 1.727 0 0 1-.685-.416 1.745 1.745 0 0 1-.397-.623l-1.611 1.61c.452.243.817.615 1.049 1.073\" fill-opacity=\".75\"/><path d=\"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 1.25c.689 0 1.25.561 1.25 1.25S8.689 9.25 8 9.25 6.75 8.689 6.75 8 7.311 6.75 8 6.75M9.75 1.75a1.75 1.75 0 1 0-3.501.001A1.75 1.75 0 0 0 9.75 1.75M9.75 14.25a1.75 1.75 0 1 0-3.501.001 1.75 1.75 0 0 0 3.501-.001M13.657 4.818a1.75 1.75 0 1 0-2.477-2.475 1.75 1.75 0 0 0 2.477 2.475M4.818 13.657a1.75 1.75 0 1 0-2.477-2.475 1.75 1.75 0 0 0 2.477 2.475M14.25 9.75a1.75 1.75 0 1 0-.001-3.501 1.75 1.75 0 0 0 .001 3.501M1.75 9.75a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 1.75 9.75M11.182 13.657a1.75 1.75 0 1 0 2.475-2.477 1.75 1.75 0 0 0-2.475 2.477M2.343 4.818a1.75 1.75 0 1 0 2.475-2.477 1.75 1.75 0 0 0-2.475 2.477\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'organisation': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M26.968 8.067A3.031 3.031 0 0 1 30 11.098V20.85a1.084 1.084 0 0 1-2.167 0V12.4h-.866v22.75a1.517 1.517 0 0 1-3.034 0V21.933h-.866V35.15a1.517 1.517 0 0 1-3.034 0V12.4h-.866v8.45a1.084 1.084 0 0 1-2.167 0V11.098a3.031 3.031 0 0 1 3.032-3.031H26.968zM23.5 7.2a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zM9.968 8.067A3.031 3.031 0 0 1 13 11.098V20.85a1.084 1.084 0 0 1-2.167 0V12.4h-.866v22.75a1.517 1.517 0 0 1-3.034 0V21.933h-.866V35.15a1.517 1.517 0 0 1-3.034 0V12.4h-.866v8.45a1.084 1.084 0 0 1-2.167 0V11.098a3.031 3.031 0 0 1 3.032-3.031H9.968zM6.5 7.2a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2z\" fill-opacity=\".75\"/><path d=\"M21.785 11l2.523 9.418a1.25 1.25 0 1 1-2.415.647l-2.521-9.41-.97.263L22.176 26h-3v12.25a1.75 1.75 0 1 1-3.5 0V26h-1v12.25a1.75 1.75 0 1 1-3.5 0V26h-3l3.773-14.082-.969-.263-2.522 9.41a1.25 1.25 0 1 1-2.415-.647L8.567 11c.625-2.334 2.226-3.898 4.699-4l3.823.016c2.47.086 4.07 1.65 4.696 3.984zm-6.61-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\"/></g>",
    "height": "40",
    "viewBox": "0 0 30 40",
    "width": "30"
  },
  'pie-chart': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M3.5 8A4.5 4.5 0 0 1 8 3.5h.001V0c-1.472 0-2.726.336-4 1.072a7.999 7.999 0 0 0-2.928 10.927l3.046-1.759A4.454 4.454 0 0 1 3.5 8\" fill-opacity=\".3\"/><path d=\"M8 12.5c-1.665 0-3.103-.915-3.881-2.26l-3.046 1.759c.736 1.274 1.654 2.192 2.928 2.928a7.999 7.999 0 0 0 10.927-2.928l-3.047-1.759C11.103 11.585 9.666 12.5 8 12.5\" fill-opacity=\".75\"/><path d=\"M8 0v3.5A4.5 4.5 0 0 1 12.5 8c0 .82-.235 1.578-.618 2.24l3.047 1.759c.735-1.274 1.07-2.529 1.07-4A7.999 7.999 0 0 0 8.002 0\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'polar-chart': {
    "body": "<g fill-rule=\"nonzero\" fill=\"currentColor\"><path d=\"M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\"/><path d=\"M8 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10z\" fill-opacity=\".75\"/><path d=\"M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\" fill-opacity=\".3\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'spline-chart': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><circle transform=\"matrix(1 0 0 -1 0 20)\" cx=\"2\" cy=\"10\" r=\"2\"/><path fill-opacity=\".3\" fill-rule=\"nonzero\" d=\"M7.919 5.142L13.4 12.45l1.2-.9-6.519-8.692L1.47 9.47l1.06 1.06z\"/><circle transform=\"matrix(1 0 0 -1 0 8)\" cx=\"8\" cy=\"4\" r=\"2\"/><circle transform=\"matrix(1 0 0 -1 0 24)\" cx=\"14\" cy=\"12\" r=\"2\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'stream-graph': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M8 5C5 5 0 0 0 0v5s3 2 8 2 8-2 8-2V0s-5 5-8 5\"/><path d=\"M0 11v5s5-5 8-5 8 5 8 5v-5s-3-2-8-2-8 2-8 2\" fill-opacity=\".3\"/><path d=\"M0 5v6s3-2 8-2 8 2 8 2V5s-3 2-8 2-8-2-8-2\" fill-opacity=\".75\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'table': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path fill-opacity=\".75\" d=\"M0 1h10v3H0zM0 6h10v3H0z\"/><path d=\"M12 1h4v3h-4zM12 6h4v3h-4z\"/><path fill-opacity=\".75\" d=\"M0 11h10v3H0z\"/><path d=\"M12 11h4v3h-4z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'tree-map': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M0 0h10.5v10.25H0z\"/><path fill-opacity=\".75\" d=\"M0 11.5h16V16H0z\"/><path fill-opacity=\".3\" d=\"M11.5 0H16v4.5h-4.5zM11.5 5.75H16v4.5h-4.5z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'twitter-verified': {
    "body": "<g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"currentColor\" d=\"M11.29 6.622h-.014l-3.865 3.88h-.014a.648.648 0 0 1-.225.153.643.643 0 0 1-.267.057.618.618 0 0 1-.281-.057.733.733 0 0 1-.24-.154L4.713 8.814c-.155-.126-.211-.323-.211-.505-.015-.184.083-.352.196-.507.169-.126.324-.21.52-.21.197 0 .352.084.506.21l1.167 1.18 3.387-3.373c.112-.154.323-.21.506-.21.169 0 .366.056.492.21.154.127.21.324.225.492 0 .183-.1.367-.211.521m3.316.268c-.266-.422-.603-.747-1.054-.957a.715.715 0 0 0 .085-.225l.043-.239.042-.239c0-.07 0-.155.013-.238a2.807 2.807 0 0 0-.758-1.884 2.432 2.432 0 0 0-2.684-.619c-.226-.435-.52-.815-.914-1.08A2.488 2.488 0 0 0 7.988 1c-.493 0-.971.141-1.35.408-.394.266-.745.646-.928 1.081a2.64 2.64 0 0 0-.435-.126 2.459 2.459 0 0 0-2.264.745 2.718 2.718 0 0 0-.73 1.884.634.634 0 0 0 0 .238c.014.084.014.168.028.24.014.084.028.17.056.238l.056.225c-.407.21-.787.535-1.026.957-.238.42-.407.912-.394 1.432-.013.506.128.97.352 1.363.225.41.576.746.928.97a.09.09 0 0 1 0 .084.086.086 0 0 0 0 .085v.085a.082.082 0 0 0 0 .083 2.667 2.667 0 0 0 .73 1.884 2.512 2.512 0 0 0 1.8.787c.168 0 .294-.027.464-.057a2.32 2.32 0 0 0 .435-.112c.183.45.534.816.928 1.082.379.268.857.422 1.35.422.52 0 .983-.154 1.39-.422.395-.266.689-.633.915-1.082.126.057.294.085.435.112.14.03.294.057.45.057.717 0 1.335-.309 1.799-.787a2.751 2.751 0 0 0 .758-1.884.093.093 0 0 1 0-.083c0-.029 0-.057-.013-.085a.086.086 0 0 1 0-.085c0-.027-.015-.055-.028-.084.408-.224.717-.56.955-.97.225-.393.338-.857.35-1.363-.012-.52-.125-1.012-.393-1.432\"/><path fill=\"#FFF\" d=\"M15 8.323c-.014-.521-.126-1.012-.394-1.433-.266-.422-.603-.746-1.054-.957a.698.698 0 0 0 .085-.225l.042-.24.042-.237c0-.07 0-.155.014-.238a2.804 2.804 0 0 0-.76-1.884 2.428 2.428 0 0 0-2.247-.745 2.14 2.14 0 0 0-.435.126c-.227-.436-.52-.816-.915-1.081a2.478 2.478 0 0 0-1.391-.41c-.492 0-.97.142-1.35.41-.393.265-.744.645-.927 1.08a2.47 2.47 0 0 0-.9-.168c-.688 0-1.35.296-1.8.788a2.715 2.715 0 0 0-.73 1.884.634.634 0 0 0 0 .238c.015.085.015.168.029.238.014.085.027.169.055.239l.057.225c-.408.21-.788.535-1.026.957-.24.42-.408.912-.394 1.433-.014.506.127.969.352 1.363.225.408.576.745.928.97a.09.09 0 0 1 0 .084.086.086 0 0 0 0 .085v.085a.082.082 0 0 0 0 .083 2.663 2.663 0 0 0 .73 1.883c.45.479 1.11.788 1.8.788.168 0 .294-.028.463-.057a2.41 2.41 0 0 0 .436-.112c.183.449.534.815.928 1.082a2.36 2.36 0 0 0 1.349.42c.52 0 .984-.153 1.39-.42.396-.267.689-.633.916-1.082.126.056.294.085.435.112.14.029.294.057.449.057.718 0 1.336-.31 1.799-.788.464-.477.745-1.137.759-1.883a.087.087 0 0 1 0-.083c0-.03 0-.058-.014-.085a.091.091 0 0 1 0-.085c0-.028-.014-.055-.028-.084.408-.225.717-.562.956-.97.225-.394.337-.857.35-1.363zm-1.305 5.249c-.671.692-1.552 1.092-2.518 1.092-.144 0-.276-.012-.42-.035a3.541 3.541 0 0 1-.83.784 3.493 3.493 0 0 1-1.94.585 3.342 3.342 0 0 1-1.91-.593 3.788 3.788 0 0 1-.847-.776l-.05.008a2.525 2.525 0 0 1-.37.027 3.511 3.511 0 0 1-2.527-1.102 3.66 3.66 0 0 1-1.001-2.408 3.65 3.65 0 0 1-.798-.973C.157 9.607-.017 8.964.002 8.349c-.02-.678.174-1.336.522-1.952.199-.351.465-.66.778-.918l-.006-.074a1.635 1.635 0 0 1-.016-.48c.004-.93.369-1.81.993-2.492A3.459 3.459 0 0 1 5.24 1.348c.233-.292.513-.55.82-.757A3.343 3.343 0 0 1 7.988 0c.709 0 1.364.194 1.952.58.309.209.577.466.81.767a3.429 3.429 0 0 1 2.955 1.075 3.816 3.816 0 0 1 1.03 2.55l-.012.185-.001.074-.015.172-.013.077c.29.242.542.534.758.874.358.564.53 1.217.549 1.996-.02.675-.176 1.295-.482 1.83-.222.38-.48.699-.783.962-.056.94-.421 1.793-1.04 2.43z\"/><path fill=\"#FFF\" d=\"M11.29 6.622c.112-.154.21-.338.21-.52-.013-.169-.07-.366-.224-.493a.632.632 0 0 0-.492-.21c-.183 0-.394.056-.506.21L6.89 8.982l-1.167-1.18c-.154-.126-.31-.21-.506-.21s-.351.084-.52.21c-.113.155-.211.323-.196.507 0 .182.056.38.21.505l1.672 1.687a.733.733 0 0 0 .24.154.618.618 0 0 0 .28.057c.07 0 .183-.014.268-.057a.648.648 0 0 0 .225-.154h.014c-.014 0-.014 0 0 0-.014 0-.014 0 0 0l3.865-3.879h.014z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'video': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M10.667 3C11.404 3 12 3.559 12 4.25v7.5c0 .691-.596 1.25-1.333 1.25H1.333C.597 13 0 12.441 0 11.75v-7.5C0 3.559.597 3 1.333 3h9.334zM12 10.053V5.947l2.936-2.191c.452-.338 1.064.017 1.064.617v7.254c0 .6-.612.954-1.064.617L12 10.055zM4.5 5.5v5l4-2.5-4-2.5z\"/><path fill-opacity=\".3\" d=\"M4.5 5.5v5l4-2.5z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'weather': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M12.75 4.5c-.122 0-.24.023-.359.037A4.505 4.505 0 0 0 8 1C5.86 1 4.053 2.519 3.607 4.535c-.119-.013-.236-.035-.357-.035A3.254 3.254 0 0 0 0 7.75 3.254 3.254 0 0 0 3.25 11H5a.75.75 0 0 0 0-1.5H3.25c-.965 0-1.75-.785-1.75-1.75S2.285 6 3.25 6c.467 0 .906.182 1.237.513a.75.75 0 1 0 1.061-1.061 3.293 3.293 0 0 0-.5-.41C5.272 3.609 6.51 2.5 8 2.5a3.004 3.004 0 0 1 2.813 4.047.75.75 0 1 0 1.406.523c.124-.336.192-.685.234-1.04.098-.016.196-.03.297-.03.965 0 1.75.785 1.75 1.75s-.785 1.75-1.75 1.75H11a.75.75 0 0 0 0 1.5h1.75A3.254 3.254 0 0 0 16 7.75a3.254 3.254 0 0 0-3.25-3.25\"/><path d=\"M7.642 9.54c-.324.08-.625.26-.842.548a1.5 1.5 0 1 0 2.695.995v.002-.012c.002-.008 0-.016 0-.025L9.5 9l-1.858.54zM3.893 12.54a1.49 1.49 0 0 0-.842.548 1.5 1.5 0 1 0 2.695.996h.001v-.035l.004-2.05-1.858.54z\" fill-opacity=\".75\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'web-url': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M6.662 11.64c1.408 1.268 3.61 1.074 4.95-.266l2.97-2.97c1.632-1.632 1.827-3.834.558-5.242a3.5 3.5 0 0 0-5.08-.137l-.096.097a.75.75 0 0 0 1.061 1.06l.017-.017c.705-.704 1.839-.879 2.649-.299a2.003 2.003 0 0 1 .259 3.048l-3.456 3.456c-.705.705-1.84.88-2.65.3a2.003 2.003 0 0 1-.258-3.049l.033-.032a.75.75 0 1 0-1.061-1.061l-.033.033a3.5 3.5 0 0 0 .137 5.08\" fill-opacity=\".75\"/><path d=\"M9.305 4.603c-1.408-1.268-3.61-1.074-4.95.266l-2.97 2.97C-.247 9.47-.442 11.673.827 13.08a3.5 3.5 0 0 0 5.079.137l.097-.097a.75.75 0 0 0-1.061-1.06l-.017.017c-.705.704-1.839.879-2.649.299a2.003 2.003 0 0 1-.259-3.048l3.456-3.456c.705-.705 1.839-.88 2.649-.3a2.003 2.003 0 0 1 .259 3.049l-.033.032a.75.75 0 1 0 1.061 1.061l.033-.033a3.5 3.5 0 0 0-.137-5.08\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'word-cloud': {
    "body": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M0 7h8v3H0zM8 3h6v3H8z\"/><path fill-opacity=\".75\" d=\"M9 7h7v2H9z\"/><path fill-opacity=\".3\" d=\"M10 10h4v2h-4z\"/><path fill-opacity=\".75\" d=\"M2 11h7v2H2z\"/><path fill-opacity=\".3\" d=\"M1 4h6v2H1z\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  }
};

var Pictogram = function (_Component) {
  _inherits(Pictogram, _Component);

  function Pictogram() {
    _classCallCheck(this, Pictogram);

    return _possibleConstructorReturn(this, (Pictogram.__proto__ || Object.getPrototypeOf(Pictogram)).apply(this, arguments));
  }

  _createClass(Pictogram, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          size = _props.size,
          rest = _objectWithoutProperties(_props, ['name', 'size']);

      var style = { width: size, height: size };

      if (!PICTOGRAM_NAME_MAP[name]) {
        return null;
      }

      var _PICTOGRAM_NAME_MAP$n = PICTOGRAM_NAME_MAP[name],
          body = _PICTOGRAM_NAME_MAP$n.body,
          viewBox = _PICTOGRAM_NAME_MAP$n.viewBox;


      return React.createElement(Base, _extends({}, rest, {
        Component: 'svg',
        className: 'ax-pictogram',
        dangerouslySetInnerHTML: { __html: body },
        style: style,
        viewBox: viewBox }));
    }
  }]);

  return Pictogram;
}(Component);

Pictogram.defaultProps = {
  size: '3rem'
};
export default Pictogram;