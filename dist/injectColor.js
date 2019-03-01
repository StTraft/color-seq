"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _getPercentageString=_interopRequireDefault(require("./lib/getPercentageString")),_sigmoid=_interopRequireDefault(require("./lib/sigmoid")),_hsv2rgb3=_interopRequireDefault(require("./lib/hsv2rgb")),_decimal=_interopRequireDefault(require("decimal.js"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}var _default=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},d=c.format,e=void 0===d?"hash":d,f=c.satBase,h=void 0===f?18:f,i=c.satRange,j=void 0===i?31:i,k=c.lumBase,l=void 0===k?54:k,m=c.lumRange,n=void 0===m?41:m,o=c.inject;return b.map(function(c,d,f){// generate Hue value from segment.label
var i=c.label.split("").reduce(function(a,b){return a+b.charCodeAt(0)},0),k=h+j*(0,_sigmoid.default)(parseFloat((0,_getPercentageString.default)(a,c.value))),m=parseFloat(_decimal.default.sin(Math.PI*d/(f.length/3)).times(n).plus(l).toFixed(2)),p=(0,_hsv2rgb3.default)(i%360,k,m),q=_slicedToArray(p,3),s=q[0],r=q[1],g=q[2];return!(void 0!==o)||o?_objectSpread({},c,{color:"hash"===e?"#".concat(s.toString(16)).concat(r.toString(16)).concat(g.toString(16)):"rgb(".concat(s,", ").concat(r,", ").concat(g,")")}):{color:"hash"===e?"#".concat(s.toString(16)).concat(r.toString(16)).concat(g.toString(16)):"rgb(".concat(s,", ").concat(r,", ").concat(g,")")}})};exports.default=_default;