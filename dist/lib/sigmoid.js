"use strict";var _decimal=_interopRequireDefault(require("decimal.js"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/**
 * 
 * @param x
 * @returns x:0 y:0.5 -- x:10 y:1
 */var sigmoid=function(a){return parseFloat(new _decimal.default(1).dividedBy(new _decimal.default(1).plus(new _decimal.default(a).neg().exp())).toFixed(4))},_default=function(a){return parseFloat(new _decimal.default(sigmoid(a)).minus(new _decimal.default(.5)).times(2).toFixed(4))};exports.default=_default;