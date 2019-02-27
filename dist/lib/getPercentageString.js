"use strict";var _decimal=_interopRequireDefault(require("decimal.js"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/**
 * @param total - sum up of all input values
 * @param value - value of the segment
 * @returns number string with toFixed 2
 */var _default=function(a,b){return new _decimal.default(b).times(new _decimal.default(100)).dividedBy(new _decimal.default(a)).toFixed(2)};exports.default=_default;